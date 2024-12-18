import { Proyecto } from './Proyecto'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';

export const ListaProyectos = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className="max-w-7xl md:w-full mt-10">
                    <div className='flex justify-center gap-5 lg:gap-0 lg:justify-between flex-col lg:flex-row items-center mb-5 xl:mb-36 text-tipo font-raleway p-5 md:p-10 xl:p-0 '>
                        <h1 className='text-2xl lg:text-3xl lg:text-start text-center'>VISITA MIS <br /> <span className='text-4xl lg:text-5xl font-black'>PROYECTOS</span></h1>
                        <p className='w-full lg:w-96 lg:text-start text-center'>Estos son algunos de mis proyectos personales finalizados y en producción. ¡Échales un vistazo y descubre más sobre mi trabajo!</p>
                    </div>
                    <div className="hidden xl:flex justify-center items-center gap-28 lg:gap-14 flex-wrap">
                        {/* Proyecto 1 */}
                        <Link to={"/dobleuve"}><Proyecto
                            images={[
                                "/img/pdobleuve1.jpg",
                                "/img/pdobleuve2.jpg",
                                "/img/pdobleuve3.jpg",
                            ]}
                            title="DOBLEUVE ARTESANÍA"
                            subtitle="Desarrollo Ecommerce | Branding"
                            icons={["uil:react", "ri:supabase-fill", "mdi:tailwind"]}
                        /></Link>

                        {/* Proyecto 2 */}
                        <Link to={"/drochgaleria"}><Proyecto
                            images={[
                                "/img/pdroch1.jpg",
                                "/img/pdroch2.jpg",
                                "/img/pdroch3.jpg",
                            ]}
                            title="DROCH.ART GALERÍA"
                            subtitle="Diseño UI/UX | Desarrollo web"
                            icons={["uil:react", "ri:java-fill", "mdi:tailwind"]}
                        /></Link>

                        {/* Proyecto 3 */}
                        <Link to={"/drochportfolio"}><Proyecto
                            images={[
                                "/img/portfolio1.jpg",
                                "/img/portfolio3.jpg",
                                "/img/portfolio2.jpg",
                            ]}
                            title="DROCH.ART PORTFOLIO"
                            subtitle="Diseño UI/UX | Desarrollo web"
                            icons={["uil:react", "lineicons:framer", "mdi:tailwind"]}
                        /></Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='overflow-hidden h-[550px] xl:hidden w-[390px]'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 3200,
                            disableOnInteraction: false,
                        }}
                        className="overflow-visible top-24"
                    >
                        <SwiperSlide>
                            <Link to={"/dobleuve"}>
                                <Proyecto
                                    images={[
                                        "/img/pdobleuve1.jpg",
                                        "/img/pdobleuve2.jpg",
                                        "/img/pdobleuve3.jpg",
                                    ]}
                                    title="DOBLEUVE ARTESANÍA"
                                    subtitle="Desarrollo Ecommerce | Branding"
                                    icons={["uil:react", "ri:supabase-fill", "mdi:tailwind"]}
                                />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={"/drochgaleria"}>
                                <Proyecto
                                    images={[
                                        "/img/pdroch1.jpg",
                                        "/img/pdroch2.jpg",
                                        "/img/pdroch3.jpg",
                                    ]}
                                    title="DROCH.ART GALERÍA"
                                    subtitle="Diseño UI/UX | Desarrollo web"
                                    icons={["uil:react", "ri:java-fill", "mdi:tailwind"]}
                                />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Link to={"/drochportfolio"}>
                            <Proyecto
                                images={[
                                    "/img/portfolio1.jpg",
                                    "/img/portfolio3.jpg",
                                    "/img/portfolio2.jpg",
                                ]}
                                title="DROCH.ART GALERÍA"
                                subtitle="Diseño UI/UX | Desarrollo web"
                                icons={["uil:react", "lineicons:framer", "mdi:tailwind"]}
                            />
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
