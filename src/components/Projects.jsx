import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import "./Projects.css";
import Project1 from "../assets/img/Project1.png";
import Project2 from "../assets/img/Project2.png";
import Project3 from "../assets/img/Project3.png";
function Project() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Aniket - Project</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="projects-container">
        <div className="projects-title animate__animated animate__zoomIn">
          <h3>Projects</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>04</strong>
          </h4>
        </div>
        <div className="projects-wrapper animate__animated animate__fadeIn animate_slower my-4">
          <div className="row custom-margin-bottom">
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project1} alt="Project 1" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>Movie Trailer web app</h3>
                  <p>
                    Featuring responsive UI and features like Watching
                    Trailers,Like and Dislike movies,Rating for the movie, Add
                    movie and it's summary and more
                  </p>
                  <a
                    className="btn-website"
                    href="https://movie-banner-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/aniketb03/Movie-front-end"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project2} alt="Project-2" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>Blogit app</h3>
                  <p>
                    Responsive blog app with all CURD operations for
                    users,blogs,and important features such as
                    searching,filtering and tags for an amazing blogging
                    experience.
                  </p>
                  <a
                    className="btn-website"
                    href="https://visitblogit.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/aniketb03/blogit-front-end"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project3} alt="Project-3" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>Bulk Email app</h3>
                  <p>
                    Website for sending mail to different users, this website
                    offers users to send mail in Bulk using Nodemailer using
                    SMTP protocol.
                  </p>
                  <a
                    className="btn-website"
                    href="https://send-bulkemail.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/aniketb03/bulk-email-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Project;
