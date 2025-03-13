import { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import "../styles/Contact.css"
import { motion } from "framer-motion"
import Layout from "../layout/layout"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  return (
    <Layout>
      <section id="contact" className="contact">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="section-title"
          >
            Get in Touch
          </motion.h2>
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
            <p>Email: contact@Intuiqo.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Tech Avenue, Silicon Valley, CA 94000</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
