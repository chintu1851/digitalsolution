import { useState, useEffect } from "react";
import "../styles/Portfolio.css";
import mobile from "../images/mobile.jpg";
import repairmate from "../images/repairmate.jpg";
import movie from "../images/movie.jpg";
import blockchain from "../images/blockchain.jpg";
import mantraflex from "../images/mantraflex.jpg";
import fotogan from "../images/fotogan.jpg";
import web from "../images/web.jpg";
import tim from "../images/tim.jpg";
import climate from "../images/climate.jpg";
import ios from "../images/ios.jpg";
import mobileapp from "../images/MobileApp.jpg";
import uiux from "../images/UIUX.jpg";
import aiml from "../images/AIML.jpg";
import webdev from "../images/webdevelopment.jpg";
import Layout from "../layout/layout";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import web1 from '../images/web1.png'
const projects = [
  {
    id: "1",
    title: "Mobile Application development",
    description:
      "An intelligent mobile app that creates personalized workout and nutrition plans, adapting to user progress and preferences in real-time.",
    image: mobileapp,
    category: "mobile",
    link: "https://example.com/fitness-app",
  },
  {
    id: "2",
    title: "Web Application development",
    description:
      "A decentralized marketplace leveraging blockchain technology for secure, transparent transactions and supply chain management.",
    image: webdev,
    category: "website",
    link: "https://example.com/blockchain-ecommerce",
  },
  {
    id: "3",
    title: "UI/UX design",
    description:
      "A cutting-edge UI/UX design for controlling smart home devices through augmented reality, offering intuitive gesture-based interactions.",
    image: uiux,
    category: "uiux",
    link: "https://example.com/ar-smart-home",
  },
  {
    id: "4",
    title: "AI/ML",
    description:
      "An advanced AI/ML solution that predicts equipment failures in manufacturing plants, significantly reducing downtime and maintenance costs.",
    image: aiml,
    category: "aiml",
    link: "https://example.com/predictive-maintenance",
  },
];

const projectData = {
  projects: [
    {
      id: "mobile-app-1",
      category: "mobile",
      title: "Mobile Application Development",
      description:
        "An intelligent mobile app that creates personalized workout and nutrition plans, adapting to user progress and preferences in real-time.",
      image: mobile,
      technologies: ["React Native", "TensorFlow", "Node.js"],
      link: "https://example.com/fitness-app",
      detailImage:''

    },
    {
      id: "repairmate-ios",
      category: "mobile",
      title: "RepairMate iOS App",
      description:
        "A user-friendly iOS app for booking mobile repair services, connecting customers with local technicians in real-time.",
      image: repairmate,
      technologies: ["Swift", "Firebase", "CoreData"],
      link: "https://example.com/repairmate-ios",
        detailImage:''
    },
    {
      id: "movie-ticket-booking",
      category: "mobile",
      title: "Movie Ticket Booking App (Cross-Platform)",
      description:
        "A cross-platform app allowing users to book movie tickets, browse showtimes, and view theater details.",
      image: movie,
      technologies: ["Flutter", "Dart", "Firebase"],
      link: "https://example.com/movie-ticket-booking",
      detailImage:''
    },
    {
      id: "blockchain-ecommerce",
      category: "website",
      title: "Blockchain E-commerce Platform",
      description:
        "A decentralized marketplace leveraging blockchain technology for secure, transparent transactions and supply chain management.",
      image: blockchain,
      technologies: ["Ethereum", "React", "Solidity"],
      link: "https://example.com/blockchain-ecommerce",
      detailImage:''
    },
    {
      id: "mantraflex",
      category: "website",
      title: "Mantraflex - Physiotherapy Appointment Booking Website",
      description:
        "A website designed for booking physiotherapy appointments, offering a seamless experience for both customers and physiotherapists.",
      image: mantraflex,
      technologies: ["React", "Node.js", "Firebase"],
      link: "https://example.com/mantraflex",
      detailImage:web1
    },
    {
      id: "fotogan-consulting",
      category: "website",
      title: "Fotogan Digital Consulting App (WordPress)",
      description:
        "A WordPress-based platform providing digital consulting services, offering user-friendly interfaces for clients to book consultations.",
      image: fotogan,
      technologies: ["WordPress", "PHP", "MySQL"],
      link: "https://example.com/fotogan-consulting",
      detailImage:''
    },
    {
      id: "b12give",
      category: "website",
      title: "B12Give - React Native, MUI & Bootstrap",
      description:
        "A React Native-based mobile application for surplus food recovery, using MUI and Bootstrap for a responsive user interface.",
      image: web,
      technologies: ["React Native", "MUI", "Bootstrap"],
      link: "https://example.com/b12give",
      detailImage:''
    },
    {
      id: "tim-hortons-redesign",
      category: "uiux",
      title: "Tim Horttons Redesign",
      description:
        "A complete redesign of Tim Hortons' mobile app UI, focusing on improving user experience and visual aesthetics.",
      image: tim,
      technologies: ["Figma", "Sketch", "Adobe XD"],
      link: "https://example.com/tim-hortons-redesign",
      detailImage:''
    },
    {
      id: "climate-app",
      category: "uiux",
      title: "Climate App UI/UX Design",
      description:
        "A UI/UX design for a climate app that provides real-time weather and environmental data with an interactive, user-friendly interface.",
      image: climate,
      technologies: ["Figma", "Adobe XD", "Sketch"],
      link: "https://example.com/climate-app",
      detailImage:''
    },
    {
      id: "ecosmart-ios-watch-app",
      category: "uiux",
      title: "EcoSmart iOS Watch App Design",
      description:
        "A UI/UX design for an iOS watch app focused on sustainable living, offering users tips and eco-friendly alternatives.",
      image: ios,
      technologies: ["Figma", "Sketch", "Illustrator"],
      link: "https://example.com/ecosmart-ios-watch-app",
      detailImage:''
    },
  ],
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); // For category-wise projects
  const [selectedImage, setSelectedImage] = useState(null); // For image modal
  const [animatedItems, setAnimatedItems] = useState([]);
 useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedItems((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".portfolio-item").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project); // Set the selected project
  };

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the selected image
  };

  const handleClose = () => {
    setSelectedCategory(null);
    setSelectedProject(null);
    setSelectedImage(null); // Reset selected image
  };

  const getCategoryProjects = (category) => {
    return projectData.projects.filter(
      (project) => project.category.toLowerCase() === category.toLowerCase()
    );
  };

  return (
    <Layout>
      <section className="portfolio">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="section-title"
          >
            Innovative Portfolio
          </motion.h2>
          <p className="section-subtitle">
            Explore our cutting-edge projects across various domains
          </p>
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className={`portfolio-item ${
                  animatedItems.includes(`project-${project.id}`) ? "animate" : ""
                }`}
                onClick={() => handleCategoryClick(project.category)} // Handle category click
              >
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="portfolio-item-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for category-wise projects */}
        {selectedCategory && (
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
              <button className="close-btn" onClick={handleClose}>
                <X size={24} />
              </button>
              <div className="dialog-box">
                <h2>Projects</h2>
                <div className="samples">
                  {getCategoryProjects(selectedCategory).map((project, index) => (
                    <div
                      key={index}
                      className="card"
                      onClick={() => handleImageClick(project.detailImage)} // Handle image click
                    >
                      <div className="card-img">
                        <img src={project.image || "/placeholder.svg"} alt={project.title} />
                      </div>
                      <div className="card-content">
                        <h3>{project.title}</h3>
                        <div className="skills">
                          {project.technologies.map((tech, techIndex) => (
                            <div key={techIndex} className="skill">
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Modal for selected image */}
        {selectedImage && (
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
              <button className="close-btn" onClick={handleClose}>
                <X size={24} />
              </button>
              <div className="dialog-box">
                <div className="samples">
                  <div className="card">
                    <div className="card-img">
                      <img src={selectedImage} alt="Selected Project" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>
    </Layout>
  );
};

export default Portfolio;