import { Container, Navbar, Nav } from "react-bootstrap";

const header = () => {
  return (
    <>
   
      {/* <Navbar collapseOnSelect expand="lg" className="bg-body-transparent">
      <Container className="navbar">
        <Navbar.Brand className="text-white" href="#home"><h3>Portfolio</h3></Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link className=" text-white" eventKey={2} href="#project">
             <h4> About</h4>
            </Nav.Link>
            
            <Nav.Link className="text-white" eventKey={3} href="#project">
              <h4>Projects</h4>
            </Nav.Link>
            <Nav.Link className="text-white" eventKey={4} href="#about">
             <h4>Contact</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
</Navbar> */}

{/* <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
  <a class="navbar-brand" href="#">Portfolio</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#About">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Project">Projects</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Contact">Contact</a>
    </li>
   
  </ul>
</nav>

    </>
  );
}; */}



{/* <nav id="navbar-example2" className="navbar">
        <a className="navbar-brand" href="#"><h4>Portfolio</h4></a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#About"><h4>About</h4></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Project"><h4>Projects</h4></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact"><h4>Contact</h4></a>
          </li>
        </ul>
      </nav>
    </>
  );
}; */}

{/* <nav id="navbar-example2" className="navbar navbar-expand-lg ">
  <a className="navbar-brand" href="#"><h4>Portfolio</h4></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <a className="nav-link" href="#About"><h4>About</h4></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Project"><h4>Projects</h4></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Contact"><h4>Contact</h4></a>
      </li>
    </ul>
  </div>
</nav> */}

<nav id="navbar-example2" className="navbar navbar-expand-lg ">
  <a className="navbar-brand" href="#"><h4>Portfolio</h4></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#About"><h4>About</h4></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Project"><h4>Projects</h4></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Contact"><h4>Contact</h4></a>
      </li>
    </ul>
  </div>
</nav>

</>
  );
};

export default header;
