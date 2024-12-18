import { React } from "react";

const SkillSection = ({ scrollFunction }) => {
  const iconList = [
    {
      name: "JAVASCRIPT",
      icon: <i className="fa-brands fa-js customIcons"></i>,
    },
    {
      name: "HTML 5",
      icon: <i className="fa-brands fa-html5 customIcons"></i>,
    },
    {
      name: "CSS 3",
      icon: <i className="fa-brands fa-css customIcons"></i>,
    },
    {
      name: "JAVA",
      icon: <i className="fa-brands fa-java customIcons"></i>,
    },
    {
      name: "MySQL",
      icon: <i className="fa-solid fa-database customIcons"></i>,
    },
    {
      name: "REACT.JS",
      icon: <i className="fa-brands fa-react customIcons"></i>,
    },
    {
      name: "NODE.JS",
      icon: <i className="fa-brands fa-node customIcons"></i>,
    },
    {
      name: "EXPRESS.JS",
      icon: <h1 className="customIcons">Ex</h1>,
    },
    {
      name: "JWT",
      icon: <h1 id="customIconsText">jwt</h1>,
    },
    {
      name: "BOOTSTRAP",
      icon: <i className="fa-brands fa-bootstrap customIcons"></i>,
    },
    {
      name: "GIT",
      icon: <i className="fa-brands fa-git customIcons"></i>,
    },
    {
      name: "GITHUB",
      icon: <i className="fa-brands fa-github customIcons"></i>,
    },
    {
      name: "MONGODB",
      icon: <i className="fa-solid fa-cloud customIcons"></i>,
    },
    {
      name: "DOCKER",
      icon: <i className="fa-brands fa-docker customIcons"></i>,
    },
    {
      name: "JENKINS",
      icon: <i className="fa-brands fa-jenkins customIcons"></i>,
    },
    {
      name: "AWS",
      icon: <i className="fa-brands fa-aws customIcons"></i>,
    },
  ];
  return (
    <div className="skillsContainer">
      <div className="sectionName">
        <h1>SKILLS</h1>
      </div>
      <div className="textSkills">
        <p>
          I am a full-stack developer skilled in JavaScript (ES6+), HTML5, CSS3,
          Java, and MySQL. On the frontend, I specialize in React.js, Redux
          Toolkit, Handlebars, Axios, and dynamic web technologies like AJAX and
          jQuery. For backend development, I work with Express.js, Node.js, REST
          APIs, JWT, and bcryptjs for authentication and security. I am
          proficient in version control using Git and GitHub, and databases such
          as MongoDB and MySQL. I use CSS frameworks like Bootstrap and React
          Material, and am experienced with Docker, Jenkins, and AWS EC2 for
          deployment. Additionally, I leverage tools like Postman and MongoDB
          Atlas for API testing and database management.
        </p>
      </div>
      <div className="skillIcons">
        {iconList.map((icon, index) => {
          return (
            <div className="iconElements" key={index}>
              <div className="icons">{icon.icon}</div>
              <p className="iconName">{icon.name}</p>
            </div>
          );
        })}
      </div>
      <div
        className="projectExplore"
        onClick={() => scrollFunction("PROJECTS")}
      >
        <p>
          EXPLORE MY PROJECTS <i className="fa-solid fa-angles-down"></i>
        </p>
      </div>
    </div>
  );
};

export default SkillSection;
