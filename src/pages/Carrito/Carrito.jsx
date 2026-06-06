import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CarritoItem from "../../components/CarritoItem/CarritoItem";
function Carrito({
  carrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarDelCarrito,
}) {
  const total = carrito.reduce(
    (acumulador, item) => acumulador + item.precio * item.cantidad,
    0
  );

  const cantidadTotal = carrito.reduce(
    (acumulador, item) => acumulador + item.cantidad,
    0
  );

  return (
    <Container className="mt-4">
      <h1>Carrito de compras</h1>

      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <p>Cantidad total de productos: {cantidadTotal}</p>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {carrito.map((item) => (
                <CarritoItem
                  key={item.id}
                  item={item}
                  aumentarCantidad={aumentarCantidad}
                  disminuirCantidad={disminuirCantidad}
                  eliminarDelCarrito={eliminarDelCarrito}
                />
              ))}
            </tbody>
          </Table>

          <h3>Total: ${total}</h3>

          <Button variant="success" onClick={() => navigate("/compra")}>
            Confirmar compra
          </Button>

        </>
      )}
    </Container>
  );
}

export default Carrito;