import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import productos from "../../data/productos";
import ProductoCard from "../../components/ProductoCard/ProductoCard";

function Productos({ agregarAlCarrito }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoriaURL = searchParams.get("categoria");
    if (categoriaURL) {
      setCategoria(categoriaURL);
    }
  }, [searchParams]);

  // Filtrado dinámico
  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideCategoria = categoria
      ? producto.categoria === categoria
      : true;
    return coincideNombre && coincideCategoria;
  });
  

  return (
    <Container className="mt-4">
      <h1>Productos</h1>

      {/* Filtros */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Buscar por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Form.Select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            <option value="Electrodomésticos">Electrodomésticos</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Hogar">Hogar</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Render de productos filtrados */}
      <Row className="elementos">
        {productosFiltrados.map((producto) => (
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
