import { useState } from "react";
import "./notepad.styles.scss";

const NotepadAbout = () => {
  const [content] = useState(`ABOUT ME - Asilbek Muminov
=====================================

Software Engineer with 4+ years of experience in full-stack development, 
building scalable systems and user-focused applications across 
telecommunications, sports, travel, and enterprise domains.

CURRENT POSITION
----------------
Backend/DevSecOps Engineer at Orange in Paris, delivering high-availability 
middleware systems handling millions of daily requests. I specialize in 
architecting modern solutions, building CI/CD pipelines, and leading teams 
to develop automation tools and migrate legacy applications.

TECHNICAL EXPERTISE
-------------------
Frontend:  React, Next.js, Angular, TypeScript
Backend:   Spring Boot, Node.js, Django, Python, Java
DevOps:    Docker, AWS, CI/CD, Kubernetes
Databases: PostgreSQL, MongoDB, Redis

EXPERIENCE HIGHLIGHTS
---------------------
• Orange (2024-Present) - Backend/DevSecOps Engineer, Paris
  - High-availability middleware systems
  - Millions of daily requests handled

• ParlayPlay, BulkSignature, UGL Trucks ... (2022-2025) - Full Stack Developer, Remote
  - Commercial truck sales platform
  - Email signature management SaaS
  - E-commerce solutions
  - Real-time sport data processing


EDUCATION
---------
• Master's Degree - University of Montpellier, France (2024)
• BSc Computer Science - MEPhI, Moscow, Russia (2022)

CONTACT
-------
Email:    asil9802mum@gmail.com
GitHub:   github.com/spaghetttti
LinkedIn: linkedin.com/in/asil-muminov
Location: Paris, France
`);

  return (
    <div className="notepad-container">
      <div className="notepad-menubar">
        <span className="menu-item">File</span>
        <span className="menu-item">Edit</span>
        <span className="menu-item">Format</span>
        <span className="menu-item">View</span>
        <span className="menu-item">Help</span>
      </div>
      <textarea
        className="notepad-textarea"
        value={content}
        readOnly
        spellCheck={false}
      />
      <div className="notepad-statusbar">
        <span>Ln 1, Col 1</span>
      </div>
    </div>
  );
};

export default NotepadAbout;
