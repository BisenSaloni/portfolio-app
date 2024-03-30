import React from "react";
const footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="socialLinks">
            
            <a
              href="https://www.linkedin.com/in/saloni-bisen-037212231"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/BisenSaloni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <br />
         <h1> <div className="copyright">
            &copy; {new Date().getFullYear()} Saloni Bisen
          </div></h1>
        </div>
      </footer>
    </>
  );
};
export default footer;
