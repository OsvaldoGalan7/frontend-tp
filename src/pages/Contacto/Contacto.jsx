import { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import styles from "./Contacto.module.css";


function Contacto() {
  const [datos, setDatos] = useState({
    nombre: "",
    email: "nombre@ejemplo.com",
    telefono: "",
    localidad: "",
    entrega: "Retiro en el local",
    mensaje: "",
  });

  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones simples
    if (!datos.nombre || !datos.email || !datos.telefono || !datos.localidad) {
      setError("Por favor, complete todos los campos obligatorios.");
      return;
    }

    // Validación de email
    const regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(datos.email)) {
      setError("Ingrese un email válido.");
      return;
    }

    setError("");
    setEnviado(true);
  };

 return (
    <Container className={`mt-4 ${styles.container}`}>
      <Row>
        <Col md={12}>
          <h1 className={styles.titulo}>Contacto</h1>
          <p className="text-muted mb-4">
            Completá el formulario y nos pondremos en contacto.
          </p>
        </Col>
      </Row>

      {error && <Alert variant="danger">{error}</Alert>}
      {enviado && (
        <Alert variant="success">
          ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={datos.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={datos.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="telefono"
                value={datos.telefono}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Localidad</Form.Label>
              <Form.Control
                type="text"
                name="localidad"
                value={datos.localidad}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Método de entrega</Form.Label>
          <Form.Select
            name="entrega"
            value={datos.entrega}
            onChange={handleChange}
          >
            <option value="">Seleccione...</option>
            <option value="retiro">Retiro en tienda</option>
            <option value="envio">Envío a domicilio</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="mensaje"
            value={datos.mensaje}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" className={styles.boton}>
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Contacto;