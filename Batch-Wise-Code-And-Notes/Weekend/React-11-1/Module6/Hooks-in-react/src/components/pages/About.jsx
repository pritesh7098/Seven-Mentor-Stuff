
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="page inner-page">
      <section className="inner-hero">
        <span className="eyebrow">A LITTLE ABOUT US</span>
        <h1>
          Curious minds.
          <br />
          <span>Meaningful work.</span>
        </h1>
        <p>
          We believe the best solutions come from
          curiosity, collaboration, and a willingness
          to challenge the ordinary.
        </p>
      </section>

      <section className="about-content">
        <div className="about-highlight">
          <span className="highlight-symbol">✳</span>
          <h2>Why we do what we do.</h2>
        </div>

        <div className="about-copy">
          <p>
            DevSpace is built around a simple idea:
            technology and creativity work best when
            they solve real problems for real people.
          </p>
          <p>
            We bring together thoughtful design,
            practical engineering, and a love for
            learning to create digital experiences
            that are useful, accessible, and memorable.
          </p>

          <Link to="/contact" className="btn btn-primary">
            Let's Create Together ↗
          </Link>
        </div>
      </section>

      <section className="values-grid">
        <article className="value-card">
          <span>01 / CURIOSITY</span>
          <h3>Always learning.</h3>
          <p>We ask questions and explore better ways to work.</p>
        </article>

        <article className="value-card">
          <span>02 / CLARITY</span>
          <h3>Keep it simple.</h3>
          <p>We value solutions that are clear and easy to use.</p>
        </article>

        <article className="value-card">
          <span>03 / PURPOSE</span>
          <h3>Make it matter.</h3>
          <p>We focus on outcomes that make a real difference.</p>
        </article>
      </section>
    </main>
  );
}

export default About;
