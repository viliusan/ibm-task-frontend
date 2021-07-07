import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1  */}
          <div className="col-md-3 col-sm-6">
            <h4>TEST TEST</h4>
            <ul className="list-unstyled">
              <li>LOREM LOREM LOREM</li>
              <li>LOREM LOREM LOREM</li>
              <li>LOREM LOREM LOREM</li>
              <li>LOREM LOREM LOREM</li>
            </ul>
          </div>
          {/* Column 2  */}
          <div className="col-md-3 col-sm-6">
            <h4>TEST TEST</h4>
            <ul className="list-unstyled">
              <li>LOREM LOREM LOREM</li>
              <li>LOREM LOREM LOREM</li>
              <li>LOREM LOREM LOREM</li>
              <li>LOREM LOREM LOREM</li>
            </ul>
          </div>
          {/* Column 3  */}
          <div className="col-md-3 col-sm-6">
            <h4>TEST TEST</h4>
            <ul className="list-unstyled">
              <li>LOREM LOREM LOREM</li>
              <li>LOREM LOREM LOREM</li>
              <li>LOREM LOREM LOREM</li>
              <li>LOREM LOREM LOREM</li>
            </ul>
          </div>
          {/* Column 4  */}
          <div className="col-md-3 col-sm-6">
            <h4>TEST TEST</h4>
            <ul className="list-unstyled">
              <li>LOREM LOREM LOREM</li>
              <li>LOREM LOREM LOREM</li>
              <li>LOREM LOREM LOREM</li>
              <li>LOREM LOREM LOREM</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} GNews Articles App - All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
