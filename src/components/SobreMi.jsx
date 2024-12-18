import { Icon } from "@iconify/react/dist/iconify.js"
import { OutlineButton } from "../utils/OutlineButton"

export const SobreMi = () => {
    return (
        <div className="flex justify-center items-center mt-10 lg:mt-20">
            <div className="max-w-7xl w-full flex xl:justify-between flex-wrap justify-center items-center">
                <div className="max-w-[600px] h-auto text-tipo font-raleway space-y-5">
                    <div className="p-5 lg:p-10 xl:p-0 w-full">
                        <h2 className="text-2xl lg:text-3xl">
                            SOBRE MÍ
                        </h2>
                        <h1 className="text-4xl lg:text-5xl font-black">
                            DIEGO GARCIA
                        </h1>
                        <h3 className="opacity-60">
                            Desarrollo web | diseño UI/UX | ilustrador
                        </h3>
                    </div>
                    <div className="space-y-5 w-full p-5 lg:p-10 xl:p-0">
                        <p>
                            Mi nombre es Diego, tengo 30 años y soy desarrollador y diseñador web.
                            He adquirido una sólida base en atención al cliente y coordinación de actividades comerciales gracias a mi experiencia en el sector del retail deportivo.
                            Paralelamente, completé mis estudios en programación y desarrollo de aplicaciones web, lo que me ha permitido combinar mi pasión por la tecnología con mis intereses profesionales.
                        </p>
                        <p>
                            Me especializo en diseño UI/UX y desarrollo frontend,
                            canalizando mi creatividad y habilidades visuales en ilustración artística y diseño gráfico,
                            mientras mantengo un equilibrio con mi conocimiento en backend.
                            Esta combinación de habilidades técnicas y pasión por el diseño y la tecnología me impulsa a buscar oportunidades para crecer profesionalmente y contribuir de manera integral a equipos dinámicos.
                        </p>
                    </div>
                    <div className="w-full text-tipo font-raleway p-5 lg:p-10 xl:p-0">
                        <div className=" flex justify-between items-center w-auto border-b-2 pb-3">
                            <h2 className="text-2xl font-bold">Puesto actual</h2>
                            <Icon className="text-3xl opacity-30" icon="material-symbols-light:work-outline" />
                        </div>
                        <div className="mt-5 bg-gray-100 p-5 mb-5">
                            <img src="/img/logopululart.png" alt="logo pulular team" />
                            <h3 className="italic font-semibold mb-4">Diseñador de interfaz de usuario web | UI/UX Designer</h3>
                            <div className="font-light text-sm">
                                <p>Jornada completa</p>
                                <p>jul. 2024 - actualidad</p>
                                <p>La Coruña, Galicia / España</p>
                            </div>
                        </div>
                        <a 
                        href="/diego-garcia-rocha-cv.pdf"
                        download="Diego-Garcia-Rocha-CV.pdf">
                            <OutlineButton>Descargar CV</OutlineButton>
                        </a>
                    </div>
                </div>
                <div className="video-container w-full lg:w-auto flex justify-center items-center overflow-hidden md:overflow-visible h-[580px] md:h-full">
                    <video className="background-video absolute xl:h-[550px] h-96" autoPlay muted loop>
                        <source src="/img/videofondo.mp4" type="video/mp4" />
                        Tu navegador no soporta el formato de video.
                    </video>
                    <img src="/img/diego2.png" alt="sobre mi" className="w-[375px] xl:w-[500px] animated-image" />
                </div>

            </div>
        </div>
    )
}
