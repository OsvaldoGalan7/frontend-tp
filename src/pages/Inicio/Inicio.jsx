import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function Inicio() {
  return (
    <Container className="mt-4">
      <Row className="align-items-center">
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
            src="https://via.placeholder.com/600x350"
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