export const ActiveDot = () => {
    return (
      <div className="relative w-4 h-4 flex justify-center items-center">
        {/* Punto (el botón pequeño) */}
        <div className="w-2 h-2 bg-primario rounded-full absolute"></div>
  
        {/* Aura parpadeante */}
        <div className="aura w-4 h-4 bg-primario rounded-full absolute animate-pulse opacity-0"></div>
      </div>
    );
  };
  