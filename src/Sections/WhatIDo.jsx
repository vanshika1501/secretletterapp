import { motion } from "framer-motion";
import { FaCircle, FaTimes } from "react-icons/fa";
import { useState } from "react";
import closeSound from "../assets/fonts/sounds/public_audio_sfx_click_bubble.ogg";
function WhatIDo() {
  const certificates = [
    {
      name: "AI Fundamentals",
      image: "/images/c2.png",
    },
    {
      name: "Generative AI",
      image: "/images/c1.jpg",
    },
    { name:"AI Hackathon",
      image: "/images/c3.jpg"
    }
   
    // Add more here easily
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(null);

  const openModal = (certificate) => {
    setCurrentCertificate(certificate);
    setIsOpen(true);
      new Audio(closeSound).play(); // ✅ Play sound on close
        onClose();
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentCertificate(null);
        new Audio(closeSound).play(); // ✅ Play sound on close
        onClose();

  };

  return (
    <div className="mx-auto max-w-[1248px] x-6 md:px-10 scroll-mt-20 scroll-smooth" id="whatido">
      {isOpen && currentCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className=" bg-purple border-purpdark border-8 rounded-xl p-6 relative w-11/12 max-w-2xl shadow-xl border-purple-600">
            <button
              onClick={closeModal}
              className="absolute -top-5 -right-5 text-3xl border-purpdark border-8 bg-purple p-2 rounded-lg shadow-lg text-purpdark font-bold transition-transform hover:rotate-45 hover:scale-125"
            >
              <FaTimes size={18} />
            </button>
            <h2 className="text-xl font-bold text-center mb-4">{currentCertificate.name}</h2>
            <img
              src={currentCertificate.image}
              alt={currentCertificate.name}
              className="max-h-[75vh] w-full object-contain"
            />
          </div>
        </div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "backOut" }}
        className="text-center  mt-24 text-5xl font-motley mb-4 dark:text-white"
      >
        Highlights
      </motion.h2>

      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "backOut" }}
          className="rounded-3xl flex-1 bg-black"
        >
          <div className="bg-white dark:bg-purple2 h-full border border-black p-7 rounded-3xl transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
            <img src="/illustrations/community.webp" alt="" className="max-w-full mb-6" />

            <div className="flex justify-between items-center w-full">
              {/* Title on the left */}
              <h3 className="text-4xl font-shifty">Community Work</h3>

              {/* Circles on the right */}
              <div className="flex space-x-2">
                <FaCircle className="text-purple" />
                <FaCircle className="text-purple2 dark:text-purple4" />
                <FaCircle className="text-[#905fa1]" />
              </div>
            </div>
            <p>
              Led biometric registrations in a medical camp over one year, volunteered 240+ hours with NSS, and served as Class Representative in B.Tech and M.Tech.
            </p>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "backOut" }}
          className="rounded-3xl flex-1 bg-black"
        >
          <div className="bg-white  dark:bg-purple2 h-full border border-black p-7 rounded-3xl transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
            <img src="/illustrations/trophy.png" alt="" className="max-w-full mb-6" />

            <div className="flex justify-between items-center w-full">
              {/* Title on the left */}
              <h3 className="text-4xl font-shifty">Career Milestones</h3>

              {/* Circles on the right */}
              <div className="flex space-x-2">
                <FaCircle className="text-purple" />
                <FaCircle className="text-purple2 dark:text-purple4" />
                <FaCircle className="text-[#905fa1]" />
              </div>
            </div>
            <p>
              I graduated as the top M.Tech student, earning the Director's Gold Medal.<br></br> In 2024-25, I qualified for GATE CSE, UGC NET CS (with a 99.54% score), and SBI SO.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "backOut" }}
          className="rounded-3xl flex-1 bg-black"
        >
          <div className="bg-white  dark:bg-purple2 h-full border border-black p-7 rounded-3xl transition-all duration-300 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
            <img src="/illustrations/computer.webp" alt="" className="max-w-full mb-6" />

            <div className="flex justify-between items-center w-full">
              {/* Title on the left */}
              <h3 className="text-4xl font-shifty">Cetificates</h3>

              {/* Circles on the right */}
              <div className="flex space-x-2">
                <FaCircle className="text-purple" />
                <FaCircle className="text-purple2 dark:text-purple4" />
                <FaCircle className="text-[#905fa1]" />
              </div>
            </div>

           <div className="flex flex-col space-y-3 max-h-24 overflow-y-scroll scrollbar scrollbar-thumb-[#c8a2c8] scrollbar-track-[#f3e9f7] pr-2">

              {certificates.map((cert, index) => (
                <button
                  key={index}
                  onClick={() => openModal(cert)}
                  className="bg-white border border-purple-400 rounded-lg px-4 py-2 text-purple-700 font-semibold hover:bg-purple-50 text-left"
                >
                  {cert.name}
                </button>
              ))}
            </div>



          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default WhatIDo;
