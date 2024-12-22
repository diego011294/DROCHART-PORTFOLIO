import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const LoadingScreen = ({ setLoadingComplete }) => {

    // Controlamos la finalización de la pantalla de carga
    useEffect(() => {
        const timeout = setTimeout(() => setLoadingComplete(true), 2000);
        return () => clearTimeout(timeout);
    }, [setLoadingComplete]);

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
                    <span className="opacity-20 font-black">|</span> PORTFOLIO
                </motion.h1>
            </motion.div>
        </div>
    );
};
