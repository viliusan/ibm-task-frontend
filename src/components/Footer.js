import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} GNews Articles App by Vilius
            Andraitis - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
