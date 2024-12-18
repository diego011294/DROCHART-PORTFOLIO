import { Icon } from "@iconify/react/dist/iconify.js";

export const Proyecto = ({ images, title, subtitle, icons }) => {
  return (
    <div className="w-96 h-full border border-tipo border-opacity-30 p-4 font-raleway text-tipo group shadow-md">
      <div className="bg-gray-100 h-72 relative">
        {/* Renderizar las imágenes dinámicamente */}
        <div className="relative top-24 z-20">
          <img
            src={images[0]}
            alt={`${title} image 1`}
            className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 rotate-[15deg] z-30 h-72 rounded-md border-[3px] border-white shadow-md transition-all duration-500 group-hover:-translate-y-44"
          />
          <img
            src={images[1]}
            alt={`${title} image 2`}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[0deg] z-20 h-72 rounded-md border-[3px] border-white shadow-md transition-all duration-500 group-hover:-translate-y-52"
          />
          <img
            src={images[2]}
            alt={`${title} image 3`}
            className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] z-10 h-72 rounded-md border-[3px] border-white shadow-md transition-all duration-500 group-hover:-translate-y-44"
          />
        </div>

        {/* Renderizar los iconos dinámicamente */}
        <div className="flex flex-col items-end transform translate-y-44 pr-5 gap-2 text-tipo opacity-20 text-2xl">
          {icons.map((icon, index) => (
            <Icon key={index} icon={icon} />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-start p-4">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <h1 className="font-extrabold">{title}</h1>
            <div className="rotate-90 text-3xl text-primario">
              <Icon icon="carbon:arrow-up" />
            </div>
          </div>
          <p className="font-extralight">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
