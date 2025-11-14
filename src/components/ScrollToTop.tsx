import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // hoặc "auto"
    });
  }, [pathname]); // chạy lại mỗi khi pathname thay đổi

  return null;
}
