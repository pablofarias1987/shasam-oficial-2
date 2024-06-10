
import React from "react";


const NAME = "Nuestros programas";
const NAME2 ="OBJETIVO PRINCIPAL";
const NAME3 ="OBJETIVOS ESPECÍFICOS";
const parrafo1 =
"Rehabilitar y reinsertar en la sociedad a personas de 18 y 60 años de edad, con problemas de drogodependencia y alcoholismo, a través de un tratamiento 100% online y un programa integral terapeutico y cristiano con apoyo técnico y pastoral.";
const li_0 = "• Presentar y establecer fundamentos cristianos y terapeuticos, tanto en el paciente como en su núcleo familiar.";
const li_1= "• Fortalecer valores y principios cristianos con el fin de apuntalar la dimensión espiritual de nuestros paciente.";
const li_2= "• Restaurar la dignidad y la autoestima.";
const li_3= "• Fortalecer la voluntad.";
const li_4= "• Lograr que nuestros usuarios identifiquen las causas y consecuencias de su propio consumo de sustancias.";
const li_5= "• Lograr un cuestionamiento crítico por parte de nuestros pacientes en torno a la necesidad de cambio de hábitos adquiridos.";
const li_6= "• Habilitar a nuestros pacientes en estrategias que les permitan evitar recaídas durante el proceso y posterior egreso del tratamiento.";
const li_7= "• Desarrollar un fuerte trabajo con la familia a fin de lograr la completa restauración familiar.";
const li_8= "• Adaptación social.";
const li_9= "• Entrenar a nuestros pacientes en habilidades socio-laborales, con el fin de lograr una exitosa integración a la sociedad. Entregar herramientas del desempeño laboral (Hábitos como: puntualidad, presentación personal, despertar motivación, etc.).";
const li_10= "• Motivar al desarrollo personal y al cumplimiento de metas (término de estudios, especializaciones, participación en talleres y Otros).";
const li_11= "• Lograr que el paciente conozca y utilice las redes de protección con que cuenta la institución a fin de evitar recaídas una vez egresado del tratamiento.";
const NAME4= "METODOLOGÍA";
const NAME5= "Descripción del Universo";
const NAME6= "Comunidad Masculina Shasam";
const li_12= "• Hombres de 18 a 60 años";
const li_13= "• De todo estrato económico";
const li_14= "• Todo tipo de Adicciones";
const li_15= "• Patología Dual";
const li_16= "• Provenientes de todo Chile";
const li_17= "• Sin discriminación religiosa";
const NAME7= "Comunidad Femenina Shasam";
const li_18= "• Embarazadas";
const NAME8= "Comunidad Diferentes generos sexual Shasam";
const NAME9= "Perfil de Ingreso";
const NAME10= "La Comunidad Terapéutica online atiende personas con el siguiente perfil:";
const li_19= "1. Sin discriminación de genero sexual, entre 18 y 60 años.";
const li_20= "2. Compromiso biopsicosocial de moderado a severo.";
const li_21= "3. Consumo abusivo o dependencia de Drogas y/o alcohol.";
const li_22= "4. Con y sin patología psiquiátrica severa.";
const li_23= "5. Es altamente deseable contar con familiares y un apoderado significativo que apoyen a la persona durante el tratamiento.";
const li_24= "• Mujeres de 18 a 60 años";
const li_25= "• Personas de 18 a 60 años";

export const Programmes = () => {
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
          <br></br>
          <h1 className="text-sky-400 text-4xl font-small">
            {NAME2}
          </h1>
 
          <p className="text-justify space-y-4 text-xl m-5">
            <p>{parrafo1}</p>
            </p>
            <div className="flex-1 ">
          <h1 className="text-sky-400 text-4xl font-small">
            {NAME3}
          </h1>
          <ul className="text-justify space-y-4 text-xl m-5">
  
            <li>{li_0}</li>
            <li>{li_1}</li>
            <li>{li_2}</li>
            <li>{li_3}</li>
            <li>{li_4}</li>
            <li>{li_5}</li>
            <li>{li_6}</li>
            <li>{li_7}</li>
            <li>{li_8}</li>
            <li>{li_9}</li>
            <li>{li_10}</li>
            <li>{li_11}</li>
          </ul>

        <div className="flex-1">
          <h1 className="text-sky-400 text-5xl font-medium">
            {NAME4}
          </h1>
          <br></br>
          <h1 className="text-sky-400 text-4xl font-small">
            {NAME5}
          </h1>
          <br></br>
          <h1 className="text-sky-400 text-4xl font-small">
            {NAME6}
          </h1>    
          <ul className="text-justify space-y-4 text-xl m-5">
  
            <li>{li_12}</li>
            <li>{li_13}</li>
            <li>{li_14}</li>
            <li>{li_15}</li>
            <li>{li_16}</li>
            <li>{li_17}</li>
           
          </ul>     
          <h1 className="text-sky-400 text-4xl font-small">
            {NAME7}
          </h1>    
          <ul className="text-justify space-y-4 text-xl m-5">
  
            <li>{li_24}</li>
            <li>{li_13}</li>
            <li>{li_14}</li>
            <li>{li_15}</li>
            <li>{li_16}</li>
            <li>{li_17}</li>
            <li>{li_18}</li>
           
          </ul>               
          <h1 className="text-sky-400 text-4xl font-small">
            {NAME8}
          </h1>    
          <ul className="text-justify space-y-4 text-xl m-5">
  
            <li>{li_25}</li>
            <li>{li_13}</li>
            <li>{li_14}</li>
            <li>{li_15}</li>
            <li>{li_16}</li>
            <li>{li_17}</li>
            <li>{li_18}</li>
           
          </ul>         
          <div className="flex-1">
          <h1 className="text-sky-400 text-5xl font-medium">
            {NAME9}
          </h1>
          <br></br>
          <h1 className="text-sky-400 text-4xl font-small">
            {NAME10}
          </h1>

          <ul className="text-justify space-y-4 text-xl m-5">
            <li>{li_19}</li>
            <li>{li_20}</li>
            <li>{li_21}</li>
            <li>{li_22}</li>
            <li>{li_23}</li>
          </ul>    

              </div>  
            </div>
          </div>        
        </div>
      </div>
    </div>
  );
};
