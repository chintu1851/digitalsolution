import React, { useState, useEffect } from "react"
import '../styles/Portfolio.css'
import Layout from "../layout/layout"

const projects = [
  {
    id: "1",
    title: "AI-Powered Fitness Companion",
    description:
      "An intelligent mobile app that creates personalized workout and nutrition plans, adapting to user progress and preferences in real-time.",
    image: "/placeholder.svg?height=300&width=400",
    category: "mobile",
    technologies: ["React Native", "TensorFlow", "Node.js"],
    link: "https://example.com/fitness-app",
  },
  {
    id: "2",
    title: "Blockchain-Based E-commerce Platform",
    description:
      "A decentralized marketplace leveraging blockchain technology for secure, transparent transactions and supply chain management.",
    image: "/placeholder.svg?height=300&width=400",
    category: "website",
    technologies: ["Ethereum", "React", "Solidity"],
    link: "https://example.com/blockchain-ecommerce",
  },
  {
    id: "3",
    title: "Augmented Reality Smart Home Control",
    description:
      "A cutting-edge UI/UX design for controlling smart home devices through augmented reality, offering intuitive gesture-based interactions.",
    image: "/placeholder.svg?height=300&width=400",
    category: "uiux",
    technologies: ["ARKit", "Unity", "Sketch"],
    link: "https://example.com/ar-smart-home",
  },
  {
    id: "4",
    title: "Predictive Maintenance AI for Industry 4.0",
    description:
      "An advanced AI/ML solution that predicts equipment failures in manufacturing plants, significantly reducing downtime and maintenance costs.",
    image: "/placeholder.svg?height=300&width=400",
    category: "aiml",
    technologies: ["Python", "TensorFlow", "AWS SageMaker"],
    link: "https://example.com/predictive-maintenance",
  },
  {
    id: "5",
    title: "Quantum-Resistant Cryptography Implementation",
    description:
      "A forward-thinking web security solution implementing post-quantum cryptographic algorithms to protect against future quantum computing threats.",
    image: "/placeholder.svg?height=300&width=400",
    category: "website",
    technologies: ["Go", "WebAssembly", "React"],
    link: "https://example.com/quantum-crypto",
  },
  {
    id: "6",
    title: "Neural Interface for Accessibility",
    description:
      "A groundbreaking mobile app that interprets neural signals to control devices, dramatically improving accessibility for individuals with motor impairments.",
    image: "/placeholder.svg?height=300&width=400",
    category: "mobile",
    technologies: ["Swift", "Core ML", "Firebase"],
    link: "https://example.com/neural-interface",
  },
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

  const filterProjects = (category) => {
    return projects.filter((project) => category === "all" || project.category === category)
  }

  return (
    <Layout>
      <section className="portfolio">
        <div className="container">
          <h2 className="section-title">Innovative Portfolio</h2>
          <p className="section-subtitle">Explore our cutting-edge projects across various domains</p>
          <div className="tabs">
            {["all", "mobile", "website", "uiux", "aiml"].map((category) => (
              <button
                key={category}
                className={`tab ${activeTab === category ? "active" : ""}`}
                onClick={() => setActiveTab(category)}
              >
                {category === "aiml" ? "AI/ML" : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="portfolio-grid">
            {filterProjects(activeTab).map((project) => (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className={`portfolio-item ${animatedItems.includes(`project-${project.id}`) ? "animate" : ""}`}
                onClick={() => setSelectedProject(project)}
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
          <div className="cta-container">
            <a href="#contact" className="cta-button">
              Discuss Your Project
            </a>
          </div>
        </div>
        {selectedProject && (
          <div className="modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={() => setSelectedProject(null)}>
                &times;
              </span>
              <img src={selectedProject.image || "/placeholder.svg"} alt={selectedProject.title} />
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="technologies">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        )}
      </section>
    </Layout>

  )
}

export default Portfolio

