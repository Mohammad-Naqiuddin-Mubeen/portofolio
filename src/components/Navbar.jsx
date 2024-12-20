import { React } from "react";
const Navbar = ({ data }) => {
  const linksList = ["HOME", "RESUME", "PROJECTS"];
  return (
    <div className="navbar" id="nav">
      <div className="logoContainer">
        <a href="/portofolio/">
          <h1 className="logo">MUBEEN</h1>
        </a>
      </div>
      <div className="linksContainer">
        {linksList.map((links, index) => {
          if (links === "RESUME") {
            return (
              <div className="links" key={index}>
                <a
                  href="Naqiuddin Mubeen.pdf"
                  download="Naqiuddin Mubeen.pdf"
                  className="links-btn"
                >
                  {links}
                </a>
              </div>
            );
          } else if (links === "HOME") {
            return (
              <div className="links" key={index}>
                <a href="/portofolio/" className="links-btn">
                  {links}
                </a>
              </div>
            );
          } else {
            return (
              <div className="links" key={index}>
                <button className="links-btn" onClick={() => data(links)}>
                  {links}
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Navbar;
