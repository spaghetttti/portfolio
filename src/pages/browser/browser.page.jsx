import { useState } from "react";
import "./browser.styles.scss";
import LegacyApp from "../legacy-portfolio/LegacyApp";

// Custom DuckDuckGo-style search page component
const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://duckduckgo.com/?q=${encodeURIComponent(searchQuery)}`, "_blank");
    }
  };

  return (
    <div className="search-page">
      <div className="search-content">
        <div className="search-logo">
          <span className="duck-icon">🦆</span>
          <h1>DuckDuckGo</h1>
        </div>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Search the web without being tracked"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <p className="search-tagline">
          The search engine that doesn't track you.
          <br />
          <small>(Results will open in a new tab)</small>
        </p>
      </div>
    </div>
  );
};

const Browser = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    { id: 0, title: "Legacy Portfolio", url: "http://asilbek.dev/legacy", type: "legacy" },
    { id: 1, title: "DuckDuckGo", url: "https://duckduckgo.com", type: "search" },
  ]);

  const currentTab = tabs[activeTab];

  const handleRefresh = () => {
    if (currentTab.type === "iframe") {
      const iframe = document.getElementById(`iframe-${currentTab.id}`);
      if (iframe) {
        iframe.src = iframe.src;
      }
    }
  };

  const handleHome = () => {
    setActiveTab(0);
  };

  const closeTab = (e, tabId) => {
    e.stopPropagation();
    if (tabs.length <= 1) return;
    const newTabs = tabs.filter(t => t.id !== tabId);
    setTabs(newTabs);
    if (activeTab >= newTabs.length) {
      setActiveTab(newTabs.length - 1);
    }
  };

  return (
    <div className="browser-container">
      {/* Tab Bar */}
      <div className="browser-tabs">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`browser-tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            <span className="tab-title">{tab.title}</span>
            {tabs.length > 1 && (
              <button className="tab-close" onClick={(e) => closeTab(e, tab.id)}>×</button>
            )}
          </div>
        ))}
      </div>

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
              value={currentTab.url}
              readOnly
            />
          </div>
          <button className="go-btn">Go</button>
        </div>
      </div>

      {/* Favorites Bar */}
      <div className="favorites-bar">
        <span className="favorites-label">Links:</span>
        <button className="favorite-link" onClick={() => setActiveTab(0)}>
          📄 Legacy Portfolio
        </button>
        <button className="favorite-link" onClick={() => setActiveTab(1)}>
          🦆 DuckDuckGo
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
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className="tab-content"
            style={{ display: activeTab === index ? "block" : "none" }}
          >
            {tab.type === "legacy" ? (
              <LegacyApp />
            ) : tab.type === "search" ? (
              <SearchPage />
            ) : (
              <iframe
                id={`iframe-${tab.id}`}
                src={tab.url}
                title={tab.title}
                className="browser-iframe"
              />
            )}
          </div>
        ))}
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
