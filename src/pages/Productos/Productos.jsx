import { Container, Row, Col } from 'react-bootstrap';

import productos from '../../data/productos';
import ProductoCard from '../../components/ProductoCard/ProductoCard';

function Productos({ agregarAlCarrito }) {
  return (
    <Container className="mt-4">
      <h1>Productos</h1>

      <Row className='elementos'>
        {productos.map((producto) => (
          <Col key={producto.id} md={4} className="mb-4">
            <ProductoCard
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;