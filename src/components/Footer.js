import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <div className="main-footer">
    <div className="footer-bottom">
      <p className="text-center w-100">
        &copy;{new Date().getFullYear()} GNews Articles App by Vilius Andraitis
        - All Rights Reserved
      </p>
    </div>
  </div>
);

export default Footer;
