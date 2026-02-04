import { useState } from "react";
import { Pagination } from "antd";
import BLogCard from "./BLogCard";
import { useNavigate } from "react-router-dom";
import "../blog.css";

const PAGE_SIZE = 6;

export default function BlogList() {
  // Base data
  const BASE_ARTICLES = [
    {
      category: "Padel",
      title: "How to Monetize Your Padel Sessions with Smatchy Pro",
      description:
        "Discover practical ways to monetize padel sessions and build sustainable income streams.",
      image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e",
      date: "20 Jan 2026",
      readTime: "3 min read",
    },
    {
      category: "Hiking",
      title:
        "From Casual Walks to Organized Hikes: A Smarter Way to Hike Together",
      description:
        "Learn how organized hiking helps people connect, stay motivated, and explore safely.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      date: "18 Jan 2026",
      readTime: "8 min read",
    },
    {
      category: "Bike",
      title: "Top Tools Every Bike Rider Should Know",
      description:
        "Explore practical tools that make bike rides easier, safer, and more enjoyable.",
      image: "https://images.unsplash.com/photo-1518655048521-f130df041f66",
      date: "30 Dec 2025",
      readTime: "5 min read",
    },
  ];
  const navigate = useNavigate();
  // Generate 120 articles → 20 pages
  const articles = Array.from({ length: 120 }, (_, index) => ({
    id: index + 1,
    ...BASE_ARTICLES[index % BASE_ARTICLES.length],
    title: `${BASE_ARTICLES[index % BASE_ARTICLES.length].title} #${index + 1}`,
  }));

  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * PAGE_SIZE;
  const currentArticles = articles.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div className="relative space-y-10 z-40">
      {/* Blog grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => navigate(`/blogs/${article.id}`)}
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
