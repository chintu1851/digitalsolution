import { useEffect, useState, useRef } from "react"
import { useNavigate } from 'react-router-dom';
import { color, motion, useAnimation } from "framer-motion"
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa"
import { SiKubernetes, SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiNextdotjs } from "react-icons/si"
import "../styles/Hero.css"
import avatar1 from '../images/avatar1.jpg'
import avatar2 from '../images/avatar2.jpg'
import avatar3 from '../images/avatar3.jpg'
import avatar4 from '../images/avatar4.jpg'
import avatar5 from '../images/avatar5.jpg'
import Layout from "../layout/layout"
<<<<<<< HEAD
import bgimage from '../images/bgit.jpg'
=======
import home from '../images/bgit.jpg'
import Button from "./Button";
import { ArrowRight } from "lucide-react"
import ECommerce from "../images/e-commerce.jpg"
import Healthcare from "../images/healthcare.jpg"
import Fintech from "../images/fintech.jpg"
import Harshil from "../images/Harshil.png"
import Chintan from "../images/chintan.png"
import Vishal from "../images/vishal.jpg"
import Zeel from "../images/zeel.png"
import Testimonial from "./Testimonial";

>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const counterControls = useAnimation()
<<<<<<< HEAD
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
=======
  const navigate = useNavigate();

>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
  useEffect(() => {
    setIsVisible(true)
    counterControls.start("visible")
  }, [counterControls])

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <Layout>
      <div className="landing-page">
<<<<<<< HEAD
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-background">
            <img
              src={bgimage}
              alt="Hero Background"
              className="hero-img"
            />
            <div className="hero-overlay" />
          </div>

=======

        <div style={{ 
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          width: '100vw',
          height: '1000px',
          zIndex: '0',
          opacity: 0.2,
          backgroundImage: `url(${home})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="bg-img"
        >
        </div>

        <section className="hero">

>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
          <div className="container hero-content">
            <div className="hero-text">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
<<<<<<< HEAD
                transition={{ duration: 0.4 }}
=======
                transition={{ duration: 0.8 }}
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
                className="hero-title"
              >
                Intuition Engineered. Innovation Delivered
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
<<<<<<< HEAD
                transition={{ duration: 0.4, delay: 0.3 }}
                className="hero-description"
              >
                From brainstorm to breakthroughs, we power progress with innovation that thinks ahead. At Intuiqo, we fuse intuition with technology to craft solutions that don’t just work—they evolve.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.4, delay: 0.6 }}
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
=======
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hero-description"
              >
                We craft innovative software solutions that empower businesses to thrive in the digital age. Our expert
                team combines cutting-edge technology with creative problem-solving to deliver results that exceed
                expectations.
              </motion.p>

              <div className="hero-cta">
                <Button btn={<ArrowRight size={20} />} className="btn" onClick={() => navigate("/portfolio")}>View Our works</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="expertiseId" className="expertise-div">
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              transition={{ duration: 0.4 }}
              className="section-title"
            >
              Our Impact
            </motion.h2>
            <div className="impact-grid">
              <ImpactCard title="Projects Completed" value={100} icon="🚀" />
              <ImpactCard title="Happy Clients" value={30} icon="😊" />
              <ImpactCard title="Years of Experience" value={5} icon="🏆" />
              <ImpactCard title="Team Members" value={15} icon="👥" />
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
              transition={{ duration: 0.4 }}
              className="section-title"
=======
              transition={{ duration: 0.8 }}
              className="expertise-title"
              style={{ fontFamily: 'Header'}}
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
            >
              Our Expertise
            </motion.h2>

<<<<<<< HEAD
            <div className="services-grid">
=======
            <div className="expertise-grid">
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="service-item"
                >
                  <service.icon />
                  <h3>{service.title}</h3>
=======
                  className="expertise-item"
                >
                  <service.icon />
                  <h3 style={{ fontFamily: 'Header' }}>{service.title}</h3>
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Tech Stack Section */}
=======
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
        <section className="tech-stack">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              transition={{ duration: 0.4 }}
              className="section-title"
=======
              transition={{ duration: 0.8 }}
              className="section-title"
              style={{ fontFamily: 'Header'}}
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
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

<<<<<<< HEAD
        {/* Featured Projects Section */}
=======
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
        <section id="portfolio" className="featured-projects">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              transition={{ duration: 0.4 }}
              className="section-title"
=======
              transition={{ duration: 0.8 }}
              className="section-title"
              style={{ fontFamily: 'Header'}}
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
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
<<<<<<< HEAD
                  transition={{ duration: 0.4, delay: index * 0.2 }}
=======
                  transition={{ duration: 0.8, delay: index * 0.2 }}
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
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
<<<<<<< HEAD
              <a href="/portfolio" className="cta-button primary">
                View Full Portfolio
              </a>
=======
              <Button btn={<ArrowRight size={20} />} className="btn" onClick={() => navigate("/portfolio")}>View Our Portfolio</Button>
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Process Section */}
=======
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
        <ProcessSection />

        <section className="testimonials">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="section-title"
              style={{ fontFamily: 'Header'}}
            >
              What Our Clients Say
            </motion.h2>
            <Testimonial />
          </div>
        </section>

        <TeamSection />

<<<<<<< HEAD
       
=======
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
      </div>
    </Layout>
  )
}

<<<<<<< HEAD
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
      transition={{ duration: 0.4 }}
    >
      <div className="impact-icon">{icon}</div>
      <h3 className="impact-value">{count}</h3>
      <p className="impact-title">{title}</p>
    </motion.div>
  )
}

=======
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
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
          transition={{ duration: 0.4 }}
          className="section-title"
          style={{ fontFamily: 'Header'}}
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
              transition={{ duration: 0.4, delay: index * 0.2 }}
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
<<<<<<< HEAD
const teamMembers = [
  { name: "Chintan Patel", role: "CEO", image: avatar1 },
  { name: "Vishal Patel", role: "CTO", image: avatar2 },
  { name: "Zeel Malaviya", role: "Project Manager", image: avatar3 },
  { name: "Harshil Vaghani", role: "Senior Frontend/UIUX Designer", image: avatar4 },
  { name: "Parth Vasoya", role: "Senior Full Stack Developer", image: avatar5 },

];

=======
  const teamMembers = [
    { name: "Vishal Patel", role: "Founder & Lead", image: Vishal },
    { name: "Chintan Patel", role: "Founder", image: Chintan },
    { name: "Harshil Vaghani", role: "Founder & Developer", image: Harshil },
    { name: "Zeel Malaviya", role: "Founder & Analyst", image: Zeel },
  ]
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c

  return (
    <section className="team-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-title"
          style={{ fontFamily: 'Header'}}
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
              transition={{ duration: 0.4}}
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

<<<<<<< HEAD
const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
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
            transition={{ duration: 0.4 }}
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
            transition={{ duration: 0.4 }}
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

=======
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
const services = [
  {
    title: "Custom Software Development",
    description: "We build scalable web applications using cutting-edge technologies and best practices.",
    icon: () => (
      <svg className="expertise-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
<<<<<<< HEAD
    title: "AI & Machine Learning",
=======
    title: "App Development",
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: () => (
      <svg className="expertise-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Data Analytics",
    description: "Scalable cloud infrastructure and DevOps practices for optimal performance.",
    icon: () => (
      <svg className="expertise-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    title: "Business Consulting",
    description: "User-centered design solutions that create engaging and intuitive experiences.",
    icon: () => (
      <svg className="expertise-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
<<<<<<< HEAD
    title: "SEO Services",
=======
    title: "AI & ML",
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
    description: "Intelligent solutions that leverage the power of artificial intelligence.",
    icon: () => (
      <svg className="expertise-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
<<<<<<< HEAD
    title: "IT Consulting",
    description: "Comprehensive security solutions to protect your digital assets.",
=======
    title: "SEO Development",
    description: "Boost your online presence with expert SEO for higher rankings and organic traffic.",
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
    icon: () => (
      <svg className="expertise-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  { name: "React", icon: <FaReact size={50} color="#4a90e2" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} color="#4a90e2" /> },
  { name: "Python", icon: <FaPython size={50} color="#4a90e2" /> },
  { name: "AWS", icon: <FaAws size={50} color="#4a90e2" /> },
  { name: "Docker", icon: <FaDocker size={50} color="#4a90e2" /> },
  { name: "Kubernetes", icon: <SiKubernetes size={50} color="#4a90e2" /> },
  { name: "TypeScript", icon: <SiTypescript size={50} color="#4a90e2" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} color="#4a90e2" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={50} color="#4a90e2" /> },
  { name: "Redis", icon: <SiRedis size={50} color="#4a90e2" /> },
  { name: "GraphQL", icon: <SiGraphql size={50} color="#4a90e2" /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} color="#4a90e2" /> },
]

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with real-time inventory management and AI-powered recommendations.",
    link: "#",
    image: ECommerce,
  },
  {
    title: "Healthcare App",
    description: "Mobile application for remote patient monitoring and telemedicine with integrated AI diagnostics.",
    link: "#",
    image: Healthcare,
  },
  {
    title: "FinTech Dashboard",
    description: "Real-time financial data visualization and analytics platform with predictive modeling capabilities.",
    link: "#",
    image: Fintech,
  },
]

<<<<<<< HEAD
const testimonials = [
  {
    quote:
      "Working with this team has been a game-changer for our business. Their innovative solutions have significantly improved our operational efficiency and customer satisfaction.",
    name: "Robert McGrathy",
    position: "CEO.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote:
      "The mobile app they developed for us has received overwhelmingly positive feedback from our users. Their attention to detail in UI/UX and commitment to quality is truly commendable.",
    name: "Harsh Satani",
    position: "CTO",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    quote:
      "Their cybersecurity solutions have given us peace of mind. We feel confident that our digital assets are well-protected, allowing us to focus on growing our business.",
    name: "Shailesh Patel",
    position: "CEO",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    quote:
      "The AI-powered analytics dashboard they built has transformed how we make decisions. It's intuitive, powerful, and has become an indispensable tool for our entire organization.",
    name: "Meet Boghani",
    position: "Operations Manager",
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

=======
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
