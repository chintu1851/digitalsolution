import React from "react"
import "../styles/Contact.css"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "../layout/layout"
import { useEffect } from "react"
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <section id="contact" className="contact">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-title"
          >
            Contact-Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-text"
          >
            <p className="contact-description">
              Ready to transform your business with cutting-edge technology? Let's connect and explore the possibilities!
            </p>
          </motion.div>

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

