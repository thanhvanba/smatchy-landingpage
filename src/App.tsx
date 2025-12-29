import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import AppLaunchPrompt from "./components/AppLaunchPrompt";

AOS.init();

function AppContent() {
  const location = useLocation();
  const isOpenPath = location.pathname.startsWith("/open/");

  if (isOpenPath) {
    return <AppLaunchPrompt />;
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Main content */}
      <div className="relative">
        <Header />
        <AppRoutes />
        <Footer />
        <ToastContainer />
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
