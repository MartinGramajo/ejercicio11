import { useEffect, useState } from "react";
import "./App.css";
import Titulo from "./components/Titulo";
import ListaNoticias from "./components/ListaNoticias";
import Footer from "./components/Footer";

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
      <Titulo />
      <ListaNoticias />
      <Footer />
    </div>
  );
}

export default App;
