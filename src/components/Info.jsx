import { React, useEffect, useRef } from "react";
import ProjectsSection from "./ProjectsSection";
import SkillSection from "./SkillSection";
import ContactSection from "./ContactSection";

const Info = ({ parent }) => {
  const skillRef = useRef();
  const projectRef = useRef();
  const infoRef = useRef();
  const contactRef = useRef();
  const handleScrollTo = (ref) => {
    switch (ref) {
      case "skill":
        skillRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "PROJECTS":
        projectRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "CONTACT ME":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  useEffect(() => {
    handleScrollTo(parent);
  }, [parent]);

  return (
    <div className="mainContainer">
      <section className="mobile-info"></section>
      <section className="infoSection" ref={infoRef}></section>
      <section className="section1">
        <div className="mobile-info-container">
          <h1>Hi, I'm</h1>
          <span>Mohammad Naqiuddin Mubeen</span>
          <p>Creative Developer & Web Expert</p>
        </div>
        <div className="name">
          <div className="nameBox">
            <h1>
              CREATIVE <span>DEVELOPER</span>
            </h1>
            <h2>Mohammad Naqiuddin Mubeen / Web Developer</h2>
          </div>
        </div>
        <div className="infoContainer">
          <div className="comment">
            <p>
              <span>//</span> SCALABLE WEB SOLUTIONS.
            </p>
          </div>
          <div className="info">
            <p>
              Full-stack developer driven by a passion for building efficient,
              secure applications. Expertise in web development, with focus on
              performance and security, pushing boundries in code.
            </p>
          </div>
          <div className="explore-work" onClick={() => handleScrollTo("skill")}>
            <p>
              EXPLORE MY SKILLS <i className="fa-solid fa-angles-down"></i>
            </p>
          </div>
        </div>
      </section>

      <section className="skillSection" ref={skillRef}>
        <SkillSection scrollFunction={handleScrollTo} />
      </section>
      <section className="projectSection" ref={projectRef}>
        <ProjectsSection scrollFunction={handleScrollTo} />
      </section>
      {/* <section className="contactSection" ref={contactRef}>
        <ContactSection />
      </section> */}
    </div>
  );
};

export default Info;
