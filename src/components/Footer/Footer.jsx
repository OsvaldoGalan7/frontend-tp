import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer id={styles.footer}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>ElectroHogar</h5>
            <p>
              Tienda online de electrodomésticos para el hogar.
            </p>
          </Col>

          <Col md={4}>
            <h5>Contacto</h5>
            <p>Email: contacto@electrohogar.com</p>
            <p>Teléfono: 11-1234-5678</p>
          </Col>

          <Col md={4}>
            <h5>Redes sociales</h5>
            <p>Instagram: @electrohogar</p>
            <p>Facebook: ElectroHogar</p>
          </Col>
        </Row>

        <p className="text-center mb-0 mt-3">
          © 2026 ElectroHogar - Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
}

export default Footer;