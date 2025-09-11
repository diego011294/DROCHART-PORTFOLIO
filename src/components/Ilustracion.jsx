import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { OutlineButton } from "../utils/OutlineButton";
import { Galeria } from "../utils/Galeria";

export const Ilustracion = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Detecta si el contenedor está visible

    return (
        <div
            className="max-w-full fondo relative flex justify-center items-center mt-44 md:36 xl:mt-60"
            ref={ref} // Referencia para detectar visibilidad
        >
            <div className="max-w-7xl w-full flex xl:justify-end md:justify-center items-center flex-wrap">
                {/* Imagen animada */}
                <motion.div
                    className="block xl:absolute top-0 xl:left-20 container-furgo -mt-40 pointer-events-none"
                    initial={{ x: "-80%", opacity: 0 }} // Posición inicial
                    animate={isInView ? { x: 0, opacity: 1 } : {}} // Anima al entrar en vista
                    transition={{ duration: 1, ease: "linear" }} // Duración y suavidad
                >
                    <img
                        src="/img/furgo.png"
                        alt="furgo"
                        className="w-auto md:w-[700px] xl:w-[850px] furgo"
                    />
                </motion.div>
                {/* Contenido */}
                <div className="p-5 md:p-10 xl:p-10">
                    <div className="p-5 lg:p-10 xl:p-0 2xl:w-[700px] xl:w-[600px] w-auto text-tipo font-raleway">
                        <h2 className="text-2xl lg:text-3xl">PERSONALIDAD Y VALOR</h2>
                        <h1 className="text-4xl lg:text-5xl font-black mb-5">
                            ILUSTRACIÓN <span className="font-rampart text-primario">&</span> BRANDING
                        </h1>
                        <p>
                            Combino mi pasión por la ilustración tipo cartoon con el diseño estratégico
                            para crear elementos visuales únicos que dan vida a las marcas. Desde personajes
                            personalizados hasta logotipos originales, mis diseños aportan personalidad,
                            distinción y una conexión auténtica con el público. Cada proyecto es una oportunidad
                            de transformar ideas en imágenes memorables que fortalecen la identidad de una marca.
                        </p>
                    </div>
                </div>
                <Galeria/>
            </div>
        </div>
    );
};
