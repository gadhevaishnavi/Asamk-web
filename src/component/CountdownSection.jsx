import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import "../assets/css/CountDown.css";
import backgroundImage from "../assets/images/countimg.jpeg"

const countersData = [
  { end: 22, suffix: "+", title: "Varieties of Fishes" },
  { end: 15, suffix: "+", title: "Countries" },
  { end: 50, suffix: "+", title: "Suppliers" },
];

const CountdownSection = () => {
  const [isInView, setIsInView] = useState(false);  
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="image-counter-overlay"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div className="overlay-content" style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "20px",
        borderRadius: "10px",
        display: "flex",
        gap: "40px"
      }}>
        {countersData.map((counter, index) => (
          <div key={index} className="counter-item" style={{ textAlign: "center", color: "#fff" }}>
            {isInView && (
              <CountUp
                start={0}
                end={counter.end}
                duration={3}
                suffix={counter.suffix}
                className="counter-number"
              />
            )}
            <div className="counter-title" style={{ marginTop: "10px", fontSize: "1.2rem" }}>{counter.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountdownSection;
