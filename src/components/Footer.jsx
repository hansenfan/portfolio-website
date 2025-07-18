import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          © {currentYear} Hansen Fan. All rights reserved.
        </p>
        <p className="footer-text">Built with React & Vite</p>
      </div>
    </footer>
  );
}

export default Footer;
