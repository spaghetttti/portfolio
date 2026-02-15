import { useState } from "react";
import "./cube.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNode,
  faDocker,
  faReact,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { SiTypescript } from "react-icons/si";

const Cube1 = () => {
  const [show, setShow] = useState("front");
  const [count, setCount] = useState(0);

  const turnCube = () => {
    const sides = ["top", "right", "bottom", "left", "back", "front"];

    setShow(sides[count - Math.trunc(count / 6) * 6]);
    setCount(count + 1);
  };

  setTimeout(() => {
    turnCube();
  }, 2300);

  return (
    <>
      <div className="scene">
        <div className="press-btn" >
          <div className={`cube show-${show}`}>
            <div
              className={`cube__face cube__face--front ${
                count % 6 ? "active" : ""
              }`}
              style={{ background: "rgba(255, 255, 255, 0.4)" }}
            >
              <FontAwesomeIcon icon={faReact} style={{ fontSize: '100px' }} />
            </div>
            <div
              className="cube__face cube__face--back"
              style={{ background: "rgba(255, 255, 255, 0.4)" }}
            >
              <FontAwesomeIcon icon={faJava}  style={{ fontSize: '100px' }} />
            </div>
            <div
              className="cube__face cube__face--right"
              style={{ background: "rgba(255, 255, 255, 0.4)" }}
            >
              <FontAwesomeIcon icon={faPython} style={{ fontSize: '100px' }} />
            </div>
            <div
              className="cube__face cube__face--left"
              style={{ background: "rgba(255, 255, 255, 0.4)" }}
            >
              <SiTypescript style={{ fontSize: '100px', color: '#3178C6' }} />
            </div>
            <div
              className="cube__face cube__face--top"
              style={{ background: "rgba(255, 255, 255, 0.4)" }}
            >
              <FontAwesomeIcon icon={faDocker} style={{ fontSize: '100px', color: '#2496ED' }} />
            </div>
            <div
              className="cube__face cube__face--bottom"
              style={{ background: "rgba(255, 255, 255, 0.4)" }}
            >
              <FontAwesomeIcon icon={faNode} style={{ fontSize: '100px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cube1;
