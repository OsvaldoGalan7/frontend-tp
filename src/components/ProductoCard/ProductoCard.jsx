import { Link } from 'react-router-dom';
import { Card, Button, Badge } from 'react-bootstrap';

function ProductoCard({ producto, agregarAlCarrito }) {
  return (
    <Card className="h-100">
      {producto.imagen ? (
        <Card.Img
          variant="top"
          src={producto.imagen}
          alt={producto.nombre}
        />
      ) : (
        <div className="bg-light text-center p-5">
          Sin imagen
        </div>
      )}

      <Card.Body>
        <Badge bg={producto.stock > 0 ? 'success' : 'danger'} className="mb-2">
          {producto.stock > 0 ? 'Disponible' : 'Sin stock'}
        </Badge>

        <Card.Title>{producto.nombre}</Card.Title>

        <Card.Text>{producto.descripcion}</Card.Text>

        <Card.Text>
          <strong>${producto.precio}</strong>
        </Card.Text>

        <Button
          as={Link}
          to={`/producto/${producto.id}`}
          variant="primary"
          className="me-2"
        >
          Ver detalle
        </Button>

        <Button
          variant="success"
          disabled={producto.stock === 0}
          onClick={() => agregarAlCarrito(producto)}
        >
          Agregar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;