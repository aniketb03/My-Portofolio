import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="px-4">
        <div className="foot-left d-flex">
          <p>Aniket Bagul &copy; 2022</p>
        </div>
        <div className="foot-right d-flex">
          <a
            href="https://github.com/aniketb03"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="foot-icon" />
            &nbsp;&nbsp;GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-bagul-3508281b1/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="foot-icon" />
            &nbsp;&nbsp;Linkedin
          </a>
          <a
            href="https://twitter.com/AniketBagul18"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter className="foot-icon" />
            &nbsp;&nbsp;Twitter
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
