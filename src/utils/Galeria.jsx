import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Galeria = () => {
  const images = [
    "/img/galeria6.webp",
    "/img/galeria4.webp",
    "/img/galeria1.webp",
    "/img/galeria2.webp",
    "/img/galeria3.webp",
    "/img/galeria5.webp",
  ];

  return (
    <div className="max-w-7xl mx-auto p-5 xl:mt-10 overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 0 },
          480: { slidesPerView: 2, spaceBetween: 0 },
          768: { slidesPerView: 3, spaceBetween: 0 },
        }}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div>
              <img
                src={src}
                alt={`Imagen ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
