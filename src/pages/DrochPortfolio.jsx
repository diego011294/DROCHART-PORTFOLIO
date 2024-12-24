import { useState } from "react";

export const DrochPortfolio = () => {
    const [isLoading, setIsLoading] = useState(true);
    
        const handleVideoLoaded = () => {
            setIsLoading(false);
        };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex  justify-center items-center max-w-7xl">
            {isLoading && (
                        <div className="flex justify-center items-center pt-10 z-50">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-primario"></div>
                        </div>
                    )}
                <div className="z-10 h-[360px] md:h-full">
                    <img src="/img/cabeceraportfolio.webp" alt="drochart" className="object-cover w-full h-full order-1" 
                    onLoadedData={handleVideoLoaded}/>
                </div>
            </div>
            <div className="text-tipo font-raleway flex justify-center items-center pt-64 lg:pb-20 lg:pt-80 bg-fondo w-full relative bottom-52">
                <div className="flex justify-center items-center flex-wrap p-5 lg:p-0">
                    <div className="space-y-5 lg:w-[600px] w-full">
                        <h1 className="text-2xl font-black">DROCHART PORTFOLIO</h1>
                        <p><span className="font-bold italic">DROCHART PORTFOLIO</span> es una plataforma creada para reunir todos mis proyectos y mostrar mi esencia como diseñador y desarrollador. ✨ Aquí reflejo mi pasión por los diseños simples, impactantes y funcionales, priorizando siempre la mejor experiencia de usuario.</p>

                        <h3 className="font-bold">Características principales:</h3>
                        <div>
                            <li>
                                <span className="font-semibold italic">Explora mi trabajo:</span> Una colección que abarca diseño web, ilustración y desarrollo front-end.
                            </li>
                            <li>
                                <span className="font-semibold italic">Interfaz intuitiva y fluida:</span> Desarrollada con React, empaquetada con Vite y estilizada con Tailwind CSS para garantizar una navegación impecable.
                            </li>
                            <li>
                                <span className="font-semibold italic">Mi esencia:</span> Cada proyecto refleja mi compromiso con la creatividad y la usabilidad, ofreciendo una visión clara de cómo diseño y desarrollo.
                            </li>
                        </div>
                        <p>🌐 Descubre mi trabajo en <a className="font-extrabold text-primario underline" href="https://drochart.es/" target="_blank">DROCHART PORTFOLIO</a> y conoce más sobre mi enfoque profesional y creativo.</p>
                    </div>
                    <div className="pb-5">
                        <img src="/img/mockport.png" alt="drochart mockup" className="mockshadow w-[600px]" />
                        <div className="flex justify-center items-center">
                            <div className="flex gap-5 items-center">
                                <a href="https://www.behance.net/gallery/213870879/DOBLEUVE-ARTESANIA-Branding-and-Web" target="_blank"><img className="w-10 duration-300 hover:scale-110" src="/img/behance.svg" alt="Behance" /></a>
                                <a href="https://github.com/diego011294?tab=repositories" target="_blank"><img className="w-10 duration-300 hover:scale-110" src="/img/git.svg" alt="Git hub" /></a>
                                <a href="https://drochart.vercel.app/" target="_blank"><img className="w-10 duration-300 hover:scale-110" src="/img/web.svg" alt="Git hub" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl flex justify-center items-center -mt-32 mb-16 p-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 w-full">
                    <img src="/img/mockport1.jpg" alt="dobleuve mockup" className="w-full h-auto order-1" />
                    <div className="space-y-10">
                        <img src="/img/posterpato.jpg" alt="galería coche" className="w-full h-auto order-3" />
                        <img src="/img/mockport2.jpg" alt="dobleuve mockup" className="w-full h-auto order-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}
