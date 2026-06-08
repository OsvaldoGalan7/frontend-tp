import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Carrusel from '../../components/Carrusel/Carrusel';


import productos from "../../data/productos";
import ProductoCardCompacto from "../../components/ProductoCard/ProductoCardCompacto";

function obtenerProductoMasCaro(categoria) {
  return productos
    .filter(producto => producto.categoria === categoria)
    .reduce((masCaro, producto) =>
      producto.precio > masCaro.precio ? producto : masCaro
    , { precio: 0 });
}
const productoHogarMasCaro = obtenerProductoMasCaro("Hogar");
const productoElectrodomesticoMasCaro = obtenerProductoMasCaro("Electrodomésticos");
const productoTecnologicoMasCaro = obtenerProductoMasCaro("Tecnología");

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
        
        <h2>Nuestros productos mas vendidos!</h2>

        <Col className = "articulo" md={4}>
          <ProductoCardCompacto
              producto={productoHogarMasCaro}
              
          />
        </Col>
        <Col className = "articulo" md={4}>
          <ProductoCardCompacto
              producto={productoElectrodomesticoMasCaro}
            
          />
        </Col>
        <Col className = "articulo" md={4}>
          <ProductoCardCompacto
              producto={productoTecnologicoMasCaro}
              
          />
        </Col>
        
        
      </Row>
    </Container>
  );
}

export default Inicio;