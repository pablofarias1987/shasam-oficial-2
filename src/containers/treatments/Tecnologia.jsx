import React from "react";

const NAME = "Shasam Expertos en adicciones a redes sociales, Internet, étc.";
const parrafo1 ="La tecnología está cada vez más presente en nuestras vidas, existe un alto riesgo de crear un hábito y dependencia que hará que dejemos nuestras obligaciones y responsabilidades creando un problema a nuestra salud y entorno.";
const parrafo2 ="La adicción a las redes sociales y a los videojuegos está escalando muy rápidamente en el ranking de adicciones más comunes. La depresión o la dependencia de likes para equilibrar nuestro autoestima son síntomas muy comunes y negativos relacionados con las redes."
const NAME1 ="RECUERDA"
const parrafo3 ="No ser capaz de pasar el día sin móvil, ordenador o tablet te aleja de tus obligaciones y responsabilidades básicas. Comparar tu vida con la versión idealizada en redes de otras personas produce depresión. Pasar horas jugando te aleja de la vida real y de tus seres queridos.";

export const Tecnologia = () => {

    return (
      <div>
       <div className="flex justify-center mx-32 items-center mt-8">
        <div className="flex-1">
          <h1 className="text-sky-400 text-5xl font-medium">
            {NAME}
          </h1>
          <p className="text-justify space-y-4 text-xl m-5">
            {parrafo1}
            </p>
 
            <p className="text-justify space-y-4 text-xl m-5">
            {parrafo2}
            </p>
            <h1 className="text-sky-400 text-5xl font-medium">
            {NAME1}
          </h1>
          <p className="text-justify space-y-4 text-xl m-5">
            {parrafo3}
            </p>
          </div>
        </div>
      </div>    
    );
  }
