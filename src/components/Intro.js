import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
//import './Intro.css';

function Intro() {
  const [activeKey, setActiveKey] = useState("personal"); // Initial active tab

  const handleSelect = (key, event) => {
    if (event) {
      event.preventDefault(); // Prevent default behavior if event is defined
    }
    setActiveKey(key);
  };

  return (
    <div className="about" id="About">
      <h2 className="AMHeading">
        {" "}
        <i class="fa-regular fa-face-smile"></i> About Me
      </h2>
      <br />
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a
            className={`nav-link personal-tab ${
              activeKey === "personal" ? "active" : ""
            }`}
            id="personal-tab"
            data-toggle="tab"
            href="#personal"
            role="tab"
            aria-controls="personal"
            aria-selected={activeKey === "personal"}
            onClick={(event) => handleSelect("personal", event)}
          >
            <b>
              <h5>Personal Info</h5>{" "}
            </b>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link qualifications-tab ${
              activeKey === "qualifications" ? "active" : ""
            }`}
            id="qualifications-tab"
            data-toggle="tab"
            href="#qualifications"
            role="tab"
            aria-controls="qualifications"
            aria-selected={activeKey === "qualifications"}
            onClick={(event) => handleSelect("qualifications", event)}
          >
            <b>
              <h5>Qualifications</h5>
            </b>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link skills-tab ${
              activeKey === "skills" ? "active" : ""
            }`}
            id="skills-tab"
            data-toggle="tab"
            href="#skills"
            role="tab"
            aria-controls="skills"
            aria-selected={activeKey === "skills"}
            onClick={(event) => handleSelect("skills", event)}
          >
            <b>
              <h5>Skills</h5>
            </b>
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className={`tab-pane fade ${
            activeKey === "personal" ? "show active" : ""
          }`}
          id="personal"
          role="tabpanel"
          aria-labelledby="personal-tab"
        >
          <p className="PersonalInfodes ">
            ~ Budding Enthisiatic WebDeveloper,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Passionate in Full-stack Development
          </p>
          <br />
          {/* Personal Info content */}
          <div class="row">
            <div class="col">
              <div class="contact-info ">
                <div class="info-label">
                  <h5>
                    <i class="fa-solid fa-user"></i> Saloni Bisen
                  </h5>
                </div>
              </div>
              <br />
              <div class="contact-info">
                <div class="info-label">
                  <h5>
                    <i class="fa-solid fa-envelope"></i>salonibisen411@gmail.com
                  </h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="contact-info">
                <div class="info-label">
                  <h5>
                    {" "}
                    <i class="fa-solid fa-phone"></i> 7020830200
                  </h5>
                </div>
                {/* <div class="info-value">7020830200</div> */}
              </div>
              <br />
              <div class="contact-info">
                <div class="info-label">
                  <h5>
                    {" "}
                    <i class="fa-solid fa-house"></i> Nagpur, Maharashtra
                  </h5>
                </div>
              </div>
            </div>

            <div class="language">
              <div class="info-label">
                <h5>Language Known</h5>
              </div>

              <p>English, Hindi, Marathi</p>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeKey === "qualifications" ? "show active" : ""
          }`}
          id="qualifications"
          role="tabpanel"
          aria-labelledby="qualifications-tab"
        >
          {/* Qualifications content */}
          <div className="qualification-animation">
            <h3 className="education-title">
              <i class="fa-solid fa-graduation-cap"></i>{" "}
              {/* Font Awesome icon */}
              Education
            </h3>
            
            <ul>
              <li>
                <p>
                  <h5>
                    <b>Cummins College of Engineering</b>
                  </h5>{" "}
                  Bachlor of Technology
                  <br />
                  <i class="fa-solid fa-calendar-days"></i> 2022-2025{" "}
                  {/* Year */}
                </p>
              </li>
              <li>
                <h5>
                  <b>Ira International School</b>
                </h5>{" "}
                {/* Title for secondary school */}
                <p>
                  Higher secondary Education
                  <br /> {/* School name */}
                  <i class="fa-solid fa-calendar-days"></i> 2020-2021{" "}
                  {/* Year */}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeKey === "skills" ? "show active" : ""
          }`}
          id="skills"
          role="tabpanel"
          aria-labelledby="skills-tab"
        >
          {/* Skills content */}

          <p className="skillsThought">Tools I use Everyday!</p>

          {/* <div className="skills grid">
            <div className="skillsdata">
              <div className="skillstitle">
                <h4 className="skillsname ">Java</h4>
                <span className="skillnumber ">60%</span>
              </div>

              <div className="skillsbar">
                <span className="skillspercentage java" style={{'--percentage': '60%'}}></span>
              </div>
            </div>

            <div className="skillsdata">
              <div className="skillstitle">
                <h4 className="skillsname ">ReactJs</h4>
                <span className="skillnumber ">50%</span>
              </div>

              <div className="skillsbar">
                <span className="skillspercentage Reactjs "style={{'--percentage': '50%' }}></span>
              </div>
            </div>

            <div className="skillsdata">
              <div className="skillstitle">
                <h4 className="skillsname ">Express</h4>
                <span className="skillnumber ">70%</span>
              </div>

              <div className="skillsbar">
                <span className="skillspercentage Express " style={{ '--percentage': '70%' }}></span>
              </div>
            </div>

            <div className="skillsdata">
              <div className="skillstitle">
                <h4 className="skillsname ">NodeJS</h4>
                <span className="skillnumber ">80%</span>
              </div>

              <div className="skillsbar">
                <span className="skillspercentage NodeJS" style={{ '--percentage': '80%' }}></span>
              </div>
            </div>

            <div className="skillsdata">
              <div className="skillstitle">
                <h4 className="skillsname">MongoDB</h4>
                <span className="skillnumber ">90%</span>
              </div>

              <div className="skillsbar">
                <span className="skillspercentage MongoDB" style={{ '--percentage': '90%' }}></span>
              </div>
            </div>

            <div className="skillsdata">
              <div className="skillstitle">
                <h4 className="skillsname ">CSS</h4>
                <span className="skillnumber ">80%</span>
              </div>

              <div className="skillsbar">
                <span className="skillspercentage CSS" style={{ '--percentage': '80%' }}></span>
              </div>
        </div>
       
          </div>
           */}


<div class="container">
        <div class="skill-box">
            <span class="title">HTML</span>

            <div class="skill-bar">
                <span class="skill-per html">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>

        <div class="skill-box">
            <span class="title">CSS</span>

            <div class="skill-bar">
                <span class="skill-per css">
                    <span class="tooltip">70%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">JavaScript</span>

            <div class="skill-bar">
                <span class="skill-per javascript">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">MongoDB</span>

            <div class="skill-bar">
                <span class="skill-per MongoDB">
                    <span class="tooltip">60%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">Express</span>

            <div class="skill-bar">
                <span class="skill-per Express">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">ReactJS</span>

            <div class="skill-bar">
                <span class="skill-per ReactJs">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">NodeJS</span>

            <div class="skill-bar">
                <span class="skill-per nodejs">
                    <span class="tooltip">30%</span>
                </span>
            </div>
        </div>
    </div>

        </div>
      </div> 
    </div>
  );
};

export default Intro;
