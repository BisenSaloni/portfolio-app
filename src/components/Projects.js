import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import zomato from "../assets/download.jpeg";
import train from "../assets/download1.jpeg";
import heart from "../assets/download2.jpeg";

import React from "react";
import { Container } from "react-bootstrap";

const project = () => {
  return (
    <>
      {/* <Container className="Project">
      <div className="ProjectTitle">Browse My Recent<br/>Projects</div> */}
        {/* <div class="container text-center">
  <div class="row">
    <div class="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=" " />
      <Card.Body>
        <Card.Title>E-Commerce Website</Card.Title>
        <Card.Text>
          This project deals with developing website with Online Product Sale
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Ticket Booking Website</Card.Title>
        <Card.Text>
        This project deals with Booking train,Flight,Bus Ticket Online
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Heart Disease Prediction</Card.Title>
        <Card.Text>
          Prediction of Heart Disease using Data Sets
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
</div> */} 
{/* <h2 className="title text-white ">Projects</h2> */}

{/* <article class="card">
    <div class="temporary_text">
    <img src={zomato} alt="zomato" className="zomato" />
    </div>
<div class="card_content">
    <span class="card_title">E-Commerce Website</span>
        <span class="card_subtitle"> This project deals with developing website with Online Product Sale</span>
        <p class="card_description">t dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
</div>
</article>
<article class="card">
    <div class="temporary_text">
    <img src={train} alt="train" className="train" />
    </div>
<div class="card_content">
    <span class="card_title">Ticket Booking Website</span>
        <span class="card_subtitle">This project deals with Booking train,Flight,Bus Ticket Online</span>
        <p class="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
</div>
</article>
<article class="card">
    <div class="temporary_text">
    <img src={heart} alt="heart" className="heart" />
    </div>
<div class="card_content">
    <span class="card_title">Heart Disease Prediction</span>
        <span class="card_subtitle">Prediction of Heart Disease using Data Sets</span>
        <p class="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
</div>
</article>
      </Container>
    </>
  );
}; */}
<Container className="Project"id="Project">
<div className="SubTitle text-center text-white">Browse My Recent</div>

<div className="miniSubTitle text-center text-white"><b>Projects</b></div>
        <br/>
        <div className="card-container">
          <article className="card">
            <div className="temporary_text">
              <img src={zomato} alt="zomato" className="zomato" />
            </div>
            <div className="card_content">
              <span className="card_title">E-Commerce Website</span>
              <span className="card_subtitle">This project deals with developing website with Online Product Sale</span>
              <p className="card_description">t dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
            </div>
          </article>
          <article className="card">
            <div className="temporary_text">
              <img src={train} alt="train" className="train" />
            </div>
            <div className="card_content">
              <span className="card_title">Ticket Booking Website</span>
              <span className="card_subtitle">This project deals with Booking train,Flight,Bus Ticket Online</span>
              <p className="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
            </div>
          </article>
          <article className="card">
            <div className="temporary_text">
              <img src={heart} alt="heart" className="heart" />
            </div>
            <div className="card_content">
              <span className="card_title">Heart Disease Prediction</span>
              <span className="card_subtitle">Prediction of Heart Disease using Data Sets</span>
              <p className="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
            </div>
          </article>
        </div>
      </Container>
    </>
  );
};

export default project;
