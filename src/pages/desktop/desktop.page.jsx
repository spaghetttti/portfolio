import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./desktop.styles.scss";

const Desktop = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const startMenuRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (startMenuRef.current && !startMenuRef.current.contains(event.target)) {
        setStartMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleIconDoubleClick = (app) => {
    if (app === "terminal") {
      navigate("/terminal");
    } else if (app === "legacy") {
      navigate("/legacy");
    } else if (app === "about") {
      navigate("/about");
    } else if (app === "projects") {
      navigate("/projects");
    } else if (app === "contact") {
      navigate("/contact");
    }
  };

  return (
    <div className="win98-desktop">
      {/* Desktop Icons */}
      <div className="desktop-icons">
        <div
          className="desktop-icon"
          onDoubleClick={() => handleIconDoubleClick("terminal")}
        >
          <div className="icon-image terminal-icon">
            <span>&gt;_</span>
          </div>
          <span className="icon-label">Terminal</span>
        </div>

        <div
          className="desktop-icon"
          onDoubleClick={() => handleIconDoubleClick("legacy")}
        >
          <div className="icon-image legacy-icon">
            <span>📄</span>
          </div>
          <span className="icon-label">Legacy Resume</span>
        </div>

        <div
          className="desktop-icon"
          onDoubleClick={() => handleIconDoubleClick("about")}
        >
          <div className="icon-image about-icon">
            <span>👤</span>
          </div>
          <span className="icon-label">About Me</span>
        </div>

        <div
          className="desktop-icon"
          onDoubleClick={() => handleIconDoubleClick("projects")}
        >
          <div className="icon-image folder-icon">
            <span>📁</span>
          </div>
          <span className="icon-label">Projects</span>
        </div>

        <div
          className="desktop-icon"
          onDoubleClick={() => handleIconDoubleClick("contact")}
        >
          <div className="icon-image contact-icon">
            <span>✉️</span>
          </div>
          <span className="icon-label">Contact</span>
        </div>
      </div>

      {/* Taskbar */}
      <div className="taskbar">
        <div className="start-section" ref={startMenuRef}>
          <button
            className={`start-button ${startMenuOpen ? "active" : ""}`}
            onClick={() => setStartMenuOpen(!startMenuOpen)}
          >
            <span className="windows-logo">🪟</span>
            <span>Start</span>
          </button>

          {/* Start Menu */}
          {startMenuOpen && (
            <div className="start-menu">
              <div className="start-menu-sidebar">
                <span className="sidebar-text">Asilbek</span>
              </div>
              <div className="start-menu-items">
                <div
                  className="start-menu-item"
                  onClick={() => {
                    handleIconDoubleClick("terminal");
                    setStartMenuOpen(false);
                  }}
                >
                  <span className="menu-icon">&gt;_</span>
                  <span>Terminal</span>
                </div>
                <div
                  className="start-menu-item"
                  onClick={() => {
                    handleIconDoubleClick("legacy");
                    setStartMenuOpen(false);
                  }}
                >
                  <span className="menu-icon">📄</span>
                  <span>Legacy Resume</span>
                </div>
                <div className="start-menu-divider"></div>
                <div
                  className="start-menu-item"
                  onClick={() => {
                    handleIconDoubleClick("about");
                    setStartMenuOpen(false);
                  }}
                >
                  <span className="menu-icon">👤</span>
                  <span>About Me</span>
                </div>
                <div
                  className="start-menu-item"
                  onClick={() => {
                    handleIconDoubleClick("projects");
                    setStartMenuOpen(false);
                  }}
                >
                  <span className="menu-icon">📁</span>
                  <span>Projects</span>
                </div>
                <div
                  className="start-menu-item"
                  onClick={() => {
                    handleIconDoubleClick("contact");
                    setStartMenuOpen(false);
                  }}
                >
                  <span className="menu-icon">✉️</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="taskbar-programs"></div>

        <div className="system-tray">
          <span className="time">{formatTime(currentTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
