import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-content">
          <div className="contact-item">
            <h4>Email</h4>
            <a href="mailto:hzfan@mit.edu" className="contact-link">
              hzfan@mit.edu
            </a>
          </div>
          <div className="contact-item">
            <h4>Phone</h4>
            <a href="tel:+6103902512" className="contact-link">
              +1 (610) 390-2512
            </a>
          </div>
          <div className="contact-item">
            <h4>Location</h4>
            <p>Cambridge, MA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
