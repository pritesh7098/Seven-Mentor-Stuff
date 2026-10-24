
import React from "react";

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thanks for reaching out! Connect a backend to receive messages.");
  }

  return (
    <main className="page inner-page">
      <section className="contact-layout">
        <div className="contact-info">
          <span className="eyebrow">LET'S CONNECT</span>

          <h1>
            Have an idea?
            <br />
            <span>Let's talk.</span>
          </h1>

          <p>
            Have a project in mind, a question, or just
            want to say hello? We'd love to hear from you.
          </p>

          <div className="contact-detail">
            <span className="detail-icon">✉</span>
            <div>
              <span>Email us</span>
              <p>hello@devspace.example</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="detail-icon">↗</span>
            <div>
              <span>Our approach</span>
              <p>Thoughtful conversations, no pressure.</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a message</h2>
          <p>Tell us a little about what you're thinking.</p>

          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="subject">What's this about?</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Project, collaboration, or just hello"
            required
          />

          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Tell us more..."
            required
          />

          <button type="submit" className="btn btn-primary submit-btn">
            Send Message <span>↗</span>
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
