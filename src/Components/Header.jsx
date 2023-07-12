import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const showNav = () => {
    const menubtn = document.querySelector(".icons");
    const nav = document.querySelector(".nav-menu");

    menubtn.addEventListener("click", () => {
      nav.classList.toggle("open");
      menubtn.classList.toggle("rotate");
    });
  };

  return (
    <section
      className="container header"
      style={{ backgroundImage: `url(/images/mobile/image-hero.jpg)` }}
    >
      <nav>
        <img src="/images/logo.svg" alt="logo" />
        <div class="icons" onClick={() => showNav()}>
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>
        <div class="nav-menu">
          <div className="nav-logo">
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
      </nav>

      <div class="header-text">
        <h1 data-aos="fade-right" data-aos-duration="2500">
          Immersive experiences that deliver
        </h1>
      </div>
    </section>
  );
};

export default Header;
