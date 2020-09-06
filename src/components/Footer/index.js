import React from 'react';

import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
  <footer className="footer-content">
    <nav className="footer-nav">
      <div className="div-SOC">
        <h2 className="div-title">En ce qui nous concerne : </h2>
        <li className="footer-li">
          <Link className="footer-link" to="/contact">Contact</Link>
        </li>
        <li className="footer-li">
          <Link className="footer-link" to="/legal-mentions">Mentions Légales</Link>
        </li>
      </div>
      <div className="div-SOC">
        <h2 className="div-title">Vous devriez visiter : </h2>
        <li className="footer-li">
          <Link className="footer-link" to="/website-developer">Chloecuny-web-developper</Link>
        </li>
      </div>
    </nav>
    <p className="copyright">Lya'm Couture © 2020</p>
  </footer>
);

export default Footer;
