import { Link } from "react-router-dom";

export const CardsTratamiento = () => {
  return (
<div>
    <div className="relative overflow-hidden h-60">
    <img
      className="w-full absolute opacity-50 -top-96 left-1/2 transform -translate-x-1/2"
      src="quienessomos.jpeg"
      alt="imagen-sitio"
    />
  </div> 

    <div className="overflow-x-auto font-medium ml-28 mt-10 text-sky-600 text-5xl">
      Tratamientos
      <div className="flex space-x-11 text-2xl text-center text-gray-600 mx-6 mt-6">
        <div>
        <Link to="/alcohol">
          <img
            src="/alcohol.png"
            className="bg-gray-600 w-24 rounded-full "
            alt="alcohol"
          />
          <p>Alcohol</p>
        </Link>
        </div>
        {/* <div>
        <Link to="/">
          <img
            src="/tabaco.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="tabaco"
          />
          <p>Tabaco</p>
          </Link>
        </div> */}
        <div>
        <Link to="/cannabis">
          <img
            src="/cannabis.png"
            className="bg-gray-600 w-24  rounded-full "
            alt="cannabis"
          />
          <p>Cannabis</p>
        </Link>
        </div>
        <div>
        <Link to="/cocaina">
          <img
            src="/cocaina.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="cocaina"
          />
          <p>Cocaína</p>
        </Link>
        </div>
        <div>
        <Link to="/pastillas">
          <img
            src="/pastillas.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="pastillas"
          />
          <p>Pastillas</p>
        </Link>
        </div>
        <div>
        <Link to="/tecnologia">
          <img
            src="/tecnologia.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="tecnologia"
          />
          <p>Tecnología</p>
        </Link>
        </div>
        <div>
        <Link to="/sexo">
          <img
            src="/sexo.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="sexo"
          />
          <p>Sexo</p>
        </Link>
        </div>
        <div>
        <Link to="/ludopatia">
          <img
            src="/ludopatia.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="ludopatia"
          />
          <p>Ludopatía</p>
        </Link>
        </div>
        <div>
        <Link to="/pasta_base">
          <img
            src="/pasta_base.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="pasta_base"
          />
          <p>Pasta Base</p>
        </Link>
        </div>
        
      </div>
    </div>  <br/><br/><br/>
    </div>
  
  );
};
