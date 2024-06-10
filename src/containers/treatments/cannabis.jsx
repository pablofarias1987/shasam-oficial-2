
import React from "react";

const NAME = "Shasam expertos en la adicción al cannabis";
const parrafo1 ="El cannabis es la droga más fumada después del tabaco y la sustancia ilegal más consumida por los jóvenes.";
const parrafo2 ="Fumar porros genera rápidamente dependencia y es causa de brotes psicóticos y daños cerebrales, entre otros. Consideramos al cannabis como una droga alucinógena o con la capacidad de alterar la percepción, con muchos efectos negativos tanto a corto como a largo plazo. Con esfuerzo es posible liberarse de la dependencia que crea."
const NAME1 ="RECUERDA"
const parrafo3 ="No finalizar tu relación con los porros te genera depresión, apatía y desilusión por el futuro. No ser capaz de dejar los porros puede llevarte a sufrir daños cerebrales, pérdidas de memoria y alucinaciones. No acabar con tu adicción al cannabis supone un malgasto económico.";

export const Cannabis = () => {

    return (
      <div>
       <div className="flex justify-center mx-32 items-center mt-8">
        <div className="flex-1">
          <h1 className="text-sky-400 text-5xl font-medium">
            {NAME}
          </h1>
          <p className="text-justify space-y-4 text-xl m-5">
            <p>{parrafo1}</p>
            </p>
 
            <p className="text-justify space-y-4 text-xl m-5">
            <p>{parrafo2}</p>
            </p>
            <h1 className="text-sky-400 text-5xl font-medium">
            {NAME1}
          </h1>
          <p className="text-justify space-y-4 text-xl m-5">
            <p>{parrafo3}</p>
            </p>
</div>
</div>
      </div>    
    );
  }
