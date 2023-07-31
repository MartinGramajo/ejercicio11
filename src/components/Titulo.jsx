import { ButtonGroup, Button, Form } from "react-bootstrap";

const Titulo = ({ setLanguage, search, setSearch, handleChangeInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
    setSearch("");
  };

  return (
    <section>
      <div className="d-flex justify-content-end me-1 py-1">
        <ButtonGroup aria-label="Basic example">
          <Button onClick={() => setLanguage("es")} variant="light">
            Esp
          </Button>
          <Button onClick={() => setLanguage("en")} variant="dark">
            Ing
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <h1 className="text-center  py-5 fs-1 text-white"> NotiWorld</h1>

        <div className="d-flex justify-content-center">
          <Form className="w-50" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="tarea">
              <Form.Control
                type="text"
                placeholder="ingrese una Búsqueda"
                value={search}
                onChange={handleChangeInput}
              />
            </Form.Group>
          </Form>
        </div>
        <hr className="text-light py-2" />
      </div>
    </section>
  );
};

export default Titulo;
