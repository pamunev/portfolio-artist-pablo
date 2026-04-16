import { useEffect, useState } from "react";
import { heroSlides } from "../data";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentSlide = heroSlides[currentIndex];

  return (
    <div className="carousel-card">
      <div className="carousel-image-wrap">
        <img
          src={currentSlide.image}
          alt={currentSlide.alt}
          className="carousel-image"
        />
        <div className="carousel-caption">
          <p>{currentSlide.caption}</p>
        </div>
      </div>

      <div className="carousel-controls">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.image}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
