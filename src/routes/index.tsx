import { Navigate, Route, Routes } from "react-router-dom";
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
import ProfessionalPage from "../pages/professional/professional";
import FAQ from "../pages/FAQ";
import Blog from "../pages/blog";
import BlogDetail from "../pages/detailBlog";
import GeneralTermsConditions from "../pages/legalPages/GeneralTermsConditions";
import LocaleLayout from "../components/LocaleLayout";
import { DEFAULT_LOCALE } from "../contexts/LangContext";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Root redirect → default locale */}
      <Route path="/" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />

      {/* ========== ENGLISH routes: /en/... ========== */}
      <Route path="/en" element={<LocaleLayout />}>
        <Route index element={<HomePage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="investors" element={<InvestorsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="events/:slug" element={<DetailEvent />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="blogs/:slug" element={<BlogDetail />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="professional" element={<ProfessionalPage />} />
        <Route path="legal-notices" element={<LegalNotice />} />
        <Route path="terms-of-use" element={<TermsUse />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
        <Route path="general-conditions-of-sale" element={<GeneralTermsConditions />} />
        <Route path="faq" element={<FAQ />} />
      </Route>

      {/* ========== FRENCH routes: /fr/... ========== */}
      <Route path="/fr" element={<LocaleLayout />}>
        <Route index element={<HomePage />} />
        <Route path="equipe" element={<TeamPage />} />
        <Route path="investisseurs" element={<InvestorsPage />} />
        <Route path="evenements" element={<EventsPage />} />
        <Route path="evenements/:slug" element={<DetailEvent />} />
        {/* Alias: keep /fr/events/:slug working for lang switch from English */}
        <Route path="events/:slug" element={<DetailEvent />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="blogs/:slug" element={<BlogDetail />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="professionnel" element={<ProfessionalPage />} />
        <Route path="mentions-legales" element={<LegalNotice />} />
        <Route path="conditions-utilisation" element={<TermsUse />} />
        <Route path="politique-de-confidentialite" element={<PrivacyPolicy />} />
        <Route path="politique-cookies" element={<CookiePolicy />} />
        <Route path="conditions-generales-de-vente" element={<GeneralTermsConditions />} />
        <Route path="faq" element={<FAQ />} />
      </Route>

      {/* ========== Legacy redirects (old URLs without locale prefix) ========== */}
      <Route path="/team" element={<Navigate to={`/${DEFAULT_LOCALE}/team`} replace />} />
      <Route path="/investors" element={<Navigate to={`/${DEFAULT_LOCALE}/investors`} replace />} />
      <Route path="/events" element={<Navigate to={`/${DEFAULT_LOCALE}/events`} replace />} />
      <Route path="/events/:slug" element={<LegacyRedirect base="events" />} />
      <Route path="/blogs" element={<Navigate to={`/${DEFAULT_LOCALE}/blogs`} replace />} />
      <Route path="/blogs/:slug" element={<LegacyRedirect base="blogs" />} />
      <Route path="/contact" element={<Navigate to={`/${DEFAULT_LOCALE}/contact`} replace />} />
      <Route path="/professional" element={<Navigate to={`/${DEFAULT_LOCALE}/professional`} replace />} />
      <Route path="/legal-notices" element={<Navigate to={`/${DEFAULT_LOCALE}/legal-notices`} replace />} />
      <Route path="/terms-of-use" element={<Navigate to={`/${DEFAULT_LOCALE}/terms-of-use`} replace />} />
      <Route path="/privacy-policy" element={<Navigate to={`/${DEFAULT_LOCALE}/privacy-policy`} replace />} />
      <Route path="/cookie-policy" element={<Navigate to={`/${DEFAULT_LOCALE}/cookie-policy`} replace />} />
      <Route path="/general-conditions-of-sale" element={<Navigate to={`/${DEFAULT_LOCALE}/general-conditions-of-sale`} replace />} />
      <Route path="/faq" element={<Navigate to={`/${DEFAULT_LOCALE}/faq`} replace />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />
    </Routes>
  );
}

/** Helper component to redirect legacy /blogs/:slug → /en/blogs/:slug */
function LegacyRedirect({ base }: { base: string }) {
  const slug = window.location.pathname.split("/").pop();
  return <Navigate to={`/${DEFAULT_LOCALE}/${base}/${slug}`} replace />;
}
