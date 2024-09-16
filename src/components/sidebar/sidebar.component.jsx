import "./sidebar.styles.scss";
import "./sidebar.menu.scss";
import { Link, NavLink } from "react-router-dom";
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

const Sidebar = () => {
  const [menu, setMenu] = useState(0);

  let menuListClass = ["unset"];
  let svgListClass = ["ham hamRotate ham8 "];
  if (menu) {
    menuListClass.push(" open");
    svgListClass.push(" active");
  } else {
  }

  return (
    <>
      <div className="nav-bar">
        <Link className="logo-small" to="/">
          <img src={LogoA} alt="logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/projects"
          >
            <FontAwesomeIcon icon={faFolderOpen} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </NavLink>
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
        <Link className="logo-small" to="/">
          <img src={LogoA} alt="logo" />
        </Link>
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
          <Link onClick={() => setMenu(!menu)} to="/">
            Home
          </Link>
          <Link onClick={() => setMenu(!menu)} to="/about">
            About
          </Link>
          <Link onClick={() => setMenu(!menu)} to="/projects">
            Projects
          </Link>
          <Link onClick={() => setMenu(!menu)} to="/contact">
            Contact me
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
