import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Interactive = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="interaction container">
      <div>
        <img
          data-aos="fade-right"
          data-aos-duration="2500"
          src="/images/mobile/image-interactive.jpg"
          alt=""
        />
      </div>

      <div class="interact-text" data-aos="fade-left" data-aos-duration="2500">
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default Interactive;
