import React from "react";
import profile from "../assets/profile (3).gif";
import { Link } from "react-scroll";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typewriter from "typewriter-effect";

const about = () => {
  return (
    <>
      <Container className="About">
        <div className="aboutcontent">
         <bold> <h1 className="name">Hello,I'm Saloni</h1></bold>
          <h2 className="introname text-white"><Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Frontend Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Backend Developer")
                  
                  .start();
              }}></Typewriter></h2>
          <Link>
          <button className="button">Hire Me
</button>
           </Link>
           <a href="" className="CV button">
            Download CV
          </a>
          
        </div> 
        <img src={profile} alt="profile" className="profile" />
      </Container>
    </>
  );
};
export default about;
