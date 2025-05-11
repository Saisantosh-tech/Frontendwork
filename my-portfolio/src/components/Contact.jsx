// components/Contact.jsx
import React from "react";

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Message sent!");
  }

  return (
    <section
      id="contact"
      style={{ padding: "2rem", backgroundColor: "#f3f4f6" }}
    >
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <br />
        <input type="email" name="email" placeholder="Your Email" required />
        <br />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
