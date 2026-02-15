import "./sidebar.styles.scss";
import "./sidebar.menu.scss";
import LogoA from "../../assets/Vector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = ({ onNavigate, currentPage }) => {
  const [menu, setMenu] = useState(0);

  let menuListClass = ["unset"];
  let svgListClass = ["ham hamRotate ham8 "];
  if (menu) {
    menuListClass.push(" open");
    svgListClass.push(" active");
  }

  const handleNav = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMenu(false);
  };

  const isActive = (page) => currentPage === page ? "active" : "";

  return (
    <>
      <div className="nav-bar">
        <button className="logo-small" onClick={() => handleNav("home")} style={{ cursor: "pointer", background: "none", border: "none" }}>
          <img src={LogoA} alt="logo" />
        </button>
        <nav>
          <button className={isActive("home")} onClick={() => handleNav("home")} style={{ cursor: "pointer", background: "none", border: "none" }}>
            <FontAwesomeIcon icon={faHome} />
          </button>
          <button
            className={`about-link ${isActive("about")}`}
            onClick={() => handleNav("about")}
            style={{ cursor: "pointer", background: "none", border: "none" }}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button
            className={`contact-link ${isActive("projects")}`}
            onClick={() => handleNav("projects")}
            style={{ cursor: "pointer", background: "none", border: "none" }}
          >
            <FontAwesomeIcon icon={faFolderOpen} />
          </button>
          <button
            className={`contact-link ${isActive("contact")}`}
            onClick={() => handleNav("contact")}
            style={{ cursor: "pointer", background: "none", border: "none" }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </nav>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://t.me/spaghetttti">
              <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/spaghetttti/"
            >
              <FontAwesomeIcon icon={faGithubSquare} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
      <nav className="nav-bar-mobile">
        <button className="logo-small" onClick={() => handleNav("home")} style={{ cursor: "pointer", background: "none", border: "none" }}>
          <img src={LogoA} alt="logo" />
        </button>
        <div className="menu-icon">
          <svg
            className={svgListClass}
            viewBox="0 0 100 100"
            width="80"
            onClick={() => setMenu(!menu)}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
            />
          </svg>
        </div>
        <div className={menuListClass.join(" ")}>
          <button onClick={() => handleNav("home")} style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", font: "inherit" }}>
            Home
          </button>
          <button onClick={() => handleNav("about")} style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", font: "inherit" }}>
            About
          </button>
          <button onClick={() => handleNav("projects")} style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", font: "inherit" }}>
            Projects
          </button>
          <button onClick={() => handleNav("contact")} style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", font: "inherit" }}>
            Contact me
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
