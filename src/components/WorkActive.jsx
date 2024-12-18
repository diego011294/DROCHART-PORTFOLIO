import { ActiveDot } from "../utils/ActiveDot";
import { useNavigate } from "react-router-dom";

export const WorkActive = () => {
    const navigate = useNavigate(); // Hook para la navegación

    const handleScrollToSection = (sectionId) => {
        if (window.location.pathname !== "/") {
            // Navegar a la raíz
            navigate("/");
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({
                    behavior: "smooth",
                });
            }, 200); // Esperar para completar la navegación
        } else {
            // Ya estamos en la raíz, solo desplazarse
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <div className='md:hidden fixed bottom-0 right-0 m-4 z-30'>
            <button
                className='flex items-center justify-center px-3 py-2 rounded-full border bg-white hover:scale-110 duration-300 gap-2 shadow-xl'
                onClick={() => handleScrollToSection("footer")}
            >
                    <ActiveDot />
                    <p className="text-sm font-light text-primario">Abierto a proyectos</p>
            </button>
        </div>
    );
};
