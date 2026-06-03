import { Button } from 'react-bootstrap';

function CarritoItem({
  item,
  aumentarCantidad,
  disminuirCantidad,
  eliminarDelCarrito,
}) {
  return (
    <tr>
      <td>{item.nombre}</td>
      <td>${item.precio}</td>
      <td>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => disminuirCantidad(item.id)}
        >
          -
        </Button>

        <span className="mx-2">{item.cantidad}</span>

        <Button
          variant="secondary"
          size="sm"
          onClick={() => aumentarCantidad(item.id)}
        >
          +
        </Button>
      </td>
      <td>${item.precio * item.cantidad}</td>
      <td>
        <Button
          variant="danger"
          size="sm"
          onClick={() => eliminarDelCarrito(item.id)}
        >
          Eliminar
        </Button>
      </td>
    </tr>
  );
}

export default CarritoItem;