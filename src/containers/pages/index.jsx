import React from "react";
import { Link } from "react-router-dom";

export const Index = () => {  
  const WEBSITE_NAME = "Comienza tu terapia";
  const DESCRIPTION_ONE = "hoy mismo...";

  return (
    <div
      className="h-screen bg-local bg-cover text-gray-700 flex flex-col lg:flex-row "
      style={{ backgroundImage: "url(/bglanding.jpg)" }}
    >
      {" "}
      {/* Agregada la clase bg-cover */}
      <div className="lg:w-2/4 flex items-center">
        <h1 variant="div" className="p-5 ml-5 lg:ml-20">
          <h1 className="font-roboto text-7xl">
            {" "}
            {WEBSITE_NAME}
          </h1>
          <h1 className="font-roboto text-7xl">
            {" "}
            {DESCRIPTION_ONE}{" "}
          </h1>
          <div className="text-lg p-3 m-6 button">
            <Link to="/signup">
        <label className= "bg-black rounded-xl p-3 hover:bg-blue-800 text-white"
                size="">
              
                !Recibe orientación gratis!</label>
         
            </Link>
          </div>
        </h1>
      </div>
    </div>
  );
}
