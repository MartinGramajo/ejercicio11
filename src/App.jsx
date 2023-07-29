import { useEffect, useState } from "react";
import "./App.css";
import Titulo from "./components/Titulo";
import ListaNoticias from "./components/ListaNoticias";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [category, setCategory] = useState("top");
  console.log("file: App.jsx:11 ~ App ~ category:", category);

  useEffect(() => {
    consultarApi();
  }, [category]);

  const consultarApi = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_26807d055cc63d04745a09599882a3e24adc3&language=es&category=${category}`
      );

      const dato = await respuesta.json();

      setNoticias(dato.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  return (
    <div className="bg-app d-flex flex-column min-vh-100">
      <Titulo />
      <Formulario handleChange={handleChange} />
      {noticias.length === 0 ? (
        <div className="container text-center py-5">
          <h2 className="text-white">
            No hay noticias relacionadas con esa categoría. Por favor intenta
            con otra categoría!!!
          </h2>
        </div>
      ) : (
        <ListaNoticias noticias={noticias} />
      )}

      <Footer />
    </div>
  );
}

export default App;
