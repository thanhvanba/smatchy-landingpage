import { Pagination } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import { usePost } from "../../../hooks/usePost";
import "../blog.css";
import BLogCard from "./BLogCard";

const PAGE_SIZE = 6;

interface BlogListProps {
  selectedCategorySlug: string | undefined; // undefined = fetch all
}

export default function BlogList({ selectedCategorySlug }: BlogListProps) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch posts từ API theo category slug (undefined = all)
  const { data, isLoading, isError, error } = usePost(
    selectedCategorySlug,
    "*",
  );

  if (isLoading) return <Loading />;

  if (isError) {
    return <div className="container">Error: {error?.message}</div>;
  }

  // Base data (fallback nếu API không trả)
  const BASE_ARTICLES = [
    {
      id: 1,
      documentId: "fallback-1",
      slug: "how-to-monetize-padel",
      title: "How to Monetize Your Padel Sessions with Smatchy Pro",
      excerpt:
        "Discover practical ways to monetize padel sessions and build sustainable income streams.",
      featuredImage: null,
      content: "",
      contents: [],
      publishedAt: "2026-01-20T00:00:00Z",
      createdAt: "2026-01-20T00:00:00Z",
      updatedAt: "2026-01-20T00:00:00Z",
      categories: [
        {
          id: 1,
          documentId: "cat-1",
          name: "Padel",
          slug: "padel",
          publishedAt: "",
          createdAt: "",
          updatedAt: "",
        },
      ],
    },
    {
      id: 2,
      documentId: "fallback-2",
      slug: "organized-hikes-smarter-way",
      title:
        "From Casual Walks to Organized Hikes: A Smarter Way to Hike Together",
      excerpt:
        "Learn how organized hiking helps people connect, stay motivated, and explore safely.",
      featuredImage: null,
      content: "",
      contents: [],
      publishedAt: "2026-01-18T00:00:00Z",
      createdAt: "2026-01-18T00:00:00Z",
      updatedAt: "2026-01-18T00:00:00Z",
      categories: [
        {
          id: 2,
          documentId: "cat-2",
          name: "Hiking",
          slug: "hiking",
          publishedAt: "",
          createdAt: "",
          updatedAt: "",
        },
      ],
    },
    {
      id: 3,
      documentId: "fallback-3",
      slug: "top-tools-bike-riders",
      title: "Top Tools Every Bike Rider Should Know",
      excerpt:
        "Explore practical tools that make bike rides easier, safer, and more enjoyable.",
      featuredImage: null,
      content: "",
      contents: [],
      publishedAt: "2025-12-30T00:00:00Z",
      createdAt: "2025-12-30T00:00:00Z",
      updatedAt: "2025-12-30T00:00:00Z",
      categories: [
        {
          id: 3,
          documentId: "cat-3",
          name: "Bike",
          slug: "bike",
          publishedAt: "",
          createdAt: "",
          updatedAt: "",
        },
      ],
    },
  ];

  // API data hoặc fallback, filter những posts có slug và categories
  let articles = (data?.data || BASE_ARTICLES).filter(
    (article) =>
      article.slug &&
      article.slug.trim() !== "" &&
      article.categories &&
      article.categories.length > 0,
  );

  // Sort by updatedAt descending (newest first)
  articles = articles.sort(
    (a, b) =>
      new Date(b.updatedAt || b.createdAt).getTime() -
      new Date(a.updatedAt || a.createdAt).getTime(),
  );

  // Filter by search term
  if (searchTerm.trim()) {
    articles = articles.filter(
      (article) =>
        article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  const startIndex = (page - 1) * PAGE_SIZE;
  const currentArticles = articles.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div className="relative space-y-10 z-40">
      {/* Search Input */}
      <div className="mt-6" data-aos="fade-up" data-aos-duration="1000">
        <div className="relative w-full mx-auto">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#0A4A60]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search blog posts..."
            className="w-full px-4 py-2 pl-10 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCA13B]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Blog grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentArticles.map((article) => (
          <div
            key={article.slug}
            onClick={() => navigate(`/blogs/${article.slug}`)}
            className="cursor-pointer"
          >
            <BLogCard {...article} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center custom-pagination">
        <Pagination
          showLessItems
          current={page}
          pageSize={PAGE_SIZE}
          total={articles.length}
          onChange={(p) => setPage(p)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
