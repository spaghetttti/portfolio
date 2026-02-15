import { useState } from "react";
import "./browser.styles.scss";
import LegacyApp from "../legacy-portfolio/LegacyApp";

const Browser = () => {
  const [currentUrl, setCurrentUrl] = useState("http://asilbek.dev/legacy");

  const handleRefresh = () => {
    // Trigger a re-render
    setCurrentUrl("");
    setTimeout(() => setCurrentUrl("http://asilbek.dev/legacy"), 0);
  };

  const handleHome = () => {
    setCurrentUrl("http://asilbek.dev/legacy");
  };

  return (
    <div className="browser-container">
      {/* Toolbar */}
      <div className="browser-toolbar">
        <div className="toolbar-buttons">
          <button className="toolbar-btn" title="Back" disabled>
            ←
          </button>
          <button className="toolbar-btn" title="Forward" disabled>
            →
          </button>
          <button className="toolbar-btn" title="Refresh" onClick={handleRefresh}>
            🔄
          </button>
          <button className="toolbar-btn" title="Home" onClick={handleHome}>
            🏠
          </button>
        </div>
        
        <div className="address-bar">
          <span className="address-label">Address:</span>
          <div className="address-input-wrapper">
            <img src="/icons/browser.png" alt="" className="address-icon" />
            <input
              type="text"
              className="address-input"
              value={currentUrl}
              readOnly
            />
          </div>
          <button className="go-btn">Go</button>
        </div>
      </div>

      {/* Favorites Bar */}
      <div className="favorites-bar">
        <span className="favorites-label">Links:</span>
        <button className="favorite-link" onClick={handleHome}>
          📄 Legacy Portfolio
        </button>
        <button 
          className="favorite-link" 
          onClick={() => window.open("https://github.com/spaghetttti", "_blank")}
        >
          🐙 GitHub
        </button>
        <button 
          className="favorite-link" 
          onClick={() => window.open("https://linkedin.com/in/asil-muminov", "_blank")}
        >
          💼 LinkedIn
        </button>
      </div>

      {/* Browser Content */}
      <div className="browser-content">
        <LegacyApp />
      </div>

      {/* Status Bar */}
      <div className="browser-statusbar">
        <div className="status-left">
          <span className="status-icon">🌐</span>
          <span>Done</span>
        </div>
        <div className="status-right">
          <span>Internet</span>
        </div>
      </div>
    </div>
  );
};

export default Browser;
