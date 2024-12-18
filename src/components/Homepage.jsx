import { React, useEffect, useRef, useState } from "react";
import "../styles/Homepage.css";
import Navbar from "./Navbar";
import Info from "./Info";
import Footer from "./Footer";

const Homepage = () => {
  const [data, setData] = useState("");
  const boxRef = useRef();
  const handleSection = (value) => {
    setData(value);
    setTimeout(() => {
      setData("");
    }, 100);
  };

  useEffect(() => {
    const overlay = document.querySelector(".overlay");
    const box = document.querySelector(".box");
    box.addEventListener("scroll", () => {
      if (box.scrollTop > 50) {
        overlay.classList.add("overlay-blur");
      } else {
        overlay.classList.remove("overlay-blur");
      }
    });
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <div className="box" ref={boxRef}>
        <nav className="navBar">
          <Navbar data={handleSection}></Navbar>
        </nav>
        <main>
          <Info parent={data}></Info>
        </main>
        <footer>
          <Footer sectionData={handleSection} />
        </footer>
      </div>
    </>
  );
};

export default Homepage;
