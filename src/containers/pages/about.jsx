import React from "react";

export const About = () => { 
  const NAME = "¿Quiénes Somos?";
  const NAME2 ="Nuestro Equipo"
  const parrafo1 =
  "Somos una plataforma 100% online terapéutica llamada Shasam, con un modelo de carácter religioso, dedicada a la prevención, rehabilitación y adaptación social de jóvenes y adultos con problemas de drogodependencia, alcoholismo y marginación.";
const parrafo2 =
  "Hemos desarrollado un intenso y dedicado trabajo en el tratamiento de personas con problemáticas de alcohol y drogodependientes en una fase online, con duración de 9 meses.";
  const parrafo3 ="En SHASAM contamos con un equipo multidiciplinario compuesto por Psicólog@s, Psiquiatras, Monitores de apoyo, Asistente social y Técnicos en rehabilitación.";

  return (
    <div>
      <div className="relative overflow-hidden h-60">
        <img
          className="w-full absolute opacity-50 -top-96 left-1/2 transform -translate-x-1/2"
          src="quienessomos.jpeg"
          alt="imagen-sitio"
        />
      </div>    

      <div className="flex justify-center mx-32 items-center mt-8">
        <div className="flex-1">
          <h1 className="text-sky-400 text-5xl font-medium">
            {NAME}
          </h1>
          <p className="text-justify space-y-4 text-xl m-5">
            <p>{parrafo1}</p>
            <p>{parrafo2}</p>
          </p>
        </div>
        
        <div className="ml-8">
          <img
            className="w-72 h-auto"
            src="aboutus.jpeg"
            alt="aboutus"
          />
        </div>
      </div>
      <div className="flex-1 mx-32">
          <h1 className="text-sky-400 text-5xl font-medium">
            {NAME2}
          </h1>
          <p className="text-justify space-y-4 text-xl m-5">
            {parrafo3}
          </p>
        </div>
    </div>
  );
}
