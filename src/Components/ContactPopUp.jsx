import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import closeSound from "../assets/fonts/sounds/public_audio_sfx_click_bubble.ogg";
import { SiLeetcode, SiX } from "react-icons/si";

function ContactPopup({ isOpen, onClose }) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsLeaving(false);
      new Audio(closeSound).play(); // ✅ Play sound on open
    } else if (shouldRender) {
      setIsLeaving(true);
      setTimeout(() => {
        setShouldRender(false);
      }, 200);
    }
  }, [isOpen]);

  const handleClose = () => {
    new Audio(closeSound).play(); // ✅ Play sound on close
    onClose();
  };

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 ">
      <div className={`relative bg-purple border-purpdark border-8 p-12 rounded-3xl shadow-2xl w-[95%] max-w-2xl text-center ${isLeaving ? "animate-fade-out" : "animate-fade-in"}`}>

        {/* ❌ Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-5 -right-5 text-3xl border-purpdark border-8 bg-purple p-2 rounded-lg shadow-lg text-purpdark font-bold transition-transform hover:rotate-45 hover:scale-125"
          aria-label="Close"
        >
          <AiOutlineClose className="text-2xl font-extrabold" />
        </button>

        {/* 💜 Heading */}
        <h2 className="text-3xl font-motley font-bold mb-6 bg-purple2 text-purple3 shadow-lg p-3 rounded-3xl">
          ~say hello!~
        </h2>

        {/* 📜 Description */}
        <p className="text-black text-xl font-motley mb-8">
          Great tech starts with great conversations — I’m all ears!
        </p>

        {/* 🔗 Social Icons */}
       <div className="flex items-center justify-center space-x-8 text-4xl sm:text-5xl">
          <a href="https://linkedin.com/in/vanshika1501" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#6e5e9c] transition-transform duration-300  hover:scale-150" />
          </a>
          <a href="https://github.com/vanshika1501" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-[#6e5e9c] transition-transform duration-300  hover:scale-150" />
          </a>

          <a href="https://x.com/vanshika__says" target="_blank" rel="noopener noreferrer">
            <SiX className="text-[#6e5e9c] transition-transform duration-300  hover:scale-150" />
          </a>

          <a href="https://leetcode.com/u/Vanshika_1501/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="text-[#6e5e9c] transition-transform duration-300  hover:scale-150" />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vanshika.codes@gmail.com&su=Let's%20Connect&body=Hi%20Vanshika,"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail className="text-[#6e5e9c] transition-transform duration-300  hover:scale-150"/>
          </a>


        </div>

      </div>
    </div>
  );
}

export default ContactPopup;
