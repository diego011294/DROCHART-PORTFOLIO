
export const Header = () => {
    return (
        <div className="flex justify-center items-center md:p-10">
            <div className="max-w-7xl w-full h-auto lg:h-[580px] fondo-header md:p-0 relative">
                <div className="absolute h-[660px] overflow-hidden -top-20 z-20 pointer-events-none hidden xl:block">
                    <img
                        className="w-10/12 relative object-covered img-responsive left-[-190px]"
                        src="/img/diego1.png"
                        alt="Diego inicio"
                    />
                </div>
                <div className="absolute w-full top-[20%] md:top-40 lg:top-1/2 xl:top-1/2 z-10 ">
                    <img src="/img/roto.png" alt="roto" className="pointer-events-none"/>
                </div>
                <div className="relative flex items-center md:flex justify-center xl:justify-end  p-10 md:p-0">
                    <div className="flex flex-col justify-center md:p-10 md:mr-10">
                        <div className="text-center md:text-start mt-5 lg:mt-0 lg:mb-0 p-2 lg:p-0 mb-5 order-2 lg:order-1 border-t-2 lg:border-t-0 lg:border-b-2 border-tipo border-opacity-20 lg:flex justify-end font-semibold italic text-tipo opacity-60 font-raleway text-sm gap-24">
                            <p className="lg:w-96 lg:mb-5">
                                “Mi objetivo es crear diseños simples y de alto impacto visual, con un enfoque constante en ofrecer la mejor experiencia de usabilidad.
                            </p>
                            <p className="lg:w-96">
                            Garantizar una navegación fluida y limpia es una prioridad. Cada decisión está pensada para ofrecer soluciones sólidas, adaptadas a las necesidades de los usuarios.”
                            </p>
                        </div>
                        <div className="font-raleway font-black text-tipo mt-0 md:mt-4 w-auto order-1 lg:order-2 flex flex-col items-center justify-center">
                            <div className="flex gap-2 md:gap-4 items-center opacity-90">
                                <h1 className="text-4xl md:text-7xl lg:text-8xl text-outline italic">DESARROLLO</h1>
                                <h2 className="text-4xl md:text-7xl lg:text-8xl text-outline italic">WEB</h2>
                            </div>
                            <div className="flex gap-3 md:gap-14 items-center opacity-90">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl">DISEÑO</h1>
                                <h2 className="text-4xl md:text-8xl lg:text-9xl text-primario">UI/UX</h2>
                            </div>
                            <h1 className="text-5xl md:text-8xl lg:text-9xl text-outline italic">
                                ILUSTRACIÓN
                            </h1>
                        </div>
                        <div className="flex gap-5 items-center justify-center lg:justify-end mr-10 mt-3 order-1 lg:order-3 w-full">
                            <a href="https://www.instagram.com/droch.art/" target="_blank"><img className="w-8 md:w-10 duration-300 hover:scale-110" src="/img/instagram.svg" alt="Instagram" /></a>
                            <a href="https://www.linkedin.com/in/diego-garc%C3%ADa-rocha/" target="_blank"><img className="w-8 md:w-10 duration-300 hover:scale-110" src="/img/linkedin.svg" alt="Linkedin" /></a>
                            <a href="https://www.behance.net/droch#" target="_blank"><img className="w-8 md:w-10 duration-300 hover:scale-110" src="/img/behance.svg" alt="Behance" /></a>
                            <a href="https://github.com/diego011294?tab=repositories" target="_blank"><img className="w-8 md:w-10 duration-300 hover:scale-110" src="/img/git.svg" alt="Git hub" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
