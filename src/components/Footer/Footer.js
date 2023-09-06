import React from "react";
import "./Footer.css";
import textLabels from "../../constants/textLabel";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">{textLabels.footer.description}</p>
      <span className="footer__copyright">{textLabels.footer.copyright}</span>
    </footer>
  );
}

export default Footer;
