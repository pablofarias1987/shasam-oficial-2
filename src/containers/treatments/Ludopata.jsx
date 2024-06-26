
import React from "react";

const NAME = "Shasam Expertos en ludopatía";
const parrafo1 ="La ludopatía consiste en desarrollar una adicción a los juegos de azar. ";
const parrafo2 ="Los ludópatas son jugadores compulsivos que no pueden dejar de practicar su juego ni siquiera cuando se han quedado ya sin dinero, llegando a tener conductas muy peligrosas para conseguir más recursos para seguir jugando. Los principales peligros de la adicción al juego son económicos y sociales. Endeudarse es una práctica habitual en los ludópatas, a veces arrastrando también a los seres queridos."
const NAME1 ="RECUERDA"
const parrafo3 ="No acabar con tu adicción al juego supone la ruina económica. No dejar de ser ludópata genera soledad y depresión. No ser capaz de dejar los juegos de azar te roba el tiempo reservado a tus seres queridos y las actividades que amas.";

export const Ludopata = () => {

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
</div></div>
      </div>    
    );
  }
