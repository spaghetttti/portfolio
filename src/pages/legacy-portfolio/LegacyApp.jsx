import { useState } from "react";
import "./legacy-app.styles.scss";

// Import legacy components
import LegacyHome from "./src/pages/home/home.page";
import LegacyAbout from "./src/pages/about/about.page";
import LegacyProjects from "./src/pages/projects/projects.page";
import LegacyContact from "./src/pages/contact/contact.page";
import LegacySidebar from "./src/components/sidebar/sidebar.component";

// Import legacy styles
import "./src/App.scss";

const LegacyApp = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <LegacyHome />;
      case "about":
        return <LegacyAbout />;
      case "projects":
        return <LegacyProjects />;
      case "contact":
        return <LegacyContact />;
      default:
        return <LegacyHome />;
    }
  };

  return (
    <div className="legacy-app-wrapper">
      <LegacySidebar onNavigate={setCurrentPage} currentPage={currentPage} />
      <div className="legacy-page">
        {renderPage()}
      </div>
    </div>
  );
};

export default LegacyApp;
