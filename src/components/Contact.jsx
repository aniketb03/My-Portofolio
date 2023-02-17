
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";


// toast.configue();

function Contact() {
    const form=useRef();

    const notify=()=>{

      toast.success('Message sent Succesfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        Transition:"zoom"
        });

    }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1i0f35p', 'template_g402yye', form.current, 'iuRLn2wFq3KYjrjY-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Aniket - Contact</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="contact-wrapper">
        <div className="contact-left animate__animated animate__zoomIn">
          <h3>Contact</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>05</strong>
          </h4>
        </div>

      <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name"/>
          <input type="email" name="email" placeholder="Your Email"/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>

          <p className="contact_msg" id="contact-msg"> </p>

          <button type="Submit" onClick={notify}>Send</button>
          < ToastContainer/>
      </form>
             
      </Container>
    </>
  );
}

export default Contact;
