"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa"
import { SiKubernetes, SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiNextdotjs } from "react-icons/si"
import "../styles/Hero.css"
import Layout from "../layout/layout"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)
  const counterControls = useAnimation()

  useEffect(() => {
    setIsVisible(true)
    counterControls.start("visible")
  }, [counterControls])

  return (
    <Layout>
       <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Background"
            className="hero-img"
          />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Transforming Ideas into Digital Reality
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-description"
            >
              We craft innovative software solutions that empower businesses to thrive in the digital age. Our expert
              team combines cutting-edge technology with creative problem-solving to deliver results that exceed
              expectations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-cta"
            >
              <a href="/services" className="cta-button primary">
                Our Services
              </a>
              <a href="#portfolio" className="cta-button secondary">
                View Projects
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="scroll-indicator"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </section>

      {/* Dynamic Impact Section */}
      <section className="impact-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            Our Impact
          </motion.h2>
          <div className="impact-grid">
            <ImpactCard title="Projects Completed" value={150} icon="🚀" />
            <ImpactCard title="Happy Clients" value={50} icon="😊" />
            <ImpactCard title="Years of Experience" value={10} icon="🏆" />
            <ImpactCard title="Team Members" value={25} icon="👥" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            Our Expertise
          </motion.h2>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="service-item"
              >
                <service.icon />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            Our Tech Stack
          </motion.h2>
          <p className="tech-stack-description">
            We leverage cutting-edge technologies to build robust and scalable solutions
          </p>
          <div className="infinite-loop-slider">
            <div className="slide-track">
              {[...techStack, ...techStack].map((tech, index) => (
                <div key={index} className="slide">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="portfolio" className="featured-projects">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            Featured Projects
          </motion.h2>
          <p className="projects-description">Discover how we've helped businesses achieve their digital goals</p>

          <div className="project-blocks">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="project-block"
              >
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="portfolio-cta">
            <a href="/portfolio" className="cta-button primary">
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

        <section className="testimonials">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="section-title"
            >
              What Our Clients Say
            </motion.h2>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </Layout>
  )
}

const ImpactCard = ({ title, value, icon }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60 fps
    const totalFrames = Math.round(duration / frameDuration)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      setCount(Math.floor(value * progress))

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [value])

  return (
    <motion.div
      className="impact-card"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="impact-icon">{icon}</div>
      <h3 className="impact-value">{count}</h3>
      <p className="impact-title">{title}</p>
    </motion.div>
  )
}

const ProcessSection = () => {
  const processes = [
    { title: "Discovery", description: "We start by understanding your business goals and challenges." },
    { title: "Planning", description: "Our team creates a detailed roadmap for your project." },
    { title: "Development", description: "We build your solution using cutting-edge technologies." },
    { title: "Testing", description: "Rigorous testing ensures a high-quality product." },
    { title: "Deployment", description: "We launch your solution and provide ongoing support." },
  ]

  return (
    <section className="process-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Our Process
        </motion.h2>
        <div className="process-timeline">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              className="process-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="process-content">
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TeamSection = () => {
  const teamMembers = [
    { name: "John Doe", role: "CEO & Founder", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Jane Smith", role: "CTO", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Mike Johnson", role: "Lead Developer", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Emily Brown", role: "UX Designer", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  ]

  return (
    <section className="team-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Meet Our Team
        </motion.h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-member"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="team-member-image" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Contact Information</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Tech Street, Silicon Valley, CA 94000</p>
          </motion.div>
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="cta-button primary">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    title: "Web Development",
    description: "We build scalable web applications using cutting-edge technologies and best practices.",
    icon: () => (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: () => (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps practices for optimal performance.",
    icon: () => (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 10H6C3.79086 10 2 11.7909 2 14C2 16.2091 3.79086 18 6 18H18C20.2091 18 22 16.2091 22 14C22 11.7909 20.2091 10 18 10Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 10V8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8V10"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that create engaging and intuitive experiences.",
    icon: () => (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 14C8.5 15.5 10 17 12 17C14 17 15.5 15.5 16 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="9" cy="9" r="1" fill="currentColor" />
        <circle cx="15" cy="9" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions that leverage the power of artificial intelligence.",
    icon: () => (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    icon: () => (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L3 7V12C3 16.97 7.03 21.5 12 22C16.97 21.5 21 16.97 21 12V7L12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 11C10.89 11 10 11.89 10 13C10 14.11 10.89 15 12 15C13.11 15 14 14.11 14 13C14 11.89 13.11 11 12 11Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

const techStack = [
  { name: "React", icon: <FaReact size={50} color="#4a90e2"/> },
  { name: "Node.js", icon: <FaNodeJs size={50} color="#4a90e2"/> },
  { name: "Python", icon: <FaPython size={50} color="#4a90e2"/> },
  { name: "AWS", icon: <FaAws size={50} color="#4a90e2"/> },
  { name: "Docker", icon: <FaDocker size={50} color="#4a90e2"/> },
  { name: "Kubernetes", icon: <SiKubernetes size={50} color="#4a90e2"/> },
  { name: "TypeScript", icon: <SiTypescript size={50} color="#4a90e2"/> },
  { name: "MongoDB", icon: <SiMongodb size={50} color="#4a90e2"/> },
  { name: "PostgreSQL", icon: <SiPostgresql size={50} color="#4a90e2"/> },
  { name: "Redis", icon: <SiRedis size={50} color="#4a90e2"/> },
  { name: "GraphQL", icon: <SiGraphql size={50} color="#4a90e2"/> },
  { name: "Next.js", icon: <SiNextdotjs size={50} color="#4a90e2"/> },
]

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with real-time inventory management and AI-powered recommendations.",
    link: "#",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Healthcare App",
    description: "Mobile application for remote patient monitoring and telemedicine with integrated AI diagnostics.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "FinTech Dashboard",
    description: "Real-time financial data visualization and analytics platform with predictive modeling capabilities.",
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
]

const testimonials = [
  {
    quote:
      "Working with this team has been a game-changer for our business. Their innovative solutions have significantly improved our operational efficiency and customer satisfaction.",
    name: "Sarah Johnson",
    position: "CEO, TechInnovate Inc.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote:
      "The mobile app they developed for us has received overwhelmingly positive feedback from our users. Their attention to detail in UI/UX and commitment to quality is truly commendable.",
    name: "Michael Chen",
    position: "Product Manager, HealthTech Solutions",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    quote:
      "Their cybersecurity solutions have given us peace of mind. We feel confident that our digital assets are well-protected, allowing us to focus on growing our business.",
    name: "Emily Rodriguez",
    position: "CTO, SecureNet Systems",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    quote:
      "The AI-powered analytics dashboard they built has transformed how we make decisions. It's intuitive, powerful, and has become an indispensable tool for our entire organization.",
    name: "David Thompson",
    position: "Data Science Lead, InsightAI Corp",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
]

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentIndex * sliderRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
  }, [currentIndex])

  return (
    <div className="testimonial-slider-container">
      <div className="testimonial-slider" ref={sliderRef}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <div className="testimonial-content">
              <div className="quote-icon">❝</div>
              <p>{testimonial.quote}</p>
              <div className="testimonial-author">
                <img src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.position}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

