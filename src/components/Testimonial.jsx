import React from "react"
import { useState, useEffect, useRef } from "react"
import "../styles/Testimonials.css"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Avatar from "../images/user.png"

const testimonials = [
  {
    id: 1,
    content: "Working with this team has been a game-changer for our business. Their innovative solutions have significantly improved our operational efficiency and customer satisfaction.",
    name: "Robert McGrathy",
    role: "CEO at TMZ",
    avatar:
      "",
    bg: "rgba(216, 191, 216, 0.2)",
    color: "rgb(181, 141, 181)"
  },
  {
    id: 2,
    content: "The mobile app they developed for us has received overwhelmingly positive feedback from our users. Their attention to detail in UI/UX and commitment to quality is truly commendable.",
    name: "Harsh Satani",
    role: "Founder of MantraFlex",
    avatar:
      "",
    bg: "rgba(143, 188, 139, 0.2)",
    color: "rgb(121, 169, 117)"
  },
  {
    id: 3,
    content: "Their cybersecurity solutions have given us peace of mind. We feel confident that our digital assets are well-protected, allowing us to focus on growing our business.",
    name: "Shailesh Patel",
    role: "CEO",
    avatar:
      "",
    bg: "rgba(255, 160, 122, 0.2)",
    color: "rgb(215, 125, 90)"
  },
  {
    id: 4,
    content: "The AI-powered analytics dashboard they built has transformed how we make decisions. It's intuitive, powerful, and has become an indispensable tool for our entire organization.",
    name: "Meet Boghani",
    role: "Operations Manager",
    avatar:
      "",
    bg: "rgba(100, 149, 237, 0.2)",
    color: "rgb(72, 115, 194)"
  }
]

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [style, setStyle] = useState(430);
  const slidesPerView = 2
  const totalSlides = Math.ceil(testimonials.length / slidesPerView)
  const slideWidth = 430;

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleNextSlide()
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [isAnimating])

  useEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setDimensions({ width, height });
      setStyle(dimensions.width)
    }
  }, []);

  const handleNextSlide = () => {
    if (!isAnimating) {
      const newSlide = (currentSlide + 1) % totalSlides;
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
      setStyle(newSlide === 0 ? 0 : -(newSlide * slideWidth));
      // setStyle(style - 430)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const handlePrevSlide = () => {
    if (!isAnimating) {
      const newSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
      setStyle(newSlide === totalSlides - 1 ? -(newSlide * slideWidth) : -(newSlide * slideWidth));
      // setStyle(style + 430)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  return (
    <section className="testimonialSection">
      <div className="sliderContainer">
        <button
          className="navButton prevButton"
          onClick={handlePrevSlide}
          aria-label="Previous testimonials"
        >
          <ChevronLeft />
        </button>

        <div className="sliderWrapper">
          <div
            className="slider"
            style={{ transform: `translateX(${style}px)`, transition: "transform 0.5s ease-in-out" }}
            // style={{
            //   transform: `translateX(${style}px)`,
            // }}
          >
            {testimonials.map((testimonial) => (
              <div ref={divRef} key={testimonial.id} className="testimonialCard" style={{ backgroundColor: testimonial.bg}}>
                <div className="quoteIcon" style={{ color: testimonial.color}}><Quote /></div>
                <p className="content">{testimonial.content}</p>
                <div className="author">
                  <img
                    src={Avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="avatar"
                  />
                  <div className="authorInfo">
                    <h3 className="name" style={{ color: testimonial.color}}>{testimonial.name}</h3>
                    <p className="role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`navButton nextButton`}
          onClick={handleNextSlide}
          aria-label="Next testimonials"
        >
          <ChevronRight />
        </button>

        <div className="dots">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "activeDot" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial

