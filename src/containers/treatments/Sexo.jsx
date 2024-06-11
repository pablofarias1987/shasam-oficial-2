import React from "react";

const NAME = "Shasam Expertos en tratamientos de adicción al sexo";
const parrafo1 ="El sexo es una práctica totalmente aceptable y natural, pero que cuando lo llevas a un comportamiento compulsivo y extremista puede convertirse en un infierno. Los adictos y adictas al sexo son incapaces de controlar su deseo sexual, lo cual les lleva a masturbaciones compulsivas puede que con largas sesiones de pornografía, dejando de lado sus obligaciones sociales y laborales. También los adictos al sexo se ven empujados a mantener relaciones de riesgo con desconocidos, ser asiduos a prostíbulos o perder el deseo de mantener relaciones con la pareja.";
const parrafo2 ="Estos comportamientos los alejan sin remedio de una vida sana y natural, es difícil mantener pareja estable y, es también complicado, tener una vida laboral y social sana si cada poco tienes un deseo sexual irrefrenable que te impide concentrarte. Por suerte hay salida."
const NAME1 ="RECUERDA"
const parrafo3 ="No ser capaz de frenar el deseo sexual compulsivo te aleja de tus metas, objetivos y sueños debido a no ser capaz de concentrarte por tiempo prolongado. No acabar con tu adicción al sexo te impide tener una relación de pareja sana. Ser adicto afecta negativamente a tu relación con familiares, amigos y seres queridos, no les dedicas el tiempo necesario.";

export const Sexo = () => {

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
