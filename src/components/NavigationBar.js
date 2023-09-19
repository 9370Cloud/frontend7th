import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";
import { useState } from "react";
import LoginModal from "./MainPage/Modal";

function NavigationBar() {

  const [open, setOpen] = useState(false);

  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="#home" className="nav-brand">
          dataMindHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="NavHamburgerBtn" >
          <div className={`icon nav-icon-5 ${open? 'open' : ''}`} onClick={()=>{
              setOpen(!open)
          }}>
              <span></span>
              <span></span>
              <span></span>
          </div>
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
          <Nav className="text-right">
            {/* <button className="LogInButton" style={{ color: "#0D0C22" }}>Log in</button>
            <button className="Button" style={{ color: "#ffffff" }}>Sign up</button> */}
            <LoginModal/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
