import React from "react";
import { Container } from "react-bootstrap";

const intro = () => {
  return (
    <>
      <Container className="Intro">
        <h2 className="titleAbout text-white">Skills</h2>
        <div className="Introdata ">
          <p className="description text-white">
            Budding Enthisiatic WebDeveloper, Passionate in Full-stack
            Development
          </p>
        
        <div className="skills grid">
          <div className="skillsdata">
            <div className="skillstitle">
              <h3 className="skillsname text-white">Java</h3>
              <span className="skillnumber text-white">60%</span>
            </div>

            <div className="skillsbar">
                <span className="skillspercentage java"></span>
            </div>
          </div>


          <div className="skillsdata">
            <div className="skillstitle">
              <h3 className="skillsname text-white">ReactJs</h3>
              <span className="skillnumber text-white">50%</span>
            </div>

            <div className="skillsbar">
                <span className="skillspercentage Reactjs"></span>
            </div>
          </div>

          <div className="skillsdata">
            <div className="skillstitle">
              <h3 className="skillsname text-white">Express</h3>
              <span className="skillnumber text-white">70%</span>
            </div>

            <div className="skillsbar">
                <span className="skillspercentage"></span>
            </div>
          </div>

          <div className="skillsdata">
            <div className="skillstitle">
              <h3 className="skillsname text-white">MongoDB</h3>
              <span className="skillnumber text-white">50%</span>
            </div>

            <div className="skillsbar">
                <span className="skillspercentage"></span>
            </div>
          </div>


          <div className="skillsdata">
            <div className="skillstitle">
              <h4 className="skillsname text-white">CSS</h4>
              <span className="skillnumber text-white">80%</span>
            </div>

            <div className="skillsbar">
                <span className="skillspercentage"></span>
            </div>
          </div>

        </div>
        </div>
      </Container>
    </>
  );
};
export default intro;
