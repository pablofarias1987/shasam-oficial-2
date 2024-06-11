import React from "react";

const NAME = "Shasam especialistas en la adicción a las pastillas";
const parrafo1 ="Las benzodiacepinas o psicofármacos, conocidos popularmente como pastillas, son drogas legales que acostumbran a aparecer en la vida del adicto a través de preinscripción médica.";
const parrafo2 ="Las pastillas generan tolerancia, que es lo que ayuda a desarrollar la adicción. Además, producen síndrome de abstinencia cuando queremos dejarlas, lo que deriva en ansiedad, irritabilidad, alteración del sueño, comportamiento obsesivo etc. por eso se hace realmente complicado prescindir de ellas sin ayuda profesional. Juntos vamos a conseguir, por fin, que te libres de su dependencia."
const NAME1 ="RECUERDA"
const parrafo3 ="No finalizar tu dependencia a las pastillas te genera ansiedad, apatía e irritabilidad. No ser capaz de dejar los psicofármacos te aleja de tus seres queridos. El abuso de las pastillas puede conducirte a otras adicciones.";

export const Pastillas = () => {

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
