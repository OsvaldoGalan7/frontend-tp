import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          ElectroHogar
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-principal" />

        <Navbar.Collapse id="navbar-principal">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Inicio
            </Nav.Link>

            <Nav.Link as={NavLink} to="/productos">
              Productos
            </Nav.Link>

            <Nav.Link as={NavLink} to="/carrito">
              Carrito
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;