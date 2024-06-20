import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="social-media">
          <Link to="#"><FaFacebook /></Link>
          <Link to="#"><FaTwitter /></Link>
          <Link to="http://www.linkedin.com/in/mahesh-joshi-011b3b77"><FaLinkedin /></Link>
          <Link to="#"><FaInstagram /></Link>
        </div>
        <div className="footer-text">
          <p>All Rights Reserved. Designed by Mahesh Joshi (UI Expert)</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;