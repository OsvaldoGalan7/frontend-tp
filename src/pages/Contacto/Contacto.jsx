import { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import styles from "./Contacto.module.css";


function Contacto() {
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    telefono: "",
    localidad: "",
    motivo: "",
    mensaje: "",
    promociones: false,
  });

  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setDatos({
      ...datos,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !datos.nombre ||
      !datos.email ||
      !datos.telefono ||
      !datos.localidad
    ) {
      setError(
        "Por favor, complete todos los campos obligatorios."
      );
      return;
    }

    const regexEmail = /\S+@\S+\.\S+/;

    if (!regexEmail.test(datos.email)) {
      setError("Ingrese un email válido.");
      return;
    }

    if (!datos.motivo) {
      setError("Seleccione un motivo de consulta.");
      return;
    }

    if (!datos.mensaje.trim()) {
      setError("Ingrese un mensaje.");
      return;
    }

    setError("");
    setEnviado(true);

    setDatos({
      nombre: "",
      email: "",
      telefono: "",
      localidad: "",
      motivo: "",
      mensaje: "",
      promociones: false,
    });
  };

  return (
    <Container className={`mt-4 ${styles.container}`}>
      <Row>
        <Col md={12}>
          <h1 className={styles.titulo}>
            Centro de Atención al Cliente
          </h1>

          <p className="text-muted mb-4">
            ¿Tenés alguna consulta sobre nuestros
            productos, pedidos, garantías,
            devoluciones o facturación? Completá
            el formulario y te responderemos a la
            brevedad.
          </p>
        </Col>
      </Row>

      {error && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}

      {enviado && (
        <Alert variant="success">
          ¡Gracias por tu mensaje! Nos pondremos
          en contacto pronto.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                Nombre y Apellido
              </Form.Label>

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
                placeholder="nombre@ejemplo.com"
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
              <Form.Label>
                Teléfono
              </Form.Label>

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
              <Form.Label>
                Localidad
              </Form.Label>

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
          <Form.Label>
            Motivo de consulta
          </Form.Label>

          <Form.Select
            name="motivo"
            value={datos.motivo}
            onChange={handleChange}
            required
          >
            <option value="">
              Seleccione una opción
            </option>

            <option value="producto">
              Consulta sobre producto
            </option>

            <option value="pedido">
              Estado de pedido
            </option>

            <option value="garantia">
              Garantía
            </option>

            <option value="devolucion">
              Devoluciones
            </option>

            <option value="facturacion">
              Facturación
            </option>

            <option value="otro">
              Otro
            </option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Mensaje
          </Form.Label>

          <Form.Control
            as="textarea"
            rows={5}
            name="mensaje"
            value={datos.mensaje}
            onChange={handleChange}
            placeholder="Escriba aquí su consulta..."
          />
        </Form.Group>

        <Form.Check
          className="mb-4"
          type="checkbox"
          name="promociones"
          checked={datos.promociones}
          onChange={handleChange}
          label="Quiero recibir promociones y novedades por correo electrónico"
        />

        <Button
          type="submit"
          className={styles.boton}
        >
          Enviar consulta
        </Button>
      </Form>
    </Container>
  );
}

export default Contacto;