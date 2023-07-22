// import { AiFillFileText } from "react-icons/ai";

import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import realProfile from "../assets/img/profile1.webp";
import hoverProfile from "../assets/img/profilehover.webp";
// import CVDoc from "../assets/download/CV.pdf";
import Hi from "../assets/img/Hi.gif";

import CV from "../assets/Resume.pdf";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./Home.css";

function Home() {
  function setAvatarReal() {
    setImage(hoverProfile);
  }

  function setAvatarAnimation() {
    setImage(realProfile);
  }
  const [image, setImage] = useState(realProfile);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Aniket - Home</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="home-wrapper">
        <div className="home-left animate__animated animate__fadeInLeft">
          <h3>
            Hi there <img width="35" src={Hi} alt="Hi" />, my name is
          </h3>
          <h2>
            <span className="name-hover">Aniket</span>
            <br />
            <span className="name-hover">Bagul</span>
          </h2>
          <a href={CV} target="_blank" className="btn-download text-center">
            Download CV
          </a>
          {/* <AiFillFileText /> */}
          {/* &nbsp;&nbsp;Hire Me */}
        </div>
        <div className="home-right animate__animated animate__fadeIn animate__slower">
          <img
            className="home-image"
            src={image}
            onMouseOver={setAvatarReal}
            onMouseOut={setAvatarAnimation}
            alt="Avatar"
          />
        </div>
      </Container>
    </>
  );
}

export default Home;
