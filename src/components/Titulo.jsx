import { ButtonGroup, Button } from "react-bootstrap";

const Titulo = ({ setLanguage }) => {
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
        <hr className="text-light py-2" />
      </div>
    </section>
  );
};

export default Titulo;
