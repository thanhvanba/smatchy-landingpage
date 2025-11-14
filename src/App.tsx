import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import ScrollToTop from "./components/ScrollToTop";

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
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
