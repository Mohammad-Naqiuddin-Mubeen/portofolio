import { React } from "react";

const ProjectsSection = ({ scrollFunction }) => {
  return (
    <>
      <div className="projectsContainer">
        <div className="sectionName">
          <h1>PROJECTS</h1>
        </div>
        <div className="projectsBox">
          <div className="project1">
            <div className="description">
              <h1>E-COMMERCE APPLICATION</h1>
              <h3>
                <span>Frontend Technologies:</span>HTML, CSS, JavaScript, React,
                Redux, Axios
              </h3>
              <h3>
                <span>Backend Technologies:</span>Node.js, Express.js, MongoDB,
                Rest API, JWT
              </h3>
              <h2>Role: Full-Stack Application Developer</h2>
              <ul>
                <li>
                  Developed a full-stack e-commerce web application using the
                  MERN stack (MongoDB, Express.js, React, Node.js), enabling
                  users to browse, add items to the cart, and modify product
                  quantities.
                </li>
                <li>
                  Implemented product search, filtering, and sorting features to
                  enhance user experience and optimize performance.
                </li>
                <li>
                  Designed and developed a responsive, user-friendly UI with
                  React.js, Using Bootstrap and Material-UI for modern and
                  scalable front-end design.
                </li>
                <li>
                  Built and optimized cart functionality with features like
                  add-to-cart, remove, and quantity update to enhance user
                  interaction.
                </li>
                <li>
                  Utilized CRUD operations (Create, Read, Update, Delete) for
                  managing user and product data efficiently across the
                  application.
                </li>
                <li>
                  Managed state effectively using Redux to ensure optimal
                  performance and smooth data flow across the application.
                </li>
                <li>
                  Developed a secure, scalable RESTful API using Express.js and
                  Node.js, ensuring efficient server-side communication and data
                  handling.
                </li>
                <li>
                  Integrated MongoDB for robust, scalable data storage and
                  management.
                </li>
                <li>
                  Leveraged Axios for optimized and efficient HTTP requests,
                  ensuring seamless data fetching between front-end and
                  back-end.
                </li>
              </ul>
            </div>
          </div>
          <div className="project2">
            <div className="description">
              <h1>m-Flix MOVIE DATABSE AND INFO</h1>
              <h3>
                <span>Frontend Technologies:</span>HTML, CSS, JavaScript, React,
                Redux, Axios
              </h3>
              <h3>
                <span>Backend Technologies:</span>Node.js, Express.js, MongoDB,
                Rest API, JWT
              </h3>
              <h2>Role: Full-Stack Application Developer</h2>
              <ul>
                <li>
                  Designed and implemented search, filtering, and sorting
                  functionality for movies, allowing users to browse movies by
                  title, genre, rating, and more.
                </li>
                <li>
                  Managed state efficiently using Redux to handle dynamic data,
                  such as movie details, user preferences, and ratings across
                  the application.
                </li>
                <li>
                  Built a responsive, user-friendly UI with React.js, leveraging
                  Material-UI for a modern, consistent design and ensuring
                  mobile-first compatibility.
                </li>
                <li>
                  Integrated MongoDB Atlas, using its inbuilt m-Flix movie
                  dataset, to store and manage movie data and user-generated
                  content like reviews and ratings.
                </li>
                <li>
                  Utilized Axios for optimized HTTP requests to fetch movie data
                  and interact with external APIs, ensuring real-time updates
                  and seamless user experience.
                </li>
                <li>
                  Developed the backend using Node.js, Express.js, and a RESTful
                  API, ensuring efficient data handling, user management, and
                  smooth communication between front-end and back-end.
                </li>
              </ul>
            </div>
          </div>
          <div className="project3">
            <div className="description">
              <h1>LOGIN FORM WITH AUTHORIZATION</h1>
              <h3>
                <span>Frontend Technologies:</span>HTML, CSS, JavaScript, React,
                Axios
              </h3>
              <h3>
                <span>Backend Technologies:</span>Node.js, Express.js, MongoDB,
                Rest API, JWT
              </h3>
              <h2>Role: Full-Stack Application Developer</h2>
              <ul>
                <li>
                  Developed a robust backend using Node.js, Express.js, MongoDB,
                  and JSON Web Token (JWT) for secure user authentication and
                  data handling.
                </li>
                <li>
                  Implemented user authentication with JWT tokens for secure
                  login and session management.
                </li>
                <li>
                  Enabled user registration and stored user data in MongoDB.
                </li>
                <li>
                  Utilized Axios for efficient HTTP requests to communicate with
                  the frontend.
                </li>
                <li>
                  After login, redirects to Protected Route using Auth API.
                </li>
                <li>Utilized JWT as Middleware for Authorization.</li>
                <li>
                  Used dotenv for managing sensitive information and environment
                  variables.
                </li>
              </ul>
            </div>
          </div>
          <div className="see-more">
            <a
              href="https://github.com/Mohammad-Naqiuddin-Mubeen?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              WANT TO SEE MORE
            </a>
            <i className="fa-solid fa-angles-right"></i>
          </div>
        </div>
        {/* <div
          className="explore-work"
          onClick={() => scrollFunction("CONTACT ME")}
        >
          <p>
            CONTACT ME <i className="fa-solid fa-angles-down"></i>
          </p>
        </div> */}
      </div>
    </>
  );
};

export default ProjectsSection;
