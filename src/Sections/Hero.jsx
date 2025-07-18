import { useEffect, useRef } from "react";
import { throttle } from "lodash";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import downloader from "../helpers/downloader";

function HeroSection() {
  const characterRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousemove", throttle(handleMouseMovement, 10));
    return () => window.removeEventListener("mousemove", handleMouseMovement);
  }, []);

  const handleMouseMovement = (e) => {
    const rect = characterRef.current.getBoundingClientRect();
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    leftEyeRef.current.style.transform = `rotate(${90 + angleDeg}deg)`;
    rightEyeRef.current.style.transform = `rotate(${90 + angleDeg}deg)`;
  };

  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  };

  return (
    <section className="flex flex-col md:flex-row justify-between mx-auto max-w-[1248px] pt-24 md:pt-24 px-6 md:px-8">
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="max-w-xl"
      >
        <p className="text-3xl text-description font-shifty md:text-lg lg:text-3xl">
          Hey There! I'm
        </p>
        <h1 className="text-4xl md:text-6xl font-shifty my-5 md:leading-[75px]">
          <TypeAnimation
            sequence={[
              "Vanshika Sharma",
              2000,
              "Software Developer,",
              2000,
              "AI Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={30}
            repeat={Infinity}
            cursor={true}
            className="text-purple"
            style={{ display: "inline-block" }}
          />
        </h1>
        <p className="text-description font-shifty text-3xl mb-9 md:text-lg lg:text-3xl">
          crafting secure, scalable applications and exploring the power of AI
          to build smarter tech for tomorrow.
        </p>
        <a className="inline-block rounded-3xl bg-purple3 cursor-pointer" href="#contact">
          <span
            onClick={downloader}
            className="flex items-center gap-2 w-full h-full bg-purple border border-purple3 px-6 py-3 rounded-3xl lg:text-lg font-semibold transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2"
          >
            Download Resume <FaDownload />
          </span>
        </a>
      </motion.div>

      {/* Right Illustration Section */}
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-1/2 md:w-full md:-mt-16 mx-auto flex items-center justify-center"
      >
        <div className="relative">
          {/* Character Image with Blur Effect */}
          <img
            src="/illustrations/vanshika.png"
            alt="Vanshika Character"
            loading="lazy"
            className="select-none blur-sm transition-all duration-500 ease-in-out"
            onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
            ref={characterRef}
          />

          {/* Left Eye */}
          <img
            src="/illustrations/character_eye.png"
            alt=""
            loading="lazy"
            className="absolute top-[45%] left-[40%] select-none w-[10%] md:w-[7%] lg:w-auto"
            ref={leftEyeRef}
          />

          {/* Right Eye */}
          <img
            src="/illustrations/character_eye.png"
            alt=""
            loading="lazy"
            className="absolute top-[45%] right-[40%] select-none w-[10%] md:w-[7%] lg:w-auto"
            ref={rightEyeRef}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
