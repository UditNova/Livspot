import { useState } from "react";
import "./carousel.css";

const SLIDES = [
  {
    id: 1,
    title: "Graphic Designer at Work",
    url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Gaming Setup",
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Developer Workspace",
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Creative Studio",
    url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const getCardState = (index) => {
    if (index === currentIndex) return "active";
    if (index === currentIndex + 1) return "next";
    if (index < currentIndex) return "exit-left";
    return "hidden-right";
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-stage">
        {SLIDES.map((slide, index) => {
          const stateClass = getCardState(index);
          return (
            <div key={slide.id} className={`slide-card ${stateClass}`}>
              <img src={slide.url} alt={slide.title} className="slide-image" />
            </div>
          );
        })}

        {/* Controls Overlay inside Active Frame */}
        <div className="controls-overlay">
          <button
            className="control-btn"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous Slide"
          >
            ←
          </button>

          <div className="counter-badge">
            {currentIndex + 1} / {SLIDES.length}
          </div>

          <button
            className="control-btn"
            onClick={handleNext}
            disabled={currentIndex === SLIDES.length - 1}
            aria-label="Next Slide"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
