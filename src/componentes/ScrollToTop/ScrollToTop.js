import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo toda vez que o pathname mudar
  }, [pathname]);

  return null; // Não renderiza nada
}

export default ScrollToTop;


