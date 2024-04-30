import React from "react";

const About = () => { 
  return (
    <section className="about" id="about">
      <div className="allHeadings">
        <h1>About</h1>
      </div>
        <div className="container">
        <div className="cardContainer">
        <div className="row justify-content-center">
            <div className="col col-lg-5">
              <p className="intro">
                Hi. I'm Rajashree Asokkumar,
                nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div className="col col-lg-6">
              <p className="para">
                {" "}
                A Front-End developer with experience in building Responsive and
                Scalable Web apps. I am well-knowledged in UI/UX principles and
                practices.Passionate about delivering high-quality code and enhancing user experiences. 
                Adapt at collaborating with cross-functional teams to drive successful project outcomes.
              </p>
            </div>
            </div>
          </div>
      </div>
    </section>
  );
};
export default About;