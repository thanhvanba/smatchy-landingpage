import { useEffect, useMemo } from "react";
import Loading from "../../../components/Loading";
import { useLocale } from "../../../contexts/LangContext";
import { useCategory } from "../../../hooks/usePost";
import type { Category } from "../../../services/types/post";

interface CategoryBlogProps {
  selectedCategorySlug: string | null;
  onSelectCategory: (slug: string | null) => void;
  availableCategorySlugs?: string[]; // Categories có blog posts
}

export default function CategoryBlog({
  selectedCategorySlug,
  onSelectCategory,
  availableCategorySlugs = [],
}: CategoryBlogProps) {
  // ✅ Gọi tất cả hooks TRƯỚC conditionals
  const { locale } = useLocale();

  const { data, isLoading, isError, error } = useCategory();

  const allLabel = locale === "en" ? "All" : "Tous";
  // Chỉ lấy categories có slug và có blog posts
  const categoriesList = Array.isArray(data)
    ? data.filter(
        (item: Category) =>
          item.slug &&
          item.slug.trim() !== "" &&
          availableCategorySlugs.includes(item.slug),
      )
    : [];

  // Display categories list + slugs
  const categories = useMemo(() => {
    const baseCats = [{ name: allLabel, slug: null }];
    const filteredCats = categoriesList.map((item: Category) => ({
      name: item.name,
      slug: item.slug,
    }));
    return [...baseCats, ...filteredCats];
  }, [categoriesList, allLabel]);

  useEffect(() => {
    onSelectCategory(null); // null = "All"
  }, [locale, onSelectCategory]);

  // ✅ Conditionals SAU tất cả hooks
  if (isLoading) return <Loading />;

  if (isError) {
    return <div className="container">Error: {error?.message}</div>;
  }

  return (
    // <div className="py-1 sm:py-1.5 md:py-2 lg:py-3 xl:py-4 mb-1 sm:mb-1.5 md:mb-2 lg:mb-3">
    // <div className="py-1 md:py-3 lg:py-4 mb-2 lg:mb-3">
    //   {/* Category Select Buttons */}
    //   <div className="flex justify-start">
    //     <div className="flex flex-wrap gap-3 pb-2">
    //       {categories.map((category, index) => (
    //         <button
    //           key={`category-${index}`}
    //           onClick={() => onSelectCategory(category.slug)}
    //           className={`px-6 py-2 rounded-full whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
    //             selectedCategorySlug === category.slug
    //               ? "bg-[#FCA13B] text-white"
    //               : "bg-white text-[#0A4A60] border border-[#0A4A60] hover:bg-gray-100"
    //           }`}
    //         >
    //           {category.name}
    //         </button>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    // ver1
    // <div className="py-2 md:py-3 lg:py-4 mb-2 md:mb-3 lg:mb-4 bg-amber-400">
    //   {/* Category Select Buttons */}
    //   <div className="flex justify-start">
    //     <div className="flex flex-wrap gap-2 md:gap-3 pb-1 md:pb-2">
    //       {categories.map((category, index) => (
    //         <button
    //           key={`category-${index}`}
    //           onClick={() => onSelectCategory(category.slug)}
    //           className={`px-4 md:px-5 lg:px-6 py-1.5 md:py-2 rounded-full whitespace-nowrap shrink-0 cursor-pointer transition-all text-sm md:text-base ${
    //             selectedCategorySlug === category.slug
    //               ? "bg-[#FCA13B] text-white shadow-md"
    //               : "bg-white text-[#0A4A60] border border-[#0A4A60] hover:bg-gray-50"
    //           }`}
    //         >
    //           {category.name}
    //         </button>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    // ver2
    <div className="py-2 md:py-3 lg:py-4 mb-2 md:mb-3 lg:mb-4">
      {/* Category Select Buttons */}
      <div className="relative">
        {/* Scrollable container - căn giữa */}
        <div className="overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden">
          <div className="flex md:flex-wrap md:justify-start items-center gap-2 md:gap-3 py-1 md:py-2">
            {categories.map((category, index) => (
              <button
                key={`category-${index}`}
                onClick={() => onSelectCategory(category.slug)}
                className={`px-4 md:px-5 lg:px-6 py-1.5 md:py-2 rounded-full whitespace-nowrap shrink-0 cursor-pointer transition-all text-sm md:text-base flex items-center justify-center ${
                  selectedCategorySlug === category.slug
                    ? "bg-[#FCA13B] text-white shadow-md"
                    : "bg-white text-[#0A4A60] border border-[#0A4A60] hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
