import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="logo">
          <img class="footer-logo" src="images/logo.svg" alt="logo" />
        </div>
        <div class="footer-menu">
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div>
        <div class="socials">
          <img src="/images/icon-facebook.svg" alt="facebook" />
          <img src="/images/icon-twitter.svg" alt="twitter" />
          <img src="/images/icon-pinterest.svg" alt="pinterest" />
          <img src="/images/icon-instagram.svg" alt="instagram" />
        </div>
        <small>© 2021 Loopstudios. All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
