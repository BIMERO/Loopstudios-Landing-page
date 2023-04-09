import React from "react";
import { creationdesktopdata } from "../Data";

const CreationsDesktop = () => {
  return (
    <section className="container creationDeskop">
      <div className="title">
        <h2>Our creations</h2>
        <div class="button" id="btn">
          <button>See all</button>
        </div>
      </div>

      <div className="creation-images">
        {creationdesktopdata.map((val) => {
          return (
            <article>
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
