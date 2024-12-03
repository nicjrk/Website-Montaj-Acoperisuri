import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Preia ruta curentă

  useEffect(() => {
    window.scrollTo(0, 0); // Resetează scroll-ul la partea de sus
  }, [pathname]); // Rulează de fiecare dată când se schimbă ruta

  return null;
};

export default ScrollToTop;
