import React from "react";
import { creationdata } from "../Data";

const Creations = () => {
  return (
    <section className="container creation">
      <h2>Our creations</h2>

      <div className="creation-images">
        {creationdata.map((val) => {
          return (
            <article>
              <img src={val.cover} alt="articleimage" />
              <h3> {val.text} </h3>
            </article>
          );
        })}
      </div>

      <div class="button" id="btn">
        <button>See all</button>
      </div>
    </section>
  );
};

export default Creations;
