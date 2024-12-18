import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza hacia la parte superior
    }, [pathname]); // Se ejecuta cada vez que cambia la ruta

    return null; // No devuelve ningún elemento visual
};
