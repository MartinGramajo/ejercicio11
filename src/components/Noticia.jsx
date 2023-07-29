const Noticia = ({ item }) => {
  const { category, description, title, pubDate, link } = item;

  return (
    <article className="">
      <div className="ag-courses_box">
        <div className="ag-courses_item">
          <a href={link} className="ag-courses-item_link">
            <div className={category}></div>
            <h6 className="">{category}</h6>
            <h1 className="ag-courses-item_title">{title}</h1>
            <h4 className="limit-text ag-courses-item_description">
              {description}
            </h4>
            <h6 className="ag-courses-item_date-box">
              Fecha:
              <span className="ag-courses-item_date"> {pubDate}</span>
            </h6>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Noticia;
