import { Link } from 'react-router-dom';
import './About.css';
import { Button } from 'primereact/button';
const About = () => {
  
  function countYears() 
  {
    const currentYear = new Date().getFullYear();
    const startYear = 2016;
    return Math.floor(currentYear - startYear);
   }

const yearsCount = countYears();
  return (
    <div className="about-container" id="myAbout">
      <div className="about-image">
        <img src="./images/about.jpg" alt="About Me" />
      </div>
      <div className="about-details">
        <h2>UI Developer & Web Expert</h2>
        <h4>ReactJs, Javascript, Redux, Typescript, NextJs, HTML/CSS, UI Frameworks</h4>
        <p>
          Offering over {yearsCount} years of experience in software design, development, testing, product support, application maintenance and handling real time issues on live server and passionate about new opportunities and innovation at work.
        </p>
        <div className="about-details">
          <div className="profile-details">
            <div className="detail-item">
              <strong>Name:</strong> Mahesh Chandra Joshi
            </div>
            <div className="detail-item">
              <strong>Degree:</strong> Masters in Computer Application
            </div>
            <div className="detail-item">
              <strong>Mobile:</strong> +919997788741
            </div>
            <div className="detail-item">
              <strong>Address:</strong> New Delhi
            </div>
            <div className="detail-item">
              <strong>Experience:</strong> {yearsCount} years <br />(ReactJs,Typescript,Javascript,Redux)
            </div>
            <div className="detail-item">
              <strong>Email:</strong> maheshjoshi90@gmail.com
            </div>
          </div>
          <div className="about-btn-group">
            <Link to="./resume/Mahesh_Joshi_ReactJs.docx" target="_blank" download><Button className="download-cv" type="button" label="Download CV" badgeClassName="p-badge-danger" /></Link>
            <Link to="http://www.linkedin.com/in/mahesh-joshi-011b3b77" target='_blank'><Button type="button" label="LinkedIn" className='about-linkedin-btn'/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
