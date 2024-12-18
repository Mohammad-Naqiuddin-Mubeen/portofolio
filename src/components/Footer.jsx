import { React } from "react";

const Footer = ({ sectionData }) => {
  return (
    <div className="footerContainer">
      <div className="footer-copyright">
        <p>&copy; 2024 Mohammad Naqiuddin Mubeen. All Rights Reserved.</p>
      </div>
      <div className="footer-contact">
        <h1 className="footer-name-title">ABOUT</h1>
        <p>Email: naqiuddin.mubeen@gmail.com</p>
        <p>Phone: +91 866 907 2727</p>
      </div>
      <div className="footer-nav">
        <h1>LINKS</h1>
        <a href="../Naqiuddin Mubeen.pdf" download={"Naqiuddin Mubeen.pdf"}>
          Resume
        </a>
        <button onClick={() => sectionData("PROJECTS")}>Projects</button>
      </div>
    </div>
  );
};

export default Footer;
