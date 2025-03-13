import React,{useEffect} from "react"
import { motion } from "framer-motion"
import { FiGlobe, FiUsers, FiTrendingUp } from "react-icons/fi"
import "../styles/About.css"
import { useEffect } from "react"
import Layout from "../layout/layout"
const About = () => {
  const stats = [
    { icon: <FiGlobe />, value: "20+", label: "Countries Served" },
    { icon: <FiUsers />, value: "50+", label: "Satisfied Clients" },
    { icon: <FiTrendingUp />, value: "98%", label: "Project Success Rate" },
  ]

  const timeline = [
    { year: 2010, event: "Intuiqo founded" },
    { year: 2013, event: "Expanded to international markets" },
    { year: 2016, event: "Launched AI & ML division" },
    { year: 2019, event: "Achieved ISO 27001 certification" },
    { year: 2022, event: "Opened new R&D center" },
  ]
<<<<<<< HEAD
   useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <Layout>
      <section id="about" className="about">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
=======

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <Layout>
  <section id="about" className="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-title"
        >
          About Intuiqo
        </motion.h2>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-title"
          >
            About Intuiqo
          </motion.h2>

          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="about-text"
            >
              <p>
                At Intuiqo, we don't just build technology—we craft intelligent solutions that transform businesses and industries. With a deep understanding of the ever-evolving digital landscape, we specialize in harnessing the power of AI, custom software development, and data-driven insights to propel businesses into the future.
              </p>
              <p>
                Our team of expert developers, designers, and consultants work tirelessly to deliver innovative solutions
                that drive growth, efficiency, and competitive advantage for our clients. We believe in the power of
                technology to transform businesses and improve lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="about-image"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Intuiqo team"
              />
            </motion.div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="stat-item"
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="about-mission-vision">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mission"
            >
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive
                advantage in the digital age.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="vision"
            >
              <h3>Our Vision</h3>
              <p>
              Our vision is simple: To empower businesses by turning complex challenges into seamless, intuitive solutions. We believe in the transformative power of technology, and our goal is to ensure that every business we partner with not only keeps up but thrives in an ever-changing digital world.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="about-timeline"
          >
            <h3>Our Journey</h3>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">{item.event}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>

  )
}

export default About

