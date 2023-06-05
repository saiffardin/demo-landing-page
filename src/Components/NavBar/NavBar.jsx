import {Nav, NavDropdown, Navbar} from "react-bootstrap";
import Logo from '../../assets/Logo.png';
import "./NavBar.css";

const NavBar = () => {
  return (
      <Navbar bg="light" variant="light" className="px-5">
          <Navbar.Brand className="logo">
            <img
              alt="logo"
              src={Logo}
              width="150"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>

          <Nav className="me-auto">
            <NavDropdown title="Product" className="mx-3">
              <NavDropdown.Item>Product 1</NavDropdown.Item>
              <NavDropdown.Item>Product 2</NavDropdown.Item>
              <NavDropdown.Item>Product 3</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="mx-3">About Us</Nav.Link>
            <Nav.Link className="mx-3">Contacts</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <button className="btn-get-started">Get Started</button>
            <button className="btn-login">Login</button>
          </Nav>
      </Navbar> 
  );
};

export default NavBar;