import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/home";
import TeamPage from "../pages/team/team";
import InvestorsPage from "../pages/investors/investors";
import EventsPage from "../pages/events/event";
import ContactPage from "../pages/contact/contact";
import DetailEvent from "../pages/detailEvent";
import LegalNotice from "../pages/legalPages/LegalNotice";
import TermsUse from "../pages/legalPages/TermsUse";
import PrivacyPolicy from "../pages/legalPages/PrivacyPolicy";
import CookiePolicy from "../pages/legalPages/CookiePolicy";
import Blog from "../pages/blog/blog";
import ProfessionalPage from "../pages/professional/professional";
import FAQ from "../pages/FAQ";
// import AnNK from "../components/AnNK";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/investors" element={<InvestorsPage />} />
      <Route path="events" element={<EventsPage />} />
      {/* <Route path="event/:id" element={<DetailEvent />} /> */}
      <Route path="events/:slug" element={<DetailEvent />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="professional" element={<ProfessionalPage />} />
      <Route path="legal-notices" element={<LegalNotice />} />
      <Route path="terms-of-use" element={<TermsUse />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="cookie-policy" element={<CookiePolicy />} />
      <Route path="faq" element={<FAQ />} />
      {/* <Route path="annk" element={<AnNK />} /> */}

      {/* <Route path="/posts/:slug" element={<Navigate to=".." replace />} />
      <Route path="/pages/:slug" element={<Navigate to=".." replace />} />

      <Route path="/:slug" element={<DynamicContent />} /> */}
      {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
    </Routes>
  );
}
