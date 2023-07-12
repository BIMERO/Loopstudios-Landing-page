import React from "react";
import { creationdesktopdata } from "../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CreationsDesktop = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="container creationDeskop">
      <div className="title">
        <h2
          class="interact-text"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          Our creations
        </h2>
        <div class="button" id="btn">
          <button
            class="interact-text"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            See all
          </button>
        </div>
      </div>

      <div className="creation-images">
        {creationdesktopdata.map((val) => {
          return (
            <article
              class="interact-text"
              data-aos="flip-left"
              data-aos-duration="2500"
            >
              <img src={val.cover} alt="articleimage" />
              <h3> {val.text} </h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CreationsDesktop;
