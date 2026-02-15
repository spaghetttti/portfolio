import { useState, useEffect } from "react";
import AnimatedLetters from "../../components/animated-letters/animated-letter.component";
import "./about.styles.scss";
// import loader from '../../components/loader/loader.component'
import Cube1 from "../../components/cube/cube1.component";
// import DownloadFiles from "../../components/download-files/download-files.component";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const AnimateHover = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(AnimateHover);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Software Engineer with 4+ years of experience in full-stack development, 
            building scalable systems and user-focused applications across telecommunications, 
            sports, travel, and enterprise domains.
          </p>
          <p>
            Currently working as a Backend/DevSecOps Engineer at Orange in Paris, 
            delivering high-availability middleware systems handling millions of daily requests. 
            I specialize in architecting modern solutions, building CI/CD pipelines, and 
            leading teams to develop automation tools and migrate legacy applications.
          </p>
          <p>
            My expertise spans full-stack development with React, Next.js, Angular, 
            Spring Boot, Node.js, and Django, combined with DevOps practices using 
            Docker, AWS, and CI/CD automation. I'm passionate about optimizing performance, 
            enhancing security, and creating seamless user experiences from design to deployment.
          </p>

          {/* <DownloadFiles /> */}
        </div>
        <Cube1 />
      </div>
    </>
  );
};

export default About;
