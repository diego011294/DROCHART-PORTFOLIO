import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContactForm } from '../utils/ContactForm';
import { motion } from 'framer-motion';

export const Footer = () => {
    const [inView, setInView] = useState(false); // Estado para saber si el componente está en vista
    const navigate = useNavigate();

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

    const textoBocadillo = "¡Hola! ¿Creamos algo? Si tienes alguna idea o proyecto, puedes escribirme.";

    const bocadilloVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            y: -30,
            transition: { duration: 2, ease: "linear" },
        },
    };

    const handleScroll = () => {
        const footer = document.getElementById("footer");
        const patoImg = document.querySelector("img[src='/img/patofoo.png']");
        const patoPosition = patoImg?.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (patoPosition < windowHeight && patoPosition > 0) {
            setInView(true); // El bocadillo aparece cuando la imagen del pato es visible
        } else {
            setInView(false); // El bocadillo desaparece cuando la imagen del pato ya no es visible
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="footer" className="flex justify-center items-center md:pt-10">
            <div className=" p-3 w-full md:max-w-4xl lg:max-w-6xl xl:max-w-7xl bg-primario text-raleway text-tipo flex flex-col lg:flex-row justify-between items-center">
                <div className="w-44 md:w-56 xl:w-72 pt-10">
                    <img src="/img/logofoo.svg" alt="logofoo" className="w-full" />
                </div>
                <div className="flex flex-col justify-center items-center lg:p-5 h-full relative">
                    {/* Imagen del pato */}
                    <div className="w-full flex justify-center items-center">
                        <img src="/img/patofoo.png" alt="patofoo" className="w-60 z-10" />
                        {/* Bocadillo animado */}
                        <div className="absolute top-0 lg:top-10 left-1/2 transform -translate-x-1/2  flex flex-col items-center w-full">
                            <motion.div
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"} // Activamos la animación solo cuando la imagen del pato es visible
                                variants={bocadilloVariants}
                                className="bg-white font-raleway bg-opacity-70 backdrop-blur-sm text-black p-3 rounded-lg shadow-md text-center z-20"
                            >
                                {textoBocadillo}
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-16">
                        <div className='space-y-3'>
                            <h2 className="font-black italic">CORREO</h2>
                            <p>drochart.info@gmail.com</p>
                            <div className="flex items-center gap-2">
                                <Icon className="text-2xl" icon="fluent:globe-location-20-regular" />
                                <p className="opacity-60">Galicia | España</p>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <h2 className="font-black italic">NAVEGACIÓN</h2>
                            <div className="flex items-center gap-5">
                                <div className='flex flex-col items-start'>
                                    <button onClick={() => handleScrollToSection("inicio")}>Inicio</button>
                                    <button onClick={() => handleScrollToSection("proyectos")}>Proyectos</button>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <button onClick={() => handleScrollToSection("sobremi")}>Sobre mí</button>
                                    <button onClick={() => handleScrollToSection("ilustracion")}>Ilustraciones</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-96">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};
