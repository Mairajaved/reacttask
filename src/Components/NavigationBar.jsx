import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function NavigationBar() {
  return (
    <Navbar className="bg-dark text-white" collapseOnSelect expand="lg">
      <Container>
        <Link className="bg-dark text-white nav-link" to="/">
          MegaStore
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="bg-white"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
            <Link className="nav-link text-white" to="/products">
              Products
            </Link>
            <Link className="btn btn-light ms-3" to="/login">
              Login
            </Link>
            <Link className="btn btn-light ms-3" to="/signup">
              Signup
            </Link>
            <Link className="nav-link text-white" to="/favorites">
              <AiOutlineHeart />
            </Link>
            <Link className="nav-link text-white" to="/cart">
              <AiOutlineShoppingCart />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
