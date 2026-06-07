import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

import productos from '../../data/productos';

function DetalleProducto() {
  const { id } = useParams();

  const producto = productos.find((producto) => producto.id === Number(id));

  if (!producto) {
    return (
      <Container className="mt-4">
        <h1>Producto no encontrado</h1>
        <Button as={Link} to="/productos" variant="primary">
          Volver al catálogo
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Button as={Link} to="/productos" variant="secondary" className="mb-3">
        Volver al catálogo
      </Button>

      <Row>
        <Col md={6}>
          {producto.imagen ? (
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid rounded"
            />
          ) : (
            <div className="bg-light text-center p-5 rounded">
              Sin imagen
            </div>
          )}
        </Col>

        <Col md={6}>
          <h1>{producto.nombre}</h1>

          <Badge bg={producto.stock > 0 ? 'success' : 'danger'} className="mb-3">
            {producto.stock > 0 ? 'Disponible' : 'Sin stock'}
          </Badge>

          <p>{producto.descripcion}</p>

          <p>
            <strong>Categoría:</strong> {producto.categoria}
          </p>

          <p>
            <strong>Precio:</strong> ${producto.precio}
          </p>

          <p>
            <strong>Stock disponible:</strong> {producto.stock}
          </p>

          <h4>Características</h4>

          <ul>
            {producto.caracteristicas.map((caracteristica, index) => (
              <li key={index}>{caracteristica}</li>
            ))}
          </ul>

          <Button 
          variant="success" disabled={producto.stock === 0}
          onClick={() => agregarAlCarrito(producto)}
          >
            Agregar al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DetalleProducto;