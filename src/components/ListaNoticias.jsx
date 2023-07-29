import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {
  return (
    <div className="container d-flex flex-wrap justify-content-around">
      {noticias.map((item, i) => (
        <Noticia item={item} key={i} />
      ))}
    </div>
  );
};

export default ListaNoticias;
