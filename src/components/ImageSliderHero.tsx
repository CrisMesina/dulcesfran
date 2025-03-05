

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"


interface ImageSliderProps {
  slides:{
    imgURL: string
    linkURL: string
    targetURL: string
  }[]
}

export const ImageSliderHero: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [nextSlide])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div className="relative w-full h-full md:h-[450px] overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <a href={slide.linkURL} target={slide.targetURL}>
                <img src={slide.imgURL || "/placeholder.svg"} alt={`Slide ${index + 1}`} className="w-full rounded-4xl h-full" />
            </a>            
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full"
        aria-label="Previous slide"
      >
        <BsArrowLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full"
        aria-label="Next slide"
      >
        <BsArrowRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
