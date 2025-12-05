import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App.tsx";
import "./index.css";
//import { LangProvider } from "./contexts/LangContext.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

// createRoot(document.getElementById("root")!).render(
//   <QueryClientProvider client={queryClient}>
//     <LangProvider>
//       <App />
//     </LangProvider>
//   </QueryClientProvider>
// );
