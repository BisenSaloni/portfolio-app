import { Container, Navbar, Nav } from "react-bootstrap";

const header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-transparent">
      <Container className="navbar">
        <Navbar.Brand className="text-white" href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white" href="#about">About</Nav.Link>
            <Nav.Link className="text-white"eventKey={2} href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="text-white" eventKey={3} href="#project">
              Projects
            </Nav.Link>
            <Nav.Link className="text-white" eventKey={4} href="#about">
             Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
</Navbar>
    </>
  );
};



export default header;
