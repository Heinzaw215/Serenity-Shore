import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer' aria-label="footer">
      Serenity Shore &copy; Copyright <time dateTime="2024">2024</time>
      <div className="help">
        <Link to="/help"><i className="fa-help"></i>Help</Link>
        <Link to="/policy">Policy</Link>
        <Link to="/about-us">About us</Link>
      </div>
      <div className="social-media-link">
        <a href="https://www.facebook.com" target="_blank">
          <i className="fa-brands fa-facebook"></i> Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <i className="fa-brands fa-twitter"></i> Twitter
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <i className="fa-brands fa-instagram"></i> Instagram
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <i className="fa-brands fa-linkedin"></i> Linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
