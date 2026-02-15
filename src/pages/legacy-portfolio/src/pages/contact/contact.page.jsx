import { useEffect, useState, useRef } from "react";
import AnimatedLetters from "../../components/animated-letters/animated-letter.component";
import "./contact.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    const AnimateHover = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(AnimateHover);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const subject = encodeURIComponent(formData.get("subject") || "Hello from your portfolio!");
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
    );
    window.open(`mailto:asil9802mum@gmail.com?subject=${subject}&body=${body}`, "_self");
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities or full/part time
            positions. However, if you have other request or question, don't
            hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={handleSubmit}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          <p>
            Asilbek Muminov,
            <br />
            Paris, France
            <br />
            Email: <span>asil9802mum@gmail.com</span>
            <br />
            <div className="list">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/asil-muminov/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/spaghetttti/"
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
