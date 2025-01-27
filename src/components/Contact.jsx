import React from "react"
import "../styles/Contact.css"

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-description">
          Ready to transform your business with cutting-edge technology? Let's connect and explore the possibilities!
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required></textarea>
          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>
        <div className="contact-info">
          <p>Email: contact@technova.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Tech Avenue, Silicon Valley, CA 94000</p>
        </div>
      </div>
    </section>
  )
}

export default Contact

