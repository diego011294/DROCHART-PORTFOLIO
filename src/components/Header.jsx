import { motion } from "framer-motion";

export const Header = () => {
  // Variantes de animación para Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Retraso entre hijos
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variantes para las redes sociales con efecto de salto
  const socialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center md:p-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants} // Animación para todo el contenedor
    >
      <motion.div
        className="max-w-7xl w-full h-auto lg:h-[580px] fondo-header md:p-0 relative"
        variants={childVariants} // Animación suave para este bloque
      >
        {/* Imagen absoluta */}
        <motion.div
          className="absolute h-[660px] overflow-hidden -top-20 z-20 pointer-events-none hidden xl:block"
          variants={childVariants}
        >
          <img
            className="w-10/12 relative object-cover img-responsive left-[-190px]"
            src="/img/diego1.webp"
            alt="Diego inicio"
          />
        </motion.div>

        {/* Imagen central */}
        <motion.div
          className="absolute w-full top-[20%] md:top-40 lg:top-1/2 xl:top-1/2 z-10"
          variants={childVariants}
        >
          <img
            src="/img/roto.png"
            alt="roto"
            className="pointer-events-none"
          />
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          className="relative flex items-center md:flex justify-center xl:justify-end p-10 md:p-0"
          variants={childVariants}
        >
          <motion.div
            className="flex flex-col justify-center md:p-10 md:mr-10"
            variants={childVariants}
          >
            {/* Citas */}
            <motion.div
              className="text-center md:text-start mt-5 lg:mt-0 lg:mb-0 p-2 lg:p-0 mb-5 order-2 lg:order-1 border-t-2 lg:border-t-0 lg:border-b-2 border-tipo border-opacity-20 lg:flex justify-end font-semibold italic text-tipo opacity-60 font-raleway text-sm gap-24"
              variants={childVariants}
            >
              <p className="lg:w-96 lg:mb-5">
                “Mi objetivo es crear diseños simples y de alto impacto visual, con un enfoque constante en ofrecer la mejor experiencia de usabilidad.
              </p>
              <p className="lg:w-96">
                Garantizar una navegación fluida y limpia es una prioridad. Cada decisión está pensada para ofrecer soluciones sólidas, adaptadas a las necesidades de los usuarios.”
              </p>
            </motion.div>

            {/* Títulos principales */}
            <motion.div
              className="font-raleway font-black text-tipo mt-0 md:mt-4 w-auto order-1 lg:order-2 flex flex-col items-center justify-center"
              variants={childVariants}
            >
              <div className="flex gap-2 md:gap-4 items-center opacity-90">
                <h1 className="text-4xl md:text-7xl lg:text-8xl text-outline italic">
                  DESARROLLO
                </h1>
                <h2 className="text-4xl md:text-7xl lg:text-8xl text-outline italic">
                  WEB
                </h2>
              </div>
              <div className="flex gap-3 md:gap-14 items-center opacity-90">
                <h1 className="text-5xl md:text-7xl lg:text-8xl">DISEÑO</h1>
                <h2 className="text-4xl md:text-8xl lg:text-9xl text-primario">
                  UI/UX
                </h2>
              </div>
              <h1 className="text-5xl md:text-8xl lg:text-9xl text-outline italic">
                ILUSTRACIÓN
              </h1>
            </motion.div>

            {/* Enlaces sociales */}
            <motion.div
              className="flex gap-5 items-center justify-center lg:justify-end mr-10 mt-3 order-1 lg:order-3 w-full"
              variants={containerVariants} // Aseguramos que las redes sociales tengan un delay entre ellas
            >
              {[
                { href: "https://www.instagram.com/droch.art/", src: "/img/instagram.svg", alt: "Instagram" },
                { href: "https://www.linkedin.com/in/diego-garc%C3%ADa-rocha/", src: "/img/linkedin.svg", alt: "Linkedin" },
                { href: "https://www.behance.net/droch#", src: "/img/behance.svg", alt: "Behance" },
                { href: "https://github.com/diego011294?tab=repositories", src: "/img/git.svg", alt: "Git hub" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  variants={socialVariants} // Animación de salto individual
                >
                  <img
                    className="w-8 md:w-10 duration-300 hover:scale-110"
                    src={social.src}
                    alt={social.alt}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
