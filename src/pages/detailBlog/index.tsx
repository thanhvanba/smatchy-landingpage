import { FaArrowLeft } from "react-icons/fa6";
import RelatedArticles from "./components/RelatedArticles";
import heroBanner from "/hero-banner.png";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BlogDetail() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="relative w-full h-16 md:h-20 pt-10 md:pt-16 lg:pt-20 z-50"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="min-h-screen mb-40">
        <div className="sticky bg-whtie top-5 border-b border-[#ECEEEF] py-9 shadow">
          {/* Back */}
          <button
            onClick={() => navigate("/blogs")}
            className="flex items-center gap-2 cursor-pointer container"
          >
            <div className="text-white bg-[#FCA13B] rounded-full p-2">
              <FaArrowLeft size={20} />
            </div>
            <span className="text-[#0F262E] hover:text-[#0F262E]/80 font-bold">
              Retour à la liste de blog
            </span>
          </button>
        </div>
        <div className="relative z-40 container space-y-6 mt-7!">
          <div className="bg-[#E2F6F6] p-5 rounded-2xl">
            {/* Hero */}
            <div className="relative rounded-2xl overflow-hidden shadow mb-6">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                alt="trail"
                className="w-full h-[360px] object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                <span className="inline-block bg-[#FCA13B] text-lg font-semibold px-5 py-1 rounded-full">
                  Trail
                </span>
                <h1 className="text-4xl font-bold">
                  Connect through trail experiences
                </h1>
              </div>
            </div>
            {/* Meta */}
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#8FE5E5] flex items-center justify-center text-[#0A4A60] font-bold">
                SC
              </div>
              <div className="space-y-1">
                <p className="font-bold text-[#0A4A60]">Smatchy Team</p>
                <div className="flex justify-between text-[#6B797E] group-hover:text-white text-xs md:text-xs lg:text-sm gap-2 md:gap-3 lg:gap-4">
                  <p className="flex justify-center items-center gap-0.5 md:gap-1">
                    <MdOutlineCalendarMonth />
                    Oct 28, 2025
                  </p>
                  <p className="flex justify-center items-center gap-0.5 md:gap-1">
                    <FaRegClock />6 min read
                  </p>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="space-y-4 text-[#0F262E]">
              <p>
                In the heart of the wilderness, we find more than just
                picturesque landscapes; we find each other. Trail experiences
                have a unique way of stripping away the noise of modern life,
                leaving only the quiet.
              </p>

              <h2 className="text-xl font-semibold text-[#0A4A60]">
                The power of shared paths
              </h2>

              <p>
                When we set out on the trail together, the goal was simple:
                finish the section and reach the summit. However, the mountain
                had other plans.
              </p>

              {/* Quote */}
              <blockquote className="bg-[#0A4A60] text-white rounded-xl p-6 text-center text-2xl font-bold">
                “The mountain doesn’t care about your job title or your
                followers. It only cares about how you help the person next to
                you.”
              </blockquote>

              <h2 className="text-xl font-semibold text-[#0A4A60]">
                Find your community
              </h2>

              <p>
                Through Smatchy, we have witnessed hundreds of these
                connections. What starts as a weekend hike often transforms into
                a lifelong support system.
              </p>

              {/* Image in content */}
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="group hiking"
                className="rounded-xl"
              />

              <p>
                In those moments, it becomes clear that community is not built
                through grand gestures, but through small acts of support.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {["Smatchy", "Trail", "SharedJourney", "Community"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-semibold rounded-full bg-white text-[#0A4A60]"
                    >
                      #{tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <RelatedArticles />
        </div>
      </div>
    </>
  );
}
