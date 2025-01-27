import React from "react"
import { useParams } from "react-router-dom"  // Import useParams
import { motion } from "framer-motion"

const ServiceDetails = ({ onClose }) => {
  const { serviceId } = useParams()  // Access the dynamic parameter

  // Assuming you have a way to get service data using the serviceId
  const service = getServiceById(serviceId)  // Implement this function to fetch data by serviceId
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="service-details-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="service-details"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{service.title}</h2>
        <div className="service-content">
          <div className="service-img">
            <img
              src={service.details.img || ""}
              alt={service.title}
              width={600}
              height={400}
              layout="responsive"
            />
          </div>
          <div className="service-text">
            {service.details.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ServiceDetails
