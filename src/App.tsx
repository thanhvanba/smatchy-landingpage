import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import AppLaunchPrompt from "./components/AppLaunchPrompt";
import StripeConnectRedirect from "./components/StripeConnectRedirect";

AOS.init();
function AppContent() {
  const location = useLocation();
  const path = location.pathname;
  const isOpenPath = path.startsWith("/open/") || /^\/[a-z]{2}\/open\//.test(path);
  const isStripeConnectPath =
    path.startsWith("/stripe-connect/") || /^\/[a-z]{2}\/stripe-connect\//.test(path);
  if (isStripeConnectPath) {
    return <StripeConnectRedirect />;
  }
  if (isOpenPath) {
    return <AppLaunchPrompt />;
  }
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Main content */}
      <div className="relative">
        <Header />
        <div className="min-h-[120vh]">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </>
  );
}
export default App;
