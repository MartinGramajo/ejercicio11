import { useEffect, useState } from "react";
import "./App.css";
import Titulo from "./components/Titulo";

function App() {
  const [noticias, setNoticias] = useState([]);
  console.log("file: App.jsx:7 ~ App ~ noticias:", noticias);

  useEffect(() => {
    console.log("esto es mi consulta");
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_26807d055cc63d04745a09599882a3e24adc3&language=es`
      );

      const dato = await respuesta.json();

      setNoticias(dato.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-app d-flex flex-column min-vh-100">
      <section>
        <Titulo />
      </section>
      <footer className="py-5 mt-auto bg-dark">
        <h5 className="text-center text-white">
          {" "}
          © Todos los derechos reservados
        </h5>
      </footer>
    </div>
  );
}

export default App;
