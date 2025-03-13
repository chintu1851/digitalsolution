import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const Button = ({ onClick, children, className = "", btn }) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        style={{
            position: 'relative',
            zIndex: '10',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
      >
        <motion.span
          initial={{ x: 10 }}
          variants={{
            hover: { x: 0 },
          }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          variants={{
            hover: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{
            marginLeft: '4px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {btn}
        </motion.div>
      </motion.div>
    </motion.button>
  )
}

export default Button

