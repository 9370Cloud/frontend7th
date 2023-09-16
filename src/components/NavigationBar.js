import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="#home">
          dataMindHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="NavHamburgerBtn" >
          12312
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: "#0D0C22" }}>
              AboutUs
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "#0D0C22" }}>
              Post
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <button className="LogInButton" style={{ color: "#0D0C22" }}>Log in</button>
            <button className="Button" style={{ color: "#ffffff" }}>Sign up</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
