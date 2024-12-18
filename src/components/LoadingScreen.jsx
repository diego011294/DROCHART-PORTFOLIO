import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const LoadingScreen = ({ setLoadingComplete }) => {
    const [showDots, setShowDots] = useState(0);

    // Controlamos los puntos "..." animados
    useEffect(() => {
        const interval = setInterval(() => {
            setShowDots((prev) => (prev + 1) % 4); // Rota entre 0, 1, 2, 3
        }, 500);
        return () => clearInterval(interval);
    }, []);

    // Controlamos la finalización de la pantalla de carga
    useEffect(() => {
        const timeout = setTimeout(() => setLoadingComplete(true), 4000); // Desaparece tras 3 segundos
        return () => clearTimeout(timeout);
    }, [setLoadingComplete]);

    const dots = ".".repeat(showDots);

    return (
        <div className="h-screen w-screen bg-white flex flex-col justify-center items-center">
            <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: -20 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3,
                        ease: "easeOut",
                    }}
                >
                        <img src="/img/logo.svg" alt="logo" className="w-20" />

                </motion.div>
                <motion.h1
                    className="text-xl font-black"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.8,
                        ease: "easeOut",
                    }}
                >
                    <span className="opacity-20 font-light">|</span> PORTFOLIO
                </motion.h1>
            </motion.div>

            <motion.p
                className="mt-4 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
            >
                Cargando contenido{dots}
            </motion.p>
        </div>
    );
};
