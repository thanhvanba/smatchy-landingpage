import { useState } from "react";

export default function CategoryBlog() {
  const categories = [
    "All",
    "General",
    "Badminton",
    "Basketball",
    "Bike",
    "Climbing",
    "Football",
    "Golf",
    "Hiking",
    "Padel",
    "Running",
    "Swimming",
    "Table Tennis",
    "Tennis",
    "Trail",
    "Trampoline",
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  return (
    <div className="py-5">
      <div className="flex justify-start">
        <div className="flex flex-wrap gap-3 pb-2">
          {categories.map((category, index) => (
            <button
              key={`category-${index}`}
              onClick={() => setSelectedCategory(category as string)}
              className={`px-6 py-2 rounded-full whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#FCA13B] text-white"
                  : "bg-white text-[#0A4A60] "
              }`}
            >
              {category as string}
            </button>
          ))}
        </div>
      </div>
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
            placeholder="Search articles..."
            className="w-full px-4 py-2 pl-10 pr-10 border border-slate-300 focus:border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCA13B]"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
