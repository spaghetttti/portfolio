import { useState, useEffect, useRef, useCallback } from "react";
import "./desktop.styles.scss";
import Terminal from "../terminal/components/Terminal";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../terminal/hooks/useTheme";
import GlobalStyle from "../terminal/components/styles/GlobalStyle";
import Browser from "../browser/browser.page";
import NotepadAbout from "../about/notepad.page";
import Explorer from "../projects/explorer.page";
import ContactForm from "../contact/contact-form.page";

// Wrapper for Terminal with theme
const TerminalWrapper = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ height: "100%", overflow: "auto", backgroundColor: theme.colors?.body }}>
        <Terminal />
      </div>
    </ThemeProvider>
  );
};

const Desktop = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [windowPositions, setWindowPositions] = useState({});
  const [windowSizes, setWindowSizes] = useState({});
  const [maximizedWindows, setMaximizedWindows] = useState({});
  const [minimizedWindows, setMinimizedWindows] = useState({});
  const startMenuRef = useRef(null);
  const dragRef = useRef({ isDragging: false, windowId: null, startX: 0, startY: 0 });

  const windowConfigs = {
    terminal: { title: "Command Prompt", icon: "/icons/terminal.png", defaultWidth: 800, defaultHeight: 500 },
    legacy: { title: "Internet Explorer - Legacy Portfolio", icon: "/icons/browser.png", defaultWidth: 1000, defaultHeight: 650 },
    about: { title: "About Me - Notepad", icon: "/icons/notepad.png", defaultWidth: 800, defaultHeight: 550 },
    projects: { title: "My Projects - Explorer", icon: "/icons/folder.png", defaultWidth: 850, defaultHeight: 550 },
    contact: { title: "Contact", icon: "/icons/contact.png", defaultWidth: 750, defaultHeight: 500 },
  };

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

  const openWindow = (app) => {
    if (!openWindows.includes(app)) {
      setOpenWindows([...openWindows, app]);
      const config = windowConfigs[app];
      const offset = openWindows.length * 30;
      setWindowPositions((prev) => ({
        ...prev,
        [app]: { x: 100 + offset, y: 50 + offset },
      }));
      setWindowSizes((prev) => ({
        ...prev,
        [app]: { width: config.defaultWidth, height: config.defaultHeight },
      }));
    }
    setMinimizedWindows((prev) => ({ ...prev, [app]: false }));
    setActiveWindow(app);
  };

  const closeWindow = (app) => {
    setOpenWindows(openWindows.filter((w) => w !== app));
    if (activeWindow === app) {
      const remaining = openWindows.filter((w) => w !== app);
      setActiveWindow(remaining.length > 0 ? remaining[remaining.length - 1] : null);
    }
  };

  const minimizeWindow = (app) => {
    setMinimizedWindows((prev) => ({ ...prev, [app]: true }));
    if (activeWindow === app) {
      const visible = openWindows.filter((w) => w !== app && !minimizedWindows[w]);
      setActiveWindow(visible.length > 0 ? visible[visible.length - 1] : null);
    }
  };

  const toggleMaximize = (app) => {
    setMaximizedWindows((prev) => ({ ...prev, [app]: !prev[app] }));
  };

  const handleMouseDown = useCallback((e, windowId) => {
    if (e.target.closest(".window-controls")) return;
    dragRef.current = {
      isDragging: true,
      windowId,
      startX: e.clientX - (windowPositions[windowId]?.x || 0),
      startY: e.clientY - (windowPositions[windowId]?.y || 0),
    };
    setActiveWindow(windowId);
  }, [windowPositions]);

  const handleMouseMove = useCallback((e) => {
    if (!dragRef.current.isDragging) return;
    const { windowId, startX, startY } = dragRef.current;
    if (maximizedWindows[windowId]) return;
    setWindowPositions((prev) => ({
      ...prev,
      [windowId]: {
        x: Math.max(0, e.clientX - startX),
        y: Math.max(0, e.clientY - startY),
      },
    }));
  }, [maximizedWindows]);

  const handleMouseUp = useCallback(() => {
    dragRef.current.isDragging = false;
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const renderWindowContent = (app) => {
    switch (app) {
      case "terminal":
        return <TerminalWrapper />;
      case "legacy":
        return <Browser />;
      case "about":
        return <NotepadAbout />;
      case "projects":
        return <Explorer />;
      case "contact":
        return <ContactForm />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="win98-desktop"
      style={{ backgroundImage: 'url("/background.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Desktop Icons */}
      <div className="desktop-icons">
        <div
          className="desktop-icon"
          onClick={() => openWindow("terminal")}
        >
          <img src="/icons/terminal.png" alt="Terminal" className="icon-image" />
          <span className="icon-label">Terminal</span>
        </div>

        <div
          className="desktop-icon"
          onClick={() => openWindow("legacy")}
        >
          <img src="/icons/browser.png" alt="Internet Explorer" className="icon-image" />
          <span className="icon-label">Internet Explorer</span>
        </div>

        <div
          className="desktop-icon"
          onClick={() => openWindow("about")}
        >
          <img src="/icons/notepad.png" alt="About Me" className="icon-image" />
          <span className="icon-label">About Me</span>
        </div>

        <div
          className="desktop-icon"
          onClick={() => openWindow("projects")}
        >
          <img src="/icons/folder.png" alt="Projects" className="icon-image" />
          <span className="icon-label">Projects</span>
        </div>

        <div
          className="desktop-icon"
          onClick={() => openWindow("contact")}
        >
          <img src="/icons/contact.png" alt="Contact" className="icon-image" />
          <span className="icon-label">Contact</span>
        </div>
      </div>

      {/* Windows */}
      {openWindows.map((app) => {
        const config = windowConfigs[app];
        const pos = windowPositions[app] || { x: 100, y: 50 };
        const size = windowSizes[app] || { width: config.defaultWidth, height: config.defaultHeight };
        const isMaximized = maximizedWindows[app];
        const isMinimized = minimizedWindows[app];
        const isActive = activeWindow === app;

        if (isMinimized) return null;

        return (
          <div
            key={app}
            className={`win98-window ${isActive ? "active" : ""} ${isMaximized ? "maximized" : ""}`}
            style={{
              left: isMaximized ? 0 : pos.x,
              top: isMaximized ? 0 : pos.y,
              width: isMaximized ? "100%" : size.width,
              height: isMaximized ? "calc(100% - 32px)" : size.height,
              zIndex: isActive ? 1000 : 100,
            }}
            onClick={() => setActiveWindow(app)}
          >
            <div
              className={`window-titlebar ${isActive ? "active" : ""}`}
              onMouseDown={(e) => handleMouseDown(e, app)}
            >
              <div className="window-title">
                <img src={config.icon} alt="" className="window-icon" />
                <span>{config.title}</span>
              </div>
              <div className="window-controls">
                <button className="window-btn minimize" onClick={(e) => { e.stopPropagation(); minimizeWindow(app); }}>
                  _
                </button>
                <button className="window-btn maximize" onClick={(e) => { e.stopPropagation(); toggleMaximize(app); }}>
                  {isMaximized ? "❐" : "□"}
                </button>
                <button className="window-btn close" onClick={(e) => { e.stopPropagation(); closeWindow(app); }}>
                  ×
                </button>
              </div>
            </div>
            <div className="window-content">
              {renderWindowContent(app)}
            </div>
          </div>
        );
      })}
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
                    openWindow("terminal");
                    setStartMenuOpen(false);
                  }}
                >
                  <img src="/icons/terminal.png" alt="" className="menu-icon" />
                  <span>Terminal</span>
                </div>
                <div
                  className="start-menu-item"
                  onClick={() => {
                    openWindow("legacy");
                    setStartMenuOpen(false);
                  }}
                >
                  <img src="/icons/document.png" alt="" className="menu-icon" />
                  <span>Legacy Resume</span>
                </div>
                <div className="start-menu-divider"></div>
                <div
                  className="start-menu-item"
                  onClick={() => {
                    openWindow("about");
                    setStartMenuOpen(false);
                  }}
                >
                  <img src="/icons/user.png" alt="" className="menu-icon" />
                  <span>About Me</span>
                </div>
                <div
                  className="start-menu-item"
                  onClick={() => {
                    openWindow("projects");
                    setStartMenuOpen(false);
                  }}
                >
                  <img src="/icons/folder.png" alt="" className="menu-icon" />
                  <span>Projects</span>
                </div>
                <div
                  className="start-menu-item"
                  onClick={() => {
                    openWindow("contact");
                    setStartMenuOpen(false);
                  }}
                >
                  <img src="/icons/contact.png" alt="" className="menu-icon" />
                  <span>Contact</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="taskbar-programs">
          {openWindows.map((app) => {
            const config = windowConfigs[app];
            const isActive = activeWindow === app && !minimizedWindows[app];
            return (
              <button
                key={app}
                className={`taskbar-program ${isActive ? "active" : ""} ${minimizedWindows[app] ? "minimized" : ""}`}
                onClick={() => {
                  if (minimizedWindows[app]) {
                    setMinimizedWindows((prev) => ({ ...prev, [app]: false }));
                    setActiveWindow(app);
                  } else if (activeWindow === app) {
                    minimizeWindow(app);
                  } else {
                    setActiveWindow(app);
                  }
                }}
              >
                <img src={config.icon} alt="" className="program-icon" />
                <span className="program-title">{config.title}</span>
              </button>
            );
          })}
        </div>

        <div className="system-tray">
          <span className="time">{formatTime(currentTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
