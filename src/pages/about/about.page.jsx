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
    }, 4000);
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
            Experienced Full-Stack Developer | JavaScript/TypeScript/Java |
            AWS/Docker | React.js/Node.js/Next.js |
            Git/MySQL/PostgreSQL/MongoDB/Firebase
          </p>
          <p>
            I am a skilled Full-Stack Developer with proficiency in JavaScript,
            TypeScript, and Java, alongside a strong technical background in
            React.js, Node.js, Next.js, Docker, and AWS. My expertise covers
            cloud services, Git-based version control, and database management,
            including MySQL, PostgreSQL, MongoDB, and Firebase. I also have
            experience implementing unit tests with Jest and Mocha.
          </p>
          <p>
            With a solid track record in developing scalable, high-performance
            web applications, I’m eager to join a team working on innovative
            solutions. I bring dedication, adaptability, and a passion for
            tackling complex problems in the tech industry. If you’re looking
            for a committed developer to help bring your projects to life, let’s
            collaborate and build something remarkable together.
          </p>

          {/* <DownloadFiles /> */}
        </div>
        <Cube1 />
      </div>
    </>
  );
};

export default About;
