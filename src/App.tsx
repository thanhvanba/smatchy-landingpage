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
import { useEffect } from "react";

AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  disable: "phone", // Disable AOS trên mobile
});

function AppContent() {
  const location = useLocation();
  const isOpenPath = location.pathname.startsWith("/open/");

  if (isOpenPath) {
    return <AppLaunchPrompt />;
  }

  return (
    // <div className="relative w-full min-h-screen overflow-hidden">
    //   {/* Header */}
    //   <Header />

    //   <main className="relative flex-grow">
    //     <AppRoutes />
    //   </main>

    //   <Footer />

    //   <ToastContainer />
    // </div>
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

// function AppContent() {
//   const location = useLocation();
//   const isOpenPath = location.pathname.startsWith("/open/");

//   // Refresh AOS khi route change
//   useEffect(() => {
//     AOS.refresh();
//   }, [location.pathname]);

//   if (isOpenPath) {
//     return <AppLaunchPrompt />;
//   }

//   return (
//     <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
//       {/* Header */}
//       <Header />

//       {/* Main content - flex-grow để đẩy footer xuống */}
//       <main className="relative flex-grow">
//         <AppRoutes />
//       </main>

//       {/* Footer */}
//       <Footer />

//       <ToastContainer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <ScrollToTop />
//         <AppContent />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
