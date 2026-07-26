import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./hero.css";

export default function Hero() {
  const loaderRef = useRef();
  const videoRef = useRef();
  const contentRef = useRef();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const counter = { value: 0 };

    const tl = gsap.timeline();

    // Move video
    tl.to(
      videoRef.current,
      {
        left: "calc(100% - 420px)",
        duration: 3,
        ease: "power2.inOut",
      },
      0
    );

    // Counter
    tl.to(
      counter,
      {
        value: 100,
        duration: 3,
        ease: "none",

        onUpdate: () => {
          setProgress(Math.floor(counter.value));
        },
      },
      0
    );

    // Fade Loader
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
    });

    // Hide Loader
    tl.set(loaderRef.current, {
      display: "none",
    });

    // Reveal Hero
    // Show Hero Container
    tl.set(contentRef.current, {
      opacity: 1,
    });

    // Animate each line
    tl.to(
      ".experienceText",
      {
        x: "0%",
        duration: 1,
        ease: "power4.out",
      },
      "-=0.2"
    );

    tl.to(
      ".magicText",
      {
        x: "0%",
        duration: 1,
        ease: "power4.out",
      },
      "-=0.75"
    );

    tl.to(
      ".innovationText",
      {
        x: "0%",
        duration: 1,
        ease: "power4.out",
      },
      "-=0.75"
    );
  }, []);

  return (
    <section className="hero">
      {/* Loader */}

      <div className="loaderOverlay" ref={loaderRef}>
        <h1 className="loaderTitle">LIVESPOT</h1>

        <h2 className="loaderCounter">{progress}%</h2>
      </div>

      {/* Video */}

      <div className="heroVideo" ref={videoRef}>
        <video autoPlay muted loop playsInline>
          <source src="/preview.mp4" />
        </video>
      </div>

      {/* Hero */}

      {/* Hero */}

      <div className="heroContent" ref={contentRef}>
        <h1>
          <div className="line experienceLine">
            <div className="mask">
              <span className="experienceText">EXPERIENCE</span>
            </div>
          </div>

          <div className="line magicLine">
            <div className="mask">
              <span className="magicText">
                THE <span className="magicWord">MAGIC</span>
              </span>
            </div>
          </div>

          <div className="line innovationLine">
            <div className="mask">
              <span className="innovationText">OF INNOVATION</span>
            </div>
          </div>
        </h1>
      </div>
    </section>
  );
}
