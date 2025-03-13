import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { services } from "./Services"
import Layout from "../layout/layout"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import "../styles/ServiceDetails.css"
import { motion, AnimatePresence } from "framer-motion";
<<<<<<< HEAD


const ServiceDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
=======
import Button from "./Button";
import { ArrowRight } from "lucide-react"
import { useNavigate } from 'react-router-dom';

const ServiceDetail = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
    const { id } = useParams()
    const service = services.find((s) => s.id === Number.parseInt(id))

    if (!service) {
        return <div>Service not found</div>
    }

    return (
        
        <Layout>
            <div className="service-detail-page">
                {/* Hero Section */}
                <div className="service-hero" style={{ backgroundImage: `url(${service.heroImage || service.image1})` }}>
                    <div className="hero-overlay">

                        <div className="hero-content">
                            <motion.h2
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="section-title"
                            >
                                <h1>{service.title}</h1>
                            </motion.h2>

                            <p className="hero-description">{service.description}</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="service-content">
                    {/* Overview and Technologies Section Combined */}
                    <div className="overview-tech-container">
                        {/* Overview Section */}
                        <section className="service-overview">
                            <h2>The Important Business Pillar</h2>
                            <p className="overview-description">{service.background}</p>
                            <div className="overview-grid">
                                {service.technologies.slice(0, 3).map((tech, index) => (
                                    <div key={index} className="overview-item">
                                        <h3>{tech.name}</h3>
                                        <p>{tech.description || "Leveraging cutting-edge technology to deliver exceptional results."}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Technologies Section */}
                        <section className="service-technologies">
                            <h2>Technologies We Use</h2>
                            <div className="tech-grid">
                                {service.technologies.map((tech, index) => (
                                    <div key={index} className="tech-card">
                                        <span className="tech-number">0{index + 1}</span>
                                        <div className="tech-content">
<<<<<<< HEAD
                                            <h3>{tech.name}</h3>
                                            <p>{tech.description}</p>
=======
                                            <p>{tech.name}</p>
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Features Section with new design */}
                    <section className="service-features">
                        <h2>Key Features</h2>
                        <div className="features-grid">
                            {service.features.map((feature, index) => (
                                <div key={index} className="feature-card">
                                    <div className="feature-header">
                                        <span className="feature-badge">{`0${index + 1}`}</span>
                                        <h3>{feature.name}</h3>
                                    </div>
                                    <div className="feature-divider"></div>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* What We Offer Section */}
                    <section className="service-offer">
                        <div className="offer-grid">
                            <div className="offer-content">
                                <h2>What We Offer</h2>
                                <p>{service.whatWeOffer}</p>
<<<<<<< HEAD
                                <Link to="/contact" className="cta-button">
                                    Get Started
                                    <ChevronRight size={20} />
                                </Link>
=======
                                <Button btn={<ArrowRight size={20} />} className="btn" onClick={() => navigate("/contact")}>Get Started</Button>
>>>>>>> c441da36c921aea4674fdd38aeb69a619086752c
                            </div>
                            <div className="offer-image">
                                <img src={service.image2 || "/placeholder.svg"} alt={service.title} />
                            </div>
                        </div>
                    </section>

                    {/* Growth Section */}
                    <section className="growth-section">
                        <div className="growth-content">
                            <h2>Grow Your Business with {service.title}</h2>
                            <p>Transform your digital presence and achieve sustainable growth with our expert services.</p>
                       
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default ServiceDetail

