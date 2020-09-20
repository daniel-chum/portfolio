import React from "react";
import { Link } from "react-router-dom";

export default function Contact(props) {
  return (
    <div className="contact">
      <div className="contact-box">
        <h2>Let's build something</h2>
        <p>Interested in working together? I'm open to any opportunities.</p>
        <Link to="/contact">Say Hello</Link>
      </div>
    </div>
  );
}
