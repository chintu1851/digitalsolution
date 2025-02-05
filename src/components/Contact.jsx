import { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import "../styles/Contact.css"
import { motion } from "framer-motion"
import Layout from "../layout/layout"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    emailjs.init("_C9xaIpfTjP6Dso62") // Initialize EmailJS with your public key
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormStatus("sending")

    emailjs
      .sendForm("service_xl1rrce", "template_68kk0ep", event.target)
      .then((response) => {
        console.log("Success:", response)
        setFormStatus("success")
        event.target.reset()
      })
      .catch((error) => {
        console.error("Error:", error)
        setFormStatus("error")
      })
  }

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
            Get in Touch
          </motion.h2>

          <div className="contact-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="contact-info"
            >
              <h3>Let's Connect</h3>
              <p>
                Ready to transform your business with cutting-edge technology? We're here to help you navigate the
                digital landscape and achieve your goals.
              </p>
              <ul className="contact-details">
                <li>
                  <FaEnvelope />
                  <span>contact@Intuiqo.com</span>
                </li>
                <li>
                  <FaPhone />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li>
                  <FaMapMarkerAlt />
                  <span>123 Tech Avenue, Silicon Valley, CA 94000</span>
                </li>
              </ul>
              <div className="social-links">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="contact-form-container"
            >
              <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" id="name" name="name" placeholder=" " required />
                  <label htmlFor="name">
                    <i className="fas fa-user"></i> Name
                  </label>
                </div>

                <div className="form-group">
                  <input type="email" id="email" name="email" placeholder=" " required />
                  <label htmlFor="email">
                    <i className="fas fa-envelope"></i> Email
                  </label>
                </div>

                <div className="form-group">
                  <textarea id="message" name="message" placeholder=" " required></textarea>
                  <label htmlFor="message">
                    <i className="fas fa-comment"></i> Message
                  </label>
                </div>

                <button type="submit" className="cta-button" disabled={formStatus === "sending"}>
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>

                {formStatus === "success" && (
                  <p className="form-status success">Your message has been sent successfully!</p>
                )}
                {formStatus === "error" && (
                  <p className="form-status error">There was an error sending your message. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact

