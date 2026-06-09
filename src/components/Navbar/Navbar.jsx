import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Navbar.module.css';

function NavigationBar() {
  return (
    <Navbar className={styles.Navbar} expand="lg">
      <Container>
        <Navbar.Brand id ={styles.logo} as={NavLink} to="/">
          ElectroHogar
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-principal" />

        <Navbar.Collapse id="navbar-principal">
          <Nav className="ms-auto">
            <Nav.Link className={styles.navMenu} as={NavLink} to="/">
              Inicio
            </Nav.Link>

            <Nav.Link className={styles.navMenu} as={NavLink} to="/productos">
              Productos
            </Nav.Link>

            <Nav.Link className={styles.navMenu} as={NavLink} to="/carrito">
              Carrito
            </Nav.Link>

            <Nav.Link className={styles.navMenu} as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;