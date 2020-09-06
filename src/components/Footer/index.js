import React from 'react';

import './footer.scss';

const Footer = () => (
  <footer className="footer-content">
    <nav className="footer-nav">
      <div className="div-SOC">
        <h2 className="div-title">En ce qui nous concerne : </h2>
        <li>Contacts</li>
        <li>Mentions Légales</li>
      </div>
      <div className="div-SOC">
        <h2 className="div-title">Vous devriez visiter : </h2>
        <li>Chloecuny-web-developper</li>
      </div>
    </nav>
    <p className="copyright">Lya'm Couture © 2020</p>
  </footer>
);

export default Footer;
