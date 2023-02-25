import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section className="main py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-7">
            <h1>
              FIND THE MOST EXCITING <br />
              STARTUP JOBS
            </h1>
            <input type="text" placeholder="Job Title Or Keyword" />
            <button className="btnFindJob mt-5">Find Job</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
