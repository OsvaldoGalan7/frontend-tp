import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos/Productos";
import DetalleProducto from "./pages/DetalleProducto/DetalleProducto";
import Carrito from "./pages/Carrito/Carrito";
import Contacto from "./pages/Contacto/Contacto";
import Compra from "./pages/Compra/Compra";

import NavigationBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [mensaje, setMensaje] = useState('');

  function agregarAlCarrito(producto) {
    const productoEnCarrito = carrito.find((item) => item.id === producto.id);

    if (productoEnCarrito) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
    setMensaje('Producto agregado correctamente');

    setTimeout(() => {
    setMensaje('');
    },  1500);
  }

  function aumentarCantidad(id) {
    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  }

  function disminuirCantidad(id) {
    setCarrito(
      carrito.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  }

  function eliminarDelCarrito(id) {
    setCarrito(carrito.filter((item) => item.id !== id));
  }

  return (
    // <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />

      {mensaje && (
        <div
          className="position-fixed top-0 start-50 translate-middle-x p-3"
          style={{ zIndex: 1050 }}
        >
          <div className="alert alert-success mb-0" role="alert">
            {mensaje}
          </div>
        </div>
)}

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route
            path="/productos"
            element={<Productos agregarAlCarrito={agregarAlCarrito} />}
          />

          <Route
            path="/producto/:id"
            element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />}
          />

          <Route
            path="/carrito"
            element={
              <Carrito
                carrito={carrito}
                aumentarCantidad={aumentarCantidad}
                disminuirCantidad={disminuirCantidad}
                eliminarDelCarrito={eliminarDelCarrito}
              />
            }
          />

          <Route path="/contacto" element={<Contacto />} />
          <Route path="/compra" element={<Compra />} />
        </Routes>
      </main>

      <Footer />
    </div>
 // </Router>
  );
}

export default App;