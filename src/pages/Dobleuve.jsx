
export const Dobleuve = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex  justify-center items-center max-w-7xl">
                <div className="z-10">
                    <video className="w-full" autoPlay muted loop>
                        <source src="/img/dobleuve2.mp4" type="video/mp4" />
                        Tu navegador no soporta el formato de video.
                    </video>
                </div>
            </div>
            <div className="text-tipo font-raleway flex justify-center items-center pt-64 lg:pb-20 lg:pt-80 bg-fondo w-full relative bottom-52">
                <div className="flex justify-center items-center flex-wrap p-5 lg:p-0">
                    <div className="space-y-5 lg:w-[600px] w-full">
                        <h1 className="text-2xl font-black">DOBLEUVE ARTESANÍA</h1>
                        <p>Después de mucho esfuerzo y dedicación, estoy emocionado de compartir este e-commerce desarrollado con React, Supabase y Tailwind CSS.
                            💻 Este proyecto combina un diseño moderno con funcionalidades avanzadas para ofrecer una experiencia de usuario única y eficiente.</p>

                        <h3 className="font-bold">Características principales:</h3>
                        <div>
                            <li><span className="font-semibold italic">Panel de administración:</span> Gestión completa de productos, desde su creación hasta su edición y eliminación.</li>
                            <li><span className="font-semibold italic">Diseño personalizado:</span> Un estilo visual atractivo y adaptado a la identidad de Dobleuve.</li>
                            <li><span className="font-semibold italic">Pasarela de pago con Stripe:</span> Compra segura y sencilla 🛒.</li>
                            <li><span className="font-semibold italic">Autenticación de usuarios:</span> Funcionalidad exclusiva para crear y gestionar una wishlist personalizada.</li>
                            <li><span className="font-semibold italic">Base de datos PostgreSQL:</span> Organización robusta y eficiente de toda la información del sitio.</li>
                            <li><span className="font-semibold italic">Soporte multilingüe:</span> El sitio está disponible en gallego y español, para conectar mejor con los usuarios.</li>
                        </div>
                        <p>🌐 Visita el proyecto en <a className="font-extrabold text-primario underline" href="https://dobleuveartesania.es" target="_blank">dobleuveartesania.es</a> y descubre más sobre esta tienda en línea hecha con pasión y tecnología.</p>
                    </div>
                    <div className="pb-5">
                        <img src="/img/mock1dobleuve.png" alt="dobleuve mockup" className="mockshadow w-[600px]" />
                        <div className="flex justify-center items-center">
                            <div className="flex gap-5 items-center">
                                <a href="https://www.behance.net/gallery/213870879/DOBLEUVE-ARTESANIA-Branding-and-Web" target="_blank"><img className="w-10 duration-300 hover:scale-110" src="/img/behance.svg" alt="Behance" /></a>
                                <a href="https://github.com/diego011294?tab=repositories" target="_blank"><img className="w-10 duration-300 hover:scale-110" src="/img/git.svg" alt="Git hub" /></a>
                                <a href="https://dobleuveartesania.es/" target="_blank"><img className="w-10 duration-300 hover:scale-110" src="/img/web.svg" alt="Git hub" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl flex justify-center items-center -mt-32 mb-16 p-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 w-full">
                    <img src="/img/mockdobleuve2.jpg" alt="dobleuve mockup" className="w-full h-auto order-1" />
                    <div className="space-y-10">
                        <img src="/img/fotopendiente.jpg" alt="dobleuve pendientes" className="w-full h-auto order-3" />
                        <img src="/img/mockdobleuve3.jpg" alt="dobleuve mockup" className="w-full h-auto order-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}
