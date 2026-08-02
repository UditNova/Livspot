import { useEffect, useRef } from "react";
import "./about.css";
import Carousel from "./Carousel";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = sectionRef.current.querySelectorAll(".reveal-line");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      {/* Full Width Top Title Row */}
      <div className="who-we-wrapper">
        <h1 className="who-we-text">
          <span className="mask-wrapper reveal-line">
            <span className="heading-line outlined">WHO WE</span>
          </span>
        </h1>
      </div>

      {/* Main Content Layout */}
      <div className="about-container">
        {/* Left Column: Heading Continuation & Paragraphs */}
        <div className="about-left">
          <h2 className="are-heading">
            <span
              className="mask-wrapper reveal-line"
              style={{ transitionDelay: "0.15s" }}
            >
              <span className="heading-line solid">ARE —</span>
            </span>
          </h2>

          {/* Paragraph 1 */}
          <div className="body-paragraph">
            <div
              className="mask-wrapper reveal-line"
              style={{ transitionDelay: "0.3s" }}
            >
              <p>
                Livespot is a 360 <em>creative solutions</em> company of the
                digital era, unified by a passion for{" "}
                <em>developing disruptive ideas</em>. We turn consumers into
                fans through <em>human-centered storified experiences</em>,
                engagement, and entertainment.
              </p>
            </div>
            <div
              className="mask-wrapper reveal-line"
              style={{ transitionDelay: "0.4s" }}
            >
              <p>
                <em>Our work</em> cuts across Media & Advertising, Experiential
                marketing, Audio/Visual
                <em> production</em>, Digital marketing & Tech innovation, and
                Entertainment.
              </p>
            </div>
          </div>

          {/* Paragraph 2 */}
          <div className="body-paragraph">
            <div
              className="mask-wrapper reveal-line"
              style={{ transitionDelay: "0.5s" }}
            >
              <p>
                <em>We were born</em> out of the desire to do the impossible.
                With every project and endeavour we undertake, we go{" "}
                <em>out of our way</em> to raise the bar, hop over it, and{" "}
                <em>raise it even higher</em>.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Embedded Image Slider */}
        <div className="about-right">
          <Carousel />
        </div>
      </div>
    </section>
  );
}
