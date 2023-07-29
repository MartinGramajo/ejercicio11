import { Form } from "react-bootstrap";

const Formulario = () => {
  return (
    <section className="d-flex justify-content-around flex-wrap">
      <div className="d-flex justify-content-center align-self-center">
        <Form.Label className="text-white my-2 me-3" htmlFor="inputPassword5">
          Categorías
        </Form.Label>
        <Form.Select>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
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
