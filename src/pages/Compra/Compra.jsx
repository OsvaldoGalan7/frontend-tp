import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";

function Compra() {
  const [datos, setDatos] = useState({
    correo: "",
    novedades: false,

    pais: "",
    nombre: "",
    apellido: "",
    dni: "",
    direccion: "",
    altura: "",
    departamento: "",
    codigoPostal: "",
    ciudad: "",
    provincia: "",
    estado: "",
    telefono: "",
    guardarInfo: false,

    metodoEnvio: "",

    metodoPago: "",

    tarjeta: "",
    vencimiento: "",
    cvv: "",
    titular: "",
    dniTitular: "",
    cuotas: "",

    mensaje: "",
  });

  const [errores, setErrores] = useState({});
  const [compraRealizada, setCompraRealizada] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setDatos({
      ...datos,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validar = () => {
    const nuevosErrores = {};

    if (!/\S+@\S+\.\S+/.test(datos.correo))
      nuevosErrores.correo = "Ingrese un correo válido";

    if (!datos.pais)
      nuevosErrores.pais = "Seleccione un país";

    if (!datos.nombre.trim())
      nuevosErrores.nombre = "Ingrese su nombre";

    if (!datos.apellido.trim())
      nuevosErrores.apellido = "Ingrese su apellido";

    if (!/^\d{7,}$/.test(datos.dni))
      nuevosErrores.dni = "DNI inválido";

    if (!datos.direccion.trim())
      nuevosErrores.direccion = "Ingrese una dirección";

    if (!datos.altura.trim())
      nuevosErrores.altura = "Ingrese la altura";

    if (!datos.codigoPostal.trim())
      nuevosErrores.codigoPostal = "Ingrese el código postal";

    if (!datos.ciudad.trim())
      nuevosErrores.ciudad = "Ingrese la ciudad";

    if (!datos.provincia.trim())
      nuevosErrores.provincia = "Ingrese la provincia";

    if (!datos.estado.trim())
      nuevosErrores.estado = "Ingrese el estado";

    if (!/^\d{8,}$/.test(datos.telefono))
      nuevosErrores.telefono = "Teléfono inválido";

    if (!datos.metodoEnvio)
      nuevosErrores.metodoEnvio =
        "Seleccione un método de envío";

    if (!datos.metodoPago)
      nuevosErrores.metodoPago =
        "Seleccione un método de pago";

    if (datos.metodoPago === "tarjeta") {
      if (!/^\d{16}$/.test(datos.tarjeta.replace(/\s/g, "")))
        nuevosErrores.tarjeta =
          "Número de tarjeta inválido";

      if (
        !/^(0[1-9]|1[0-2])\/\d{2}$/.test(
          datos.vencimiento
        )
      )
        nuevosErrores.vencimiento =
          "Formato MM/AA";

      if (!/^\d{3}$/.test(datos.cvv))
        nuevosErrores.cvv = "CVV inválido";

      if (!datos.titular.trim())
        nuevosErrores.titular =
          "Ingrese el titular";

      if (!/^\d{7,}$/.test(datos.dniTitular))
        nuevosErrores.dniTitular =
          "DNI inválido";

      if (!datos.cuotas)
        nuevosErrores.cuotas =
          "Seleccione las cuotas";
    }

    setErrores(nuevosErrores);

    return (
      Object.keys(nuevosErrores).length === 0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validar()) return;

    if (datos.metodoPago === "mercadopago") {
      alert(
        "Serás redirigido a Mercado Pago (simulación)"
      );
    } else {
      alert(
        "Compra realizada correctamente."
      );
    }

    setCompraRealizada(true);
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">
        Finalizar compra
      </h1>

      {compraRealizada && (
        <Alert variant="success">
          ¡Compra realizada con éxito!
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        {/* CONTACTO */}

        <h3>Contacto</h3>

        <Form.Group className="mb-3">
          <Form.Label>
            Correo electrónico
          </Form.Label>

          <Form.Control
            type="email"
            name="correo"
            value={datos.correo}
            onChange={handleChange}
            isInvalid={!!errores.correo}
          />

          <Form.Control.Feedback type="invalid">
            {errores.correo}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Check
          className="mb-4"
          type="checkbox"
          name="novedades"
          checked={datos.novedades}
          onChange={handleChange}
          label="Enviarme novedades y ofertas por correo electrónico"
        />

        {/* ENTREGA */}

        <h3>Entrega</h3>

        <Form.Group className="mb-3">
          <Form.Label>
            País / Región
          </Form.Label>

          <Form.Select
            name="pais"
            value={datos.pais}
            onChange={handleChange}
            isInvalid={!!errores.pais}
          >
            <option value="">
              Seleccione...
            </option>
            <option value="Argentina">
              Argentina
            </option>
            <option value="Uruguay">
              Uruguay
            </option>
            <option value="Chile">
              Chile
            </option>
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            {errores.pais}
          </Form.Control.Feedback>
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Nombre"
                name="nombre"
                value={datos.nombre}
                onChange={handleChange}
                isInvalid={!!errores.nombre}
              />
              <Form.Control.Feedback type="invalid">
                {errores.nombre}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Apellido"
                name="apellido"
                value={datos.apellido}
                onChange={handleChange}
                isInvalid={!!errores.apellido}
              />
              <Form.Control.Feedback type="invalid">
                {errores.apellido}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Control
            placeholder="DNI"
            name="dni"
            value={datos.dni}
            onChange={handleChange}
            isInvalid={!!errores.dni}
          />

          <Form.Control.Feedback type="invalid">
            {errores.dni}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Calle"
            name="direccion"
            value={datos.direccion}
            onChange={handleChange}
            isInvalid={!!errores.direccion}
          />

          <Form.Control.Feedback type="invalid">
            {errores.direccion}
          </Form.Control.Feedback>
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Altura"
                name="altura"
                value={datos.altura}
                onChange={handleChange}
                isInvalid={!!errores.altura}
              />

              <Form.Control.Feedback type="invalid">
                {errores.altura}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Departamento, piso, etc. (opcional)"
                name="departamento"
                value={datos.departamento}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Código Postal"
                name="codigoPostal"
                value={datos.codigoPostal}
                onChange={handleChange}
                isInvalid={!!errores.codigoPostal}
              />

              <Form.Control.Feedback type="invalid">
                {errores.codigoPostal}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Ciudad"
                name="ciudad"
                value={datos.ciudad}
                onChange={handleChange}
                isInvalid={!!errores.ciudad}
              />

              <Form.Control.Feedback type="invalid">
                {errores.ciudad}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Provincia"
                name="provincia"
                value={datos.provincia}
                onChange={handleChange}
                isInvalid={!!errores.provincia}
              />

              <Form.Control.Feedback type="invalid">
                {errores.provincia}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Estado"
            name="estado"
            value={datos.estado}
            onChange={handleChange}
            isInvalid={!!errores.estado}
          />

          <Form.Control.Feedback type="invalid">
            {errores.estado}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Teléfono"
            name="telefono"
            value={datos.telefono}
            onChange={handleChange}
            isInvalid={!!errores.telefono}
          />

          <Form.Control.Feedback type="invalid">
            {errores.telefono}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Check
          className="mb-4"
          type="checkbox"
          name="guardarInfo"
          checked={datos.guardarInfo}
          onChange={handleChange}
          label="Guardar esta información para consultar rápidamente la próxima vez"
        />

        {/* ENVIO */}

        <h3>Método de envío</h3>

        <Alert variant="light">
          Ingresá tu dirección para ver
          los métodos de envío disponibles.
        </Alert>

        <Form.Group className="mb-4">
          <Form.Select
            name="metodoEnvio"
            value={datos.metodoEnvio}
            onChange={handleChange}
            isInvalid={!!errores.metodoEnvio}
          >
            <option value="">
              Seleccione...
            </option>
            <option value="correo">
              Correo Argentino
            </option>
            <option value="oca">
              OCA
            </option>
            <option value="retiro">
              Retiro en sucursal
            </option>
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            {errores.metodoEnvio}
          </Form.Control.Feedback>
        </Form.Group>

        {/* PAGO */}

        <h3>Pago</h3>

        <p className="text-muted">
          Tu dirección de facturación que
          figura en el pago debe coincidir
          con la dirección de envío.
          Todas las transacciones son
          seguras y están encriptadas.
        </p>

        <Form.Check
          type="radio"
          label="Tarjeta de crédito o débito"
          name="metodoPago"
          value="tarjeta"
          checked={
            datos.metodoPago === "tarjeta"
          }
          onChange={handleChange}
        />

        <Form.Check
          className="mb-3"
          type="radio"
          label="Mercado Pago"
          name="metodoPago"
          value="mercadopago"
          checked={
            datos.metodoPago ===
            "mercadopago"
          }
          onChange={handleChange}
        />

        {datos.metodoPago ===
          "tarjeta" && (
          <>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Número de tarjeta"
                name="tarjeta"
                value={datos.tarjeta}
                onChange={handleChange}
                isInvalid={!!errores.tarjeta}
              />

              <Form.Control.Feedback type="invalid">
                {errores.tarjeta}
              </Form.Control.Feedback>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    placeholder="MM/AA"
                    name="vencimiento"
                    value={
                      datos.vencimiento
                    }
                    onChange={handleChange}
                    isInvalid={
                      !!errores.vencimiento
                    }
                  />

                  <Form.Control.Feedback type="invalid">
                    {errores.vencimiento}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    placeholder="Código de seguridad"
                    name="cvv"
                    value={datos.cvv}
                    onChange={handleChange}
                    isInvalid={!!errores.cvv}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errores.cvv}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Nombre del titular"
                name="titular"
                value={datos.titular}
                onChange={handleChange}
                isInvalid={!!errores.titular}
              />

              <Form.Control.Feedback type="invalid">
                {errores.titular}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                placeholder="DNI del titular"
                name="dniTitular"
                value={datos.dniTitular}
                onChange={handleChange}
                isInvalid={
                  !!errores.dniTitular
                }
              />

              <Form.Control.Feedback type="invalid">
                {errores.dniTitular}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Select
                name="cuotas"
                value={datos.cuotas}
                onChange={handleChange}
                isInvalid={!!errores.cuotas}
              >
                <option value="">
                  Seleccione cuotas
                </option>
                <option value="1">
                  1 cuota
                </option>
                <option value="3">
                  3 cuotas
                </option>
                <option value="6">
                  6 cuotas
                </option>
                <option value="12">
                  12 cuotas
                </option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                {errores.cuotas}
              </Form.Control.Feedback>
            </Form.Group>
          </>
        )}

        {datos.metodoPago ===
          "mercadopago" && (
          <Alert
            variant="info"
            className="mb-4"
          >
            Serás redirigido a Mercado Pago
            para completar la compra.
          </Alert>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
        >
          Confirmar compra
        </Button>
      </Form>
    </Container>
  );
}

export default Compra;