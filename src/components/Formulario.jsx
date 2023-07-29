import { Form } from "react-bootstrap";

const Formulario = ({ handleChange }) => {
  return (
    <section className="d-flex justify-content-around flex-wrap">
      <div className="d-flex justify-content-center align-self-center">
        <Form.Label className="text-white my-2 me-3" htmlFor="inputPassword5">
          Categorías
        </Form.Label>
        <Form.Select onChange={handleChange}>
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

      <div className="d-flex justify-content-center align-self-center">
        <Form.Label className="text-white my-2 me-3" htmlFor="inputPassword5">
          País
        </Form.Label>
        <Form.Select>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
    </section>
  );
};

export default Formulario;
