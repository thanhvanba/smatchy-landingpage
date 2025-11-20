import ListProblemSolution from "./ListProblemSolution";
import Loading from "../../../components/Loading";
import { useInvestor } from "../../../hooks/useInvestor";
import type { SectionItem } from "../types";
import problemIcon1 from "/investors/finding-user.png";
import problemIcon2 from "/investors/team-sport.png";
import problemIcon3 from "/investors/coach.png";
import problemIcon4 from "/investors/shake-hands.png";
import problemIcon5 from "/investors/earn-money.png";
import problemIcon6 from "/investors/ecosystem.png";

const assetBaseEnv =
  import.meta.env.VITE_STRAPI_ASSET_URL ||
  import.meta.env.VITE_STRAPI_URL?.replace("/api", "") ||
  "https://strapi.annk.info";
const STRAPI_ASSET_BASE = assetBaseEnv.replace(/\/$/, "");

const FALLBACK_PROBLEM_ICONS = [problemIcon2, problemIcon1, problemIcon3];
const FALLBACK_SOLUTION_ICONS = [problemIcon4, problemIcon5, problemIcon6];

const toAbsoluteUrl = (url?: string | null) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${STRAPI_ASSET_BASE}${url}`;
};

const mapItems = (
  items: any[] | undefined,
  fallbacks: string[]
): SectionItem[] => {
  if (!Array.isArray(items)) return [];
  return items.map((item, index) => ({
    icon: toAbsoluteUrl(item.icon?.url) || fallbacks[index % fallbacks.length],
    title: item.title || item.heading || "",
    description: item.description || item.sub_heading || "",
  }));
};

const ProblemSolution = () => {
  const { data, isLoading, error } = useInvestor();

  if (isLoading) return <Loading />;
  if (error) return null;

  const block = data?.blocks?.find(
    (b: any) => b.__component === "blocks.problem-solution"
  );

  if (!block) return null;

  const problem = {
    title: block.problem_title || "The Problem",
    items: mapItems(block.problem_items, FALLBACK_PROBLEM_ICONS),
  };

  const solution = {
    title: block.solution_title || "The Solution",
    items: mapItems(block.solution_items, FALLBACK_SOLUTION_ICONS),
  };

  return (
    <div className="relative z-40" data-aos="fade-up" data-aos-duration="1000">
      <div className="container py-6! md:py-8! lg:py-10! px-2! md:px-4! lg:px-6!">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <ListProblemSolution
            title={problem.title}
            items={problem.items}
            bgColor="#F6E3E3"
            accentColor="#C73F3F"
          />
          <ListProblemSolution
            title={solution.title}
            items={solution.items}
            bgColor="#DDEDE5"
            accentColor="#1F8554"
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;
