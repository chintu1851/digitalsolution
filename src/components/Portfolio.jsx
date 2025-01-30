import React, { useState, useEffect, useRef } from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../styles/Portfolio.css'
import mobile from '../images/mobile.jpg'
import mobileapp from '../images/MobileApp.jpg'
import uiux from '../images/UIUX.jpg'
import aiml from '../images/AIML.jpg'
import webdev from '../images/webdevelopment.jpg'
import Layout from "../layout/layout";
import { motion, AnimatePresence } from "framer-motion"
const projects = [
  {
    id: "1",
    title: "Mobile Application development",
    description:
      "An intelligent mobile app that creates personalized workout and nutrition plans, adapting to user progress and preferences in real-time.",
    image: mobileapp,
    category: "mobile",
    technologies: ["React Native", "TensorFlow", "Node.js"],
    link: "https://example.com/fitness-app",
  },
  {
    id: "2",
    title: "Web Application development",
    description:
      "A decentralized marketplace leveraging blockchain technology for secure, transparent transactions and supply chain management.",
    image: webdev,
    category: "website",
    technologies: ["Ethereum", "React", "Solidity"],
    link: "https://example.com/blockchain-ecommerce",
  },
  {
    id: "3",
    title: "UI/UX design",
    description:
      "A cutting-edge UI/UX design for controlling smart home devices through augmented reality, offering intuitive gesture-based interactions.",
    image: uiux,
    category: "uiux",
    technologies: ["ARKit", "Unity", "Sketch"],
    link: "https://example.com/ar-smart-home",
  },
  {
    id: "4",
    title: "AI/ML",
    description:
      "An advanced AI/ML solution that predicts equipment failures in manufacturing plants, significantly reducing downtime and maintenance costs.",
    image: aiml,
    category: "aiml",
    technologies: ["Python", "TensorFlow", "AWS SageMaker"],
    link: "https://example.com/predictive-maintenance",
  }
]

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [animatedItems, setAnimatedItems] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedItems((prev) => [...prev, entry.target.id])
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".portfolio-item").forEach((item) => {
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen = (project) => () => {
    setSelectedProject(project)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filterProjects = (category) => {
    return projects.filter((project) => category === "all" || project.category === category)
  }

  return (
    <Layout>
      <section className="portfolio">
        <div className="container">

          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-title"
          >
            Innovative Portfolio
          </motion.h2>
          <p className="section-subtitle">Explore our cutting-edge projects across various domains</p>
          <div className="portfolio-grid">
            {filterProjects(activeTab).map((project) => (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className={`portfolio-item ${animatedItems.includes(`project-${project.id}`) ? "animate" : ""}`}
                onClick={handleClickOpen(project)}
              >
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="portfolio-item-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedProject && (
          <Dialog
            open={open}
            onClose={handleClose}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogContent dividers={scroll === 'paper'} sx={{ backgroundColor: 'black' }}>
              <div className="dialog-box">
                <h2>Mobile Applications</h2>
                <div className="samples">
                  {
                    [1, 2, 3, 4].map((i, index) => {
                      return (
                        <div key={index} className="card">
                          <div className="card-img">
                            <img src={mobile} />
                          </div>
                          <h3>Health Tracking App</h3>
                          <div className="skills">
                            {["React Native", "Node js", "Firebase"].map((i) => {
                              return (
                                <div className="skill">{i}</div>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </section>
    </Layout>

  )
}

export default Portfolio
