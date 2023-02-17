import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";

import "./About.css";

function About() {


  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Aniket - About</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>About</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>02</strong>
          </h4>
        </div>
        <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
          <p>
          I'm a Fresher(Engineering 2021 Batch) and a passionate Full Stack Developer cerified in both Front- End and Back- End technologies. I have developed a couple
                    of high-quality and exceptional projects using the MERN stack and all the mordern tools and techniques. <br /> Looking for job opportunities and I'm eager to join
                    a good company to showcase my skills, gain Experience, and excel as a Developer
          </p>
        </div>
      </Container>
    </>
  );
}

export default About;
