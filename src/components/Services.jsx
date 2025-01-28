"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Code, Brain, Cloud, Shield, Wifi, LineChart } from "lucide-react"
import { Link } from "react-router-dom"
import '../styles/Services.css'
import Layout from "../layout/layout"
const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions to meet your unique business needs, from web applications to enterprise software.",
    icon: <Code className="service-icon" />,
    details:
      "Our custom software development services are designed to create bespoke solutions that perfectly align with your business objectives. We employ cutting-edge technologies and best practices to deliver high-quality, scalable, and maintainable software.",
    features: [
      "Full-stack web application development",
      "Mobile app development (iOS and Android)",
      "Desktop application development",
      "API development and integration",
      "Legacy system modernization",
    ],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Harness the power of AI to gain insights, automate processes, and drive innovation in your organization.",
    icon: <Brain className="service-icon" />,
    details:
      "Our AI and Machine Learning services help businesses leverage the power of data-driven decision making and automation. We develop intelligent systems that can learn, adapt, and improve over time, providing you with a competitive edge in your industry.",
    features: [
      "Predictive analytics and forecasting",
      "Natural Language Processing (NLP)",
      "Computer Vision solutions",
      "Recommendation systems",
      "Anomaly detection and fraud prevention",
    ],
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure design, migration, and management services.",
    icon: <Cloud className="service-icon" />,
    details:
      "Our cloud solutions enable businesses to leverage the flexibility, scalability, and cost-effectiveness of cloud computing. We provide end-to-end cloud services, from strategy and migration to ongoing management and optimization.",
    features: [
      "Cloud architecture design and implementation",
      "Multi-cloud and hybrid cloud solutions",
      "Cloud migration and modernization",
      "Serverless computing",
      "Cloud security and compliance",
    ],
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
    icon: <Shield className="service-icon" />,
    details:
      "Our cybersecurity services are designed to protect your organization from evolving cyber threats. We employ a multi-layered approach to security, combining advanced technologies with best practices to safeguard your data, systems, and reputation.",
    features: [
      "Vulnerability assessment and penetration testing",
      "Security information and event management (SIEM)",
      "Identity and access management",
      "Incident response and forensics",
      "Security awareness training",
    ],
  },
  {
    title: "IoT & Edge Computing",
    description: "Connect and optimize your devices and data with cutting-edge IoT and edge computing solutions.",
    icon: <Wifi className="service-icon" />,
    details:
      "Our IoT and Edge Computing services help businesses harness the power of connected devices and real-time data processing. We design and implement solutions that enable smart decision-making at the edge, reducing latency and improving efficiency.",
    features: [
      "IoT device management and connectivity",
      "Edge computing architecture and implementation",
      "Real-time data analytics",
      "Industrial IoT (IIoT) solutions",
      "Smart city and home automation",
    ],
  },
  {
    title: "IT Consulting",
    description: "Strategic guidance to align your IT initiatives with your business goals and maximize ROI.",
    icon: <LineChart className="service-icon" />,
    details:
      "Our IT consulting services provide expert guidance to help you navigate the complex world of technology. We work closely with you to understand your business objectives and develop strategies that leverage technology to drive growth and efficiency.",
    features: [
      "IT strategy development and roadmapping",
      "Digital transformation consulting",
      "Technology stack assessment and optimization",
      "IT governance and compliance",
      "Vendor selection and management",
    ],
  },
]

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <Layout>
       <section id="services" className="services">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-title"
        >
          Our Services
        </motion.h2>
        <motion.div className="services-grid" variants={containerVariants} initial="hidden" animate="visible">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedService(service)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.button className="learn-more-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="service-details-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="service-details"
              initial={{
                scale: 0.7,
                opacity: 0,
                y: 50,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.7,
                opacity: 0,
                y: 50,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <button className="close-btn" onClick={() => setSelectedService(null)}>
                <X size={24} />
              </button>
              <h2>{selectedService.title}</h2>
              <div className="service-content">
                <div className="service-icon large">{selectedService.icon}</div>
                <p>{selectedService.details}</p>
                <h3>Key Features:</h3>
                <ul>
                  {selectedService.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </Layout>
   
  )
}

export default Services

