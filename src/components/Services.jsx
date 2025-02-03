"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import '../styles/Services.css';
import Layout from "../layout/layout";
import { X, Code, Brain, Cloud, Shield, Wifi, LineChart, BarChart, Briefcase, Search } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa"
// Export the services array
import { useEffect } from "react";
import aiml from '../images/AIML.jpg'
import aiml2 from '../images/aiml2.jpg'
import csd1 from '../images/se1.jpg'
import csd2 from '../images/se2.jpg'
import da1 from '../images/da1.jpg'
import da2 from '../images/da2.jpg'
import bc1 from '../images/bc1.jpg'
import bc2 from '../images/bc2.jpg'
import seo1 from '../images/seo1.jpg'
import seo2 from '../images/seo2.jpg'
import itc1 from '../images/itc.jpg'
import itc2 from '../images/itc2.jpg'

export const services = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "Tailored solutions to meet your unique business needs, from web applications to enterprise software.",
    icon: <Code className="service-icon" />,
    background:
      "Every business is unique, and so are its challenges. At Intuiqo, we specialize in developing custom software that is specifically designed to meet the needs of your business. From automating workflows to creating complex enterprise-level solutions, our software is built to evolve with your business.",
    technologies: [
      { name: "React", icon: <FaReact size={50} color="#4a90e2" /> },
      { name: "Node.js", icon: "/tech-icons/nodejs.png" },
      { name: "Python", icon: "/tech-icons/python.png" },
      { name: "AWS", icon: "/tech-icons/aws.png" },
      { name: "Docker", icon: "/tech-icons/docker.png" },
    ],
    features: [
      {
        name: "Full-stack Solutions",
        description: "End-to-end development of web applications with modern frontend and backend architectures",
      },
      {
        name: "Mobile App Development",
        description: "Cross-platform solutions designed to provide seamless user experiences on iOS and Android.",
      },
      {
        name: "Web Applications",
        description: "Scalable, user-friendly, and secure web apps tailored to your business processes.",
      },
      {
        name: "Enterprise Software Solutions",
        description: "Streamlining operations and improving efficiency with robust, enterprise-grade software solutions",
      },
    ],
    whatWeOffer:
      "We deliver full-cycle software development services from requirements analysis to deployment and maintenance. Our agile approach ensures we build exactly what your business needs while maintaining flexibility for future growth.",
    image1: csd1,
    image2: csd2,
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    description:
      "Harness the power of AI to gain insights, automate processes, and drive innovation in your organization.",
    icon: <Brain className="service-icon" />,
    background:
      "Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and improve decision-making. Whether it’s predictive analytics, intelligent automation, or data-driven insights, our AI solutions are built to help your business think ahead.",
    technologies: [
      { name: "TensorFlow", icon: "/tech-icons/tensorflow.png" },
      { name: "PyTorch", icon: "/tech-icons/pytorch.png" },
      { name: "Scikit-learn", icon: "/tech-icons/scikit-learn.png" },
      { name: "Keras", icon: "/tech-icons/keras.png" },
      { name: "NLTK", icon: "/tech-icons/nltk.png" },
    ],
    features: [
      {
        name: "Predictive Analytics",
        description: "Forecast future trends and behaviors using historical data and statistical algorithms.",
      },
      {
        name: "Natural Language Processing",
        description: "Enable machines to understand, interpret, and generate human language.",
      },
      {
        name: "Computer Vision",
        description: "Develop systems that can process, analyze, and understand digital images and videos.",
      },
      {
        name: "Reinforcement Learning",
        description: "Create AI agents that learn to make decisions by interacting with their environment.",
      },
    ],
    whatWeOffer:
      "Our AI & Machine Learning services provide end-to-end solutions, from data preparation and model development to deployment and maintenance. We work closely with your team to understand your business needs and develop custom AI solutions that drive real value.",
      image1: aiml,
    image2: aiml2,
  },
  {
    id: 3,
    title: "Data Analytics",
    description: "Unlock actionable insights from your data to improve decision-making and business outcomes.",
    icon: <BarChart className="service-icon" />,
    background:
      "In today's data-driven world, the ability to extract meaningful insights from complex datasets is crucial for maintaining competitive advantage. Our analytics solutions turn raw data into strategic assets.",
    technologies: [
      { name: "Tableau", icon: "/tech-icons/tableau.png" },
      { name: "Power BI", icon: "/tech-icons/powerbi.png" },
      { name: "Snowflake", icon: "/tech-icons/snowflake.png" },
      { name: "Apache Spark", icon: "/tech-icons/spark.png" },
      { name: "Python", icon: "/tech-icons/python.png" },
    ],
    features: [
      {
        name: "Business Intelligence",
        description: "Interactive dashboards and real-time reporting for data-driven decision making",
      },
      {
        name: "Big Data Processing",
        description: "Handling and analysis of large-scale datasets using distributed computing frameworks",
      },
      {
        name: "Customer Insights",
        description: "Deep analysis of customer behavior and preferences to drive engagement strategies",
      },
      {
        name: "Data Warehousing",
        description: "Design and implementation of centralized data repositories for enterprise analytics",
      },
    ],
    whatWeOffer:
      "We provide comprehensive data analytics services including ETL pipeline development, predictive modeling, and visualization. Our solutions help you uncover hidden patterns and opportunities in your data.",
      image1: da1,
    image2: da2,
  },
  {
    id: 4,
    title: "Business Consulting",
    description: "Strategic business consulting to optimize processes, improve efficiency, and drive growth.",
    icon: <Briefcase className="service-icon" />,
    background:
      "Effective business strategy requires both macro vision and meticulous execution planning. We help organizations navigate market challenges and operational complexities to achieve sustainable growth.",
    technologies: [
      { name: "SWOT Analysis", icon: "/tech-icons/swot.png" },
      { name: "OKR Framework", icon: "/tech-icons/okr.png" },
      { name: "CRM Systems", icon: "/tech-icons/crm.png" },
      { name: "ERP Solutions", icon: "/tech-icons/erp.png" },
      { name: "Six Sigma", icon: "/tech-icons/six-sigma.png" },
    ],
    features: [
      {
        name: "Digital Transformation",
        description: "Comprehensive roadmap for adopting digital technologies across business operations",
      },
      {
        name: "Process Optimization",
        description: "Identification and elimination of operational bottlenecks through Lean methodologies",
      },
      {
        name: "Change Management",
        description: "Structured approach to transitioning individuals and teams through organizational changes",
      },
      {
        name: "Market Expansion",
        description: "Strategic planning for entering new markets and scaling operations effectively",
      },
    ],
    whatWeOffer:
      "Our consulting services combine industry expertise with data-driven insights to help you make informed strategic decisions. We focus on creating measurable impact through operational improvements and innovation strategies.",
      image1: bc1,
    image2: bc2,
  },
  {
    id: 5,
    title: "SEO Services",
    description: "Enhance your online visibility and drive organic traffic with expert SEO strategies.",
    icon: <Search className="service-icon" />,
    background:
      "In the digital age, search engine visibility is critical for business success. Our SEO strategies combine technical expertise with content excellence to deliver sustainable organic growth.",
    technologies: [
      { name: "Google Analytics", icon: "/tech-icons/ga.png" },
      { name: "SEMrush", icon: "/tech-icons/semrush.png" },
      { name: "Ahrefs", icon: "/tech-icons/ahrefs.png" },
      { name: "Moz", icon: "/tech-icons/moz.png" },
      { name: "Google Search Console", icon: "/tech-icons/gsc.png" },
    ],
    features: [
      {
        name: "Technical SEO",
        description: "Website optimization for search engine crawling and indexing efficiency",
      },
      {
        name: "Content Strategy",
        description: "Creation of search-optimized content that resonates with your target audience",
      },
      {
        name: "Local SEO",
        description: "Geo-targeted optimization strategies to dominate local search results",
      },
      {
        name: "E-commerce SEO",
        description: "Product page optimization and category structure planning for online stores",
      },
    ],
    whatWeOffer:
      "We deliver full-spectrum SEO services including technical audits, content planning, and link building. Our data-driven approach ensures continuous improvement in search rankings and organic traffic growth.",
     image1: seo1,
    image2: seo2,
  },
  {
    id: 6,
    title: "IT Consulting",
    description: "Strategic guidance to align your IT initiatives with your business goals and maximize ROI.",
    icon: <LineChart className="service-icon" />,
    background:
      "Effective IT strategy is the backbone of modern business operations. We help organizations align their technology investments with business objectives for maximum impact and efficiency.",
    technologies: [
      { name: "AWS", icon: "/tech-icons/aws.png" },
      { name: "Azure", icon: "/tech-icons/azure.png" },
      { name: "Kubernetes", icon: "/tech-icons/kubernetes.png" },
      { name: "Cybersecurity", icon: "/tech-icons/cybersecurity.png" },
      { name: "DevOps", icon: "/tech-icons/devops.png" },
    ],
    features: [
      {
        name: "Cloud Migration",
        description: "Strategic planning and execution of cloud adoption initiatives",
      },
      {
        name: "IT Infrastructure",
        description: "Design and implementation of robust, scalable technology architectures",
      },
      {
        name: "Security Audits",
        description: "Comprehensive assessments of IT systems and data protection measures",
      },
      {
        name: "Vendor Management",
        description: "Optimization of technology partnerships and service provider relationships",
      },
    ],
    whatWeOffer:
      "Our IT consulting services help organizations navigate digital transformation with confidence. From technology roadmaps to implementation governance, we ensure your IT investments deliver tangible business value.",
   image1: itc1,
    image2: itc2,
  },
]
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
  };

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
          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="service-card"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={`/services/${service.id}`} className="learn-more-btn">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
