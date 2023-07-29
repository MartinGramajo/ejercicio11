const Noticia = () => {
  return (
    <article className="ag-format-container">
      <div className="ag-courses_box">
        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>
            <h6 className="">categoria</h6>
            <h1 className="ag-courses-item_title">Titulo de la noticia</h1>
            <h4 className="">contenido de la noticia</h4>
            <h6 className="ag-courses-item_date-box">
              Fecha:
              <span className="ag-courses-item_date"> 04.11.2022</span>
            </h6>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Noticia;
