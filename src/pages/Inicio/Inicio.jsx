import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Carrusel from '../../components/Carrusel/Carrusel';

function Inicio() {
  return (
    <Container className="mt-4">
      <Carrusel/>
      
      <Row className="align-items-center mt-5">
        <Col md={6}>
          <h1>ElectroHogar</h1>

          <p>
            Encontrá electrodomésticos para equipar tu casa con productos de
            calidad, buenos precios y una compra simple.
          </p>

          <Button as={Link} to="/productos" variant="primary">
            Ver productos
          </Button>
        </Col>

        <Col md={6}>
          <Image
            src="https://www.endesa.com/content/dam/endesa-com/endesaclientes/blog/imagenes/AM_electrodomesticos_mas_usados_por_estaciones.jpg"
            alt="Electrodomésticos para el hogar"
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Inicio;