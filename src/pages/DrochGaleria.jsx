
export const DrochGaleria = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex  justify-center items-center max-w-7xl">
                <div className="z-10">
                    <img src="/img/cabeceragaleria.jpg" alt="drochart" className="w-full h-auto order-1" />
                </div>
            </div>
            <div className="text-tipo font-raleway flex justify-center items-center pt-64 lg:pb-20 lg:pt-80 bg-fondo w-full relative bottom-52">
                <div className="flex justify-center items-center flex-wrap p-5 lg:p-0">
                    <div className="space-y-5 lg:w-[600px] w-full">
                        <h1 className="text-2xl font-black">DROCHART GALERÍA <span className="opacity-50 font-light text-lg ml-2">*Actualmente en construcción</span></h1>
                        <p><span className="font-bold italic">DROCH.ART GALERÍA</span> es una plataforma creada como parte de mi Trabajo de Fin de Ciclo (TFC) de desarrollo de aplicaciones web.
                            ✨ Este proyecto está diseñado para conectar a diseñadores y artistas, ofreciendo un espacio en el que puedan exponer sus obras, recibir feedback y generar nuevas oportunidades laborales en el mundo de la creatividad.</p>

                        <h3 className="font-bold">Características principales:</h3>
                        <div>
                            <li>
                                <span className="font-semibold italic">Exposición de diseños:</span> Los usuarios pueden subir sus obras, eliminarlas y gestionarlas fácilmente desde un panel de control intuitivo.
                            </li>
                            <li>
                                <span className="font-semibold italic">Red de contactos:</span> Todos los usuarios tienen visibilidad del correo electrónico de los demás, fomentando el contacto directo y la colaboración.
                            </li>
                            <li>
                                <span className="font-semibold italic">Interacción comunitaria:</span> Es posible explorar, dejar "likes" y comentar otros diseños, promoviendo el feedback y el buen ambiente dentro de la comunidad.
                            </li>
                            <li>
                                <span className="font-semibold italic">Autenticación de usuarios:</span> Registro y acceso seguros para gestionar contenido personalizado.
                            </li>
                            <li>
                                <span className="font-semibold italic">Backend robusto:</span> La aplicación utiliza Spring Boot y almacenamiento en Cloudinary para asegurar una experiencia eficiente y confiable.
                            </li>
                            <li>
                                <span className="font-semibold italic">Frontend moderno:</span> La interfaz ha sido desarrollada con React, ofreciendo una experiencia visual atractiva y fluida.
                            </li>
                        </div>
                        <p>🌐 Visita el proyecto en <a className="font-extrabold text-primario underline" href="https://drochart.vercel.app/" target="_blank">DROCHART GALERÍA</a> y descubre más sobre esta galería en línea.</p>
                    </div>
                    <div className="pb-5">
                        <img src="/img/drochgaleriamock.png" alt="drochart mockup" className="mockshadow w-[600px]" />
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
                    <img src="/img/mockgaleria2.jpg" alt="dobleuve mockup" className="w-full h-auto order-1" />
                    <div className="space-y-10">
                        <img src="/img/galeriacoche.jpg" alt="galería coche" className="w-full h-auto order-3" />
                        <img src="/img/mockgaleria1.jpg" alt="dobleuve mockup" className="w-full h-auto order-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}
