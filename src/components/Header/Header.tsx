import React, { useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="logo" onClick={scrollToTop}>
        <img src="./images/logo.png" alt="logo" className="logo" />
      </div>

      {/* Hamburger toggle for mobile */}
      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((s) => !s)}
      >
        <span className="hamburger" />
      </button>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a onClick={() => scrollToTop()}>Home</a></li>
          <li><a onClick={() => scrollToSection('mySkills')}>My Skills</a></li>
          <li><a onClick={() => scrollToSection('myCertificates')}>My Certifications</a></li>
          <li><a onClick={() => scrollToSection('myExperience')}>Experience & Education</a></li>
          {/* <li><a onClick={() => scrollToSection('myProjects')}>Featured Projects</a></li> */}
          {/* <li><a onClick={() => scrollToSection('myEducation')}>Education</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
