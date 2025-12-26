import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

AOS.init();
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className="relative w-full min-h-screen overflow-hidden">
          {/* Main content */}
          <div className="relative">
            <Header />
            <AppRoutes />
            <Footer />
            <ToastContainer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
