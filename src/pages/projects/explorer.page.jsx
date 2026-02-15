import React, { useState, useEffect } from 'react';
import './explorer.styles.scss';

const Explorer = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [viewMode, setViewMode] = useState('icons'); // 'icons', 'list', 'details'

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/spaghetttti/repos?sort=updated&per_page=30');
      if (!response.ok) throw new Error('Failed to fetch repos');
      const data = await response.json();
      setRepos(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleRepoClick = (repo) => {
    setSelectedRepo(repo);
  };

  const handleRepoDoubleClick = (repo) => {
    window.open(repo.html_url, '_blank');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: '2-digit', 
      day: '2-digit', 
      year: 'numeric' 
    });
  };

  const formatSize = (size) => {
    if (size < 1024) return `${size} KB`;
    return `${(size / 1024).toFixed(1)} MB`;
  };

  const getLanguageIcon = (language) => {
    const icons = {
      'JavaScript': '📜',
      'TypeScript': '📘',
      'Python': '🐍',
      'Java': '☕',
      'HTML': '🌐',
      'CSS': '🎨',
      'C++': '⚙️',
      'C': '⚙️',
      'Ruby': '💎',
      'Go': '🐹',
      'Rust': '🦀',
      'PHP': '🐘',
      'Swift': '🍎',
      'Kotlin': '🎯',
      'default': '📁'
    };
    return icons[language] || icons['default'];
  };

  return (
    <div className="explorer-container">
      {/* Toolbar */}
      <div className="explorer-toolbar">
        <div className="toolbar-button" title="Back">
          <span>←</span>
        </div>
        <div className="toolbar-button" title="Forward">
          <span>→</span>
        </div>
        <div className="toolbar-button" title="Up">
          <span>↑</span>
        </div>
        <div className="toolbar-separator"></div>
        <div className="toolbar-button" title="Refresh" onClick={fetchGitHubRepos}>
          <span>🔄</span>
        </div>
        <div className="toolbar-separator"></div>
        <div 
          className={`toolbar-button ${viewMode === 'icons' ? 'active' : ''}`} 
          title="Large Icons" 
          onClick={() => setViewMode('icons')}
        >
          <span>⊞</span>
        </div>
        <div 
          className={`toolbar-button ${viewMode === 'list' ? 'active' : ''}`} 
          title="List" 
          onClick={() => setViewMode('list')}
        >
          <span>☰</span>
        </div>
        <div 
          className={`toolbar-button ${viewMode === 'details' ? 'active' : ''}`} 
          title="Details" 
          onClick={() => setViewMode('details')}
        >
          <span>▤</span>
        </div>
        <div className="toolbar-separator"></div>
        <div className="address-bar">
          <span className="address-label">Address:</span>
          <div className="address-input">
            <img src="/icons/folder.png" alt="" className="address-icon" />
            <span>C:\GitHub\spaghetttti\</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="explorer-main">
        {/* Left Panel - Folder Tree */}
        <div className="explorer-tree">
          <div className="tree-item expanded">
            <span className="tree-icon">📂</span>
            <span>GitHub</span>
          </div>
          <div className="tree-item selected" style={{ paddingLeft: '20px' }}>
            <span className="tree-icon">📂</span>
            <span>spaghetttti</span>
          </div>
        </div>

        {/* Right Panel - File List */}
        <div className="explorer-content">
          {loading && (
            <div className="explorer-loading">
              <div className="loading-icon">⏳</div>
              <span>Loading repositories...</span>
            </div>
          )}

          {error && (
            <div className="explorer-error">
              <div className="error-icon">❌</div>
              <span>Error: {error}</span>
            </div>
          )}

          {!loading && !error && (
            <div className={`file-list ${viewMode}`}>
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className={`file-item ${selectedRepo?.id === repo.id ? 'selected' : ''}`}
                  onClick={() => handleRepoClick(repo)}
                  onDoubleClick={() => handleRepoDoubleClick(repo)}
                >
                  <div className="file-icon">
                    <img src="/icons/folder.png" alt="folder" />
                  </div>
                  <div className="file-info">
                    <span className="file-name">{repo.name}</span>
                    {viewMode === 'details' && (
                      <>
                        <span className="file-size">{formatSize(repo.size)}</span>
                        <span className="file-type">{repo.language || 'Folder'}</span>
                        <span className="file-date">{formatDate(repo.updated_at)}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="explorer-statusbar">
        <div className="status-left">
          {repos.length} object(s)
          {selectedRepo && ` | "${selectedRepo.name}" selected`}
        </div>
        <div className="status-right">
          {selectedRepo && selectedRepo.description && (
            <span className="status-description">{selectedRepo.description}</span>
          )}
        </div>
      </div>

      {/* Details Panel (when item selected) */}
      {selectedRepo && (
        <div className="explorer-details-panel">
          <div className="details-header">
            <img src="/icons/folder.png" alt="" className="details-icon" />
            <span className="details-name">{selectedRepo.name}</span>
          </div>
          <div className="details-info">
            <div className="detail-row">
              <span className="detail-label">Language:</span>
              <span className="detail-value">{getLanguageIcon(selectedRepo.language)} {selectedRepo.language || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Stars:</span>
              <span className="detail-value">⭐ {selectedRepo.stargazers_count}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Forks:</span>
              <span className="detail-value">🍴 {selectedRepo.forks_count}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Updated:</span>
              <span className="detail-value">{formatDate(selectedRepo.updated_at)}</span>
            </div>
            {selectedRepo.description && (
              <div className="detail-row description">
                <span className="detail-label">Description:</span>
                <span className="detail-value">{selectedRepo.description}</span>
              </div>
            )}
          </div>
          <button 
            className="win98-button"
            onClick={() => window.open(selectedRepo.html_url, '_blank')}
          >
            Open in GitHub
          </button>
        </div>
      )}
    </div>
  );
};

export default Explorer;
