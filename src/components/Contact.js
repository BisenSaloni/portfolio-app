import { Container } from "react-bootstrap";
import React from "react";
import Form from 'react-bootstrap/Form';

const contact = () => {
  return (
    <>
      <Container className="Contact" id="Contact">
        <div class="row">
          <div class="col">
            <h1 className="contactTitle text-white">Get In Touch</h1>
            <div className="contact_container grid">
              <h2 className="contactSubTitle text-white">Let's make something Better Together!</h2>
              <p className="contactDetails text-white">Dont like Forms? Send me Email.</p>
            </div>
          </div>
          <div class="col">
            <div className="contactForm">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={{ color: 'white' }} >Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label style={{ color: 'white' }}>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </div>
          <button type="button" class="btn btn-success"  style={{ marginLeft: '50px' }}>Submit</button>
          </div>
        </div>
      </Container>
    </>
  );
};
export default contact;
