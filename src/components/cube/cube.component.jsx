import React from "react";

import "./cube.styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faNode,
    faSass,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'

class Cube extends React.Component {
  state = {
    show: "front",
    count: 0
  };
  getStyle = (face) => {
    const defaultBackground = {
      front: "rgba(255, 255, 255, 0.4)",
      right: "rgba(255, 255, 255, 0.4)",
      back: "rgba(255, 255, 255, 0.4)",
      left: "rgba(255, 255, 255, 0.4)",
      top: "rgba(255, 255, 255, 0.4)",
      bottom: "rgba(255, 255, 255, 0.4)",
    };
    if (this.props.customBackground) {
      return this.props.customBackground[face];
    } else {
      return defaultBackground[face];
    }
  };
  getFaces = () => {
    return {
      front: "Front",
      right: "Right",
      back: "Back",
      left: "Left",
      top: "Top",
      bottom: "Bottom",
    };
  };
  render() {
    setTimeout(() => {
      turnCube()
    }, 2300);
    const turnCube = () => {
      // const sides = ["front", "right", "back", "left", "top", "bottom"];
      const sides = ["top", "right", "bottom", "left", "back", "front"];
      
      // const random = Math.floor(Math.random() * sides.length);
      this.setState({
        show: sides[this.state.count - Math.trunc(this.state.count/6)*6],
      });
      this.setState({count: this.state.count + 1})
    };
    console.log(this.state)
    return (
      <>
        {/* <Button text={"Turn"} fn={turnCube} /> */}
        <div className="scene">
          <div className="press-btn" >
            <div className={`cube show-${this.state.show}`}>
              <div
                className="cube__face cube__face--front"
                style={{ background: this.getStyle("front") }}
              >
                 <FontAwesomeIcon icon={faReact} />
              </div>
              <div
                className="cube__face cube__face--back"
                style={{ background: this.getStyle("back") }}
              >
                <FontAwesomeIcon icon={faHtml5} />
              </div>
              <div
                className="cube__face cube__face--right"
                style={{ background: this.getStyle("right") }}
              >
                <FontAwesomeIcon icon={faSass} />
              </div>
              <div
                className="cube__face cube__face--left"
                style={{ background: this.getStyle("left") }}
              >
                <FontAwesomeIcon icon={faJsSquare} />
              </div>
              <div
                className="cube__face cube__face--top"
                style={{ background: this.getStyle("top") }}
              >
                <FontAwesomeIcon icon={faGitAlt} />
              </div>
              <div
                className="cube__face cube__face--bottom"
                style={{ background: this.getStyle("bottom") }}
              >
                <FontAwesomeIcon icon={faNode} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cube;
