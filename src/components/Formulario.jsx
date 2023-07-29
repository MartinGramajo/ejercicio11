import { ButtonGroup, Button, Form } from "react-bootstrap";

const Formulario = ({
  handleChangeCategory,
  handleChangeCountry,
  setLanguage,
}) => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-4 col-12 pb-4">
          <Form.Label className="text-white my-2 me-3" htmlFor="inputPassword5">
            Categorías
          </Form.Label>
          <Form.Select onChange={handleChangeCategory}>
            <option value="business">Negocios</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="environment">Ambiente</option>
            <option value="food">Comida</option>
            <option value="health">Salud</option>
            <option value="politics">Política</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="technology">Tecnologia</option>
            <option value="top">Top</option>
            <option value="tourism">Turismo</option>
            <option value="world">World</option>
          </Form.Select>
        </div>

        <div className="col-md-4 col-12 text-center">
          <ButtonGroup aria-label="Basic example">
            <Button onClick={() => setLanguage("es")} variant="info">
              Español
            </Button>
            <Button onClick={() => setLanguage("en")} variant="success">
              Ingles
            </Button>
          </ButtonGroup>
        </div>

        <div className="col-md-4 col-12 pb-4">
          <Form.Label className="text-white my-2 me-3" htmlFor="inputPassword5">
            País
          </Form.Label>
          <Form.Select onChange={handleChangeCountry}>
            <option value="ar">Argentina</option>
            <option value="cl">Chile</option>
            <option value="py">Paraguay</option>
            <option value="br">Brazil</option>
            <option value="bo">Bolivia</option>
            <option value="us">Estados Unidos</option>
            <option value="mx">Mexico</option>
          </Form.Select>
        </div>
      </div>
    </section>
  );
};

export default Formulario;
