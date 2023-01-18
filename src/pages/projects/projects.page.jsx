import { useState, useEffect } from "react";

import AnimatedLetters from "../../components/animated-letters/animated-letter.component";
import Loader from "../../components/loader/loader.component";
import "./projects.styles.scss";

import UGL from "../../assets/ugl.png";
import CRWN from "../../assets/crwn.png";
import ContactApp from '../../assets/contact-app.png';

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const AnimateHover = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(AnimateHover);
  }, []);
  return (
    <>
      <div className="projects-page container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["P", "r", "o", "j", "e", "c", "t ", "s"]}
              idx={15}
            />
          </h1>
          <p>
            Here are some of my recent projects, if you want to check out all of
            them, visit my{" "}
            <a className="intext-link" href="https://github.com/spaghetttti/">
              github
            </a>
          </p>
        </div>
        <div className="projects-list">
          <div className="project">
            <a href="https://ugltruck.com/">
              <div className="img-overlay "><p className="fade-in-details">Visit</p></div>
              <img src={UGL} alt="screenshot of webpage" />
            </a>
            <p className="desc">
              <h6 className="title">UGL Truck Sales official website</h6>
              Commercial truck company based in Illinois, USA
              <br />
              Tech-stack: React | MongoDB | Express | Node.js
            </p>
          </div>
          <div className="project">
            <a href="https://spaghetttti.github.io/habibi-shop/">
              <div className="img-overlay"><p className="fade-in-details">Visit</p></div>
              <img src={CRWN} alt="screenshot of webpage" />
            </a>
            <p className="desc">
              <h6 className="title">Online Shop page</h6>
              Clothing e-commerce platform <br />
              Tech-stack: React & Redux | Firebase authentication<br />
            </p>
          </div>
          <div className="project">
            <a href="https://glittery-gumdrop-6cacd3.netlify.app/">
              <div className="img-overlay"><p className="fade-in-details">Visit</p></div>
              <img src={ContactApp} alt="screenshot of webpage" />
            </a>
            <p className="desc">
              <h6 className="title">Contact App</h6>
              Manage your contacts with this app <br />
              Tech-stack: React & Redux Toolkit | React Form Hook | Tailwind Css
            </p>
          </div>
        </div>
      </div>
      <Loader />
    </>
  );
};

export default Projects;
