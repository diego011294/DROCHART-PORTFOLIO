import { Link, NavLink, useNavigate } from "react-router-dom";
import { ActiveDot } from "../utils/ActiveDot";
import { OutlineButton } from "../utils/OutlineButton";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate(); // Hook para la navegación

    const toggleMenu = () => setMenuOpen(!menuOpen);

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

    const menuVariants = {
        open: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        closed: {
            x: "-100%",
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div>
            <div className="p-10 lg:p-0 bg-white bg-opacity-50 backdrop-blur-sm border-b border-[#33333350] w-full h-24 flex justify-center items-center font-raleway">
                <div className="w-full max-w-7xl text-[#333] flex justify-between items-center">
                    {/* Logo y titulo */}
                    <div className="flex items-center gap-4">
                        <Link to={"/"}><img src="/img/logo.svg" alt="logo" /></Link>
                        <h1 className="text-xl font-black">
                            <span className="opacity-20 font-light">|</span> PORTFOLIO
                        </h1>
                        <div className="hidden lg:flex justify-center items-center gap-2 px-4 py-2 bg-white rounded-full">
                            <ActiveDot />
                            <p className="text-sm font-light text-primario">Abierto a proyectos</p>
                        </div>
                    </div>
                    <div className="hidden text-tipo md:flex items-center gap-10">
                        <button
                            onClick={() => handleScrollToSection("proyectos")}
                            className="font-raleway font-bold opacity-70 transition-opacity duration-300 hover:opacity-100"
                        >
                            Proyectos
                        </button>
                        <button
                            onClick={() => handleScrollToSection("sobremi")}
                            className="font-raleway font-bold opacity-70 transition-opacity duration-300 hover:opacity-100"
                        >
                            Sobre mí
                        </button>
                        <button
                            onClick={() => handleScrollToSection("ilustracion")}
                            className="font-raleway font-bold opacity-70 transition-opacity duration-300 hover:opacity-100"
                        >
                            Ilustraciones
                        </button>
                        <OutlineButton
                        onClick={() => handleScrollToSection("footer")}>
                            Contacta
                        </OutlineButton>
                    </div>
                </div>
                <button className="md:hidden text-[#333333]">
                    <Icon className="text-[30px]" icon="material-symbols:menu" onClick={toggleMenu} />
                </button>
            </div>

            {/* Menu movil */}
            <motion.div
                initial="closed"
                animate={menuOpen ? "open" : "closed"}
                variants={menuVariants}
                className="fixed font-semibold top-0 left-0 w-full h-full z-40 font-raleway bg-primario text-tipo flex flex-col items-center justify-center space-y-10 md:hidden"
            >
                {/* Close Button */}
                <button className="absolute top-5 right-5" onClick={toggleMenu}>
                    <Icon icon="mdi:close" className="text-3xl" />
                </button>

                <button
                    onClick={() => { toggleMenu(); handleScrollToSection("proyectos") }}
                    className="text-3xl"
                >
                    Proyectos
                </button>
                <button
                    onClick={() => { toggleMenu(); handleScrollToSection("sobremi") }}
                    className="text-3xl italic font-black"
                >
                    Sobre mí
                </button>
                <button
                    onClick={() => { toggleMenu(); handleScrollToSection("ilustracion") }}
                    className="text-3xl"
                >
                    Ilustraciones
                </button>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={menuOpen ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} // Reacciona al estado de `menuOpen`
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex justify-center"
                >
                    <img src="/img/pato1.png" alt="pato" className="w-56" />
                </motion.div>
            </motion.div>
        </div>
    );
};
