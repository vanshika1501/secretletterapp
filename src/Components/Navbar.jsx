import { useEffect, useState } from "react";
import ContactPopup from "./ContactPopUp";
import MusicIcon from '/illustrations/music.svg'; 
import { FaHeadphones } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion"; // for animation

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

useEffect(() => {
  const originalStyle = window.getComputedStyle(document.body).overflowY;
  document.body.style.overflowY = isToggled || isContactOpen ? "hidden" : originalStyle;

  return () => {
    document.body.style.overflowY = originalStyle;
  };
}, [isToggled, isContactOpen]);

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-purple/50 backdrop-blur-lg flex items-center justify-between px-4 py-4">

       <div>
  <a href="#">
    <img
      src="/logo2.png"
      alt="Vanshika Sharma"
      className="w-[180px] sm:w-[180px] md:w-[200px] lg:w-[220px] hover:opacity-90 transition-opacity duration-300"
    />
  </a>
</div>

        <div>
          {/* Desktop Navbar */}
          <div className="hidden md:flex space-x-5 text-lg font-semibold underline-offset-8">
            <a className="cursor-pointer hover:underline" href="#aboutme">About</a>
            <a className="cursor-pointer hover:underline" href="#whatido">Achievements</a>
            <a className="cursor-pointer hover:underline" href="#projects">Projects</a>
            <a className="cursor-pointer hover:underline" href="#techstack">Skills</a>
            <a className="cursor-pointer hover:underline" href="#experience">Experience</a>
            <a className="cursor-pointer hover:underline" onClick={() => setIsContactOpen(true)}>Connect</a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden relative z-20">
            <button className="flex flex-col space-y-1.5" onClick={() => setIsToggled(!isToggled)} aria-label="Menu">
              <span className={`w-8 h-1 rounded bg-coal duration-300 origin-top-left ${isToggled ? "rotate-45" : ""}`}></span>
              <span className={`w-6 h-1 rounded bg-coal duration-300 block ml-auto ${isToggled ? "opacity-0" : ""}`}></span>
              <span className={`w-8 h-1 rounded bg-coal duration-300 origin-bottom-left ${isToggled ? "-rotate-45" : ""}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isToggled && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-screen w-screen bg-white flex flex-col items-center justify-center text-2xl font-semibold underline-offset-8 z-40"
          >
            <a className="cursor-pointer hover:underline" href="#aboutme" onClick={() => setIsToggled(false)}>About</a>
            <a className="cursor-pointer hover:underline" href="#whatido" onClick={() => setIsToggled(false)}>Achievements</a>
            <a className="cursor-pointer hover:underline" href="#projects" onClick={() => setIsToggled(false)}>Projects</a>
            <a className="cursor-pointer hover:underline" href="#techstack" onClick={() => setIsToggled(false)}>Skills</a>
            <a className="cursor-pointer hover:underline" href="#experience" onClick={() => setIsToggled(false)}>Experience</a>
            <a className="cursor-pointer hover:underline" onClick={() => {
              setIsContactOpen(true);
              setIsToggled(false);
            }}>Connect</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Popup */}
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}

export default Navbar;
