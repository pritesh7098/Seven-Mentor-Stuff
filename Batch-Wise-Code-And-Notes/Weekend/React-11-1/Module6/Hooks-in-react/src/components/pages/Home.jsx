
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            ✦ YOUR IDEAS, OUR PASSION
          </span>

          <h1>
            Build something
            <br />
            <span>extraordinary.</span>
          </h1>

          <p className="hero-description">
            We turn bold ideas into meaningful digital
            experiences. Explore our work, meet our team,
            and discover what's possible.
          </p>

          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              Discover Our Story <span>↗</span>
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>

          <div className="hero-note">
            <span className="status-dot"></span>
            Creative thinking. Thoughtful execution.
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-orb orb-one"></div>
          <div className="visual-orb orb-two"></div>

          <div className="visual-card">
            <span className="visual-label">
              THE NEXT BIG THING
            </span>
            <div className="visual-symbol">✳</div>
            <h2>Ideas into impact.</h2>
            <p>
              Good design catches attention.
              Great experiences make it last.
            </p>
            <div className="visual-card-bottom">
              <span>CREATIVITY × TECHNOLOGY</span>
              <span>✦</span>
            </div>
          </div>

          <div className="floating-tag">
            <span>✦</span> Made with purpose
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-heading">
          <span className="eyebrow">WHAT WE BELIEVE</span>
          <h2>Good work starts with good thinking.</h2>
          <p>
            A thoughtful approach to every idea,
            every detail, and every experience.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">✳</div>
            <h3>Creative Ideas</h3>
            <p>
              Fresh perspectives that help turn
              complex problems into clear solutions.
            </p>
            <Link to="/about">Learn more ↗</Link>
          </article>

          <article className="feature-card">
            <div className="feature-icon">⌘</div>
            <h3>Thoughtful Design</h3>
            <p>
              Simple, intuitive experiences built
              around the people who use them.
            </p>
            <Link to="/about">Learn more ↗</Link>
          </article>

          <article className="feature-card">
            <div className="feature-icon">↗</div>
            <h3>Real Impact</h3>
            <p>
              Purposeful execution that turns
              promising ideas into real outcomes.
            </p>
            <Link to="/contact">Work with us ↗</Link>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
