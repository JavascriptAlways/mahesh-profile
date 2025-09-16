import "./Header.css";
const Header = () => {
  function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" })
  }
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" className="logo" />
        </div>
        <nav className="nav-menu">
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
    </>
  );
};

export default Header;
