import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import React, { useState, useEffect } from "react";
import { FaTimes, FaDownload, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Worker, Viewer } from '@react-pdf-viewer/core';

export default function BirthdaySecrets() {
  const [unlockedFriend, setUnlockedFriend] = useState(null);
  const [enteredPasswords, setEnteredPasswords] = useState({});
  const [showPassword, setShowPassword] = useState({});

  // --- data ---
  const friends = [
    { id: 1, name: "Starts with 8, ends with 9, opens the door to the new world where we have siblings to find.", password: "816274169" },
    { id: 2, name: "Reshu didi bht achi hai, vo mjhe ____ se khelne detin hain", password: "bholu" },
    { id: 3, name: "Reshu tum mera kaunsa gaya hua gaana loop pe sunti ho?", password: "ande" },
    { id: 4, name: "I am the repetitive meeting place that always makes you grin, And the one place I hate where you constantly drag me in..Where am I?", password: "dainikbhaskarmall" },
    { id: 5, name: "Chhoti thi height, badi thi baat, Wahi se shuru hui dosti ki shuruaat♥️Bata kis class?", password: "5" },
    { id: 6, name: "She’s known to tease, she loves to flirt, Her words can play and softly divert. If warmth had a face and mischief a name, Who else but her could claim such fame?", password: "rishika" },
    { id: 7, name: "After shopping, what did we eat in DB mall during my stay in Bhopal? :D", password: "sushi" },
    { id: 8, name: "The game where we met for the first time", password: "avakin" },
    { id: 9, name: "In a yellow dress you look like?", password: "butterfly" },
    { id: 10, name: "I was your school friend..Guess my name?", password: "paras" },
    { id: 11, name: "My name is exactly same as the top of the mountain..Who am I?", password: "shikhar" },
    { id: 12, name: " I live in the same city as you do..Who am I?", password: "shivam" },
  ];

  const messages = {
    816274169: { title: "From Stuti!", image: "/images/stuti.pdf" },
    bholu: { title: "From Dishu!", image: "/images/dishu.pdf" },
    ande: { title: "From Samina!", image: "/images/samina.pdf" },
    dainikbhaskarmall: { title: "From Jaya!", image: "/images/jaya.png" },
    5: { title: "From Sneha!", image: "/images/sneha_u.jpeg" },
    butterfly: { title: "From Himanshu!", image: "/images/himanshu.png" },
    avakin: { title: "From Himalaya!", image: "/images/himalaya.jpg" },
    paras: { title: "From Paras!", image: "/images/paras.jpg" },
    rishika: { title: "From Shreya!", image: "/images/shreya.mp4" },
    shikhar: { title: "From Shikhar!", image: "/images/shikhar.pdf" },
    sushi :{ title: "From Khushi!", image: "/images/khushi.pdf" },
    shivam: { title: "From Shivam!", image: "/images/shivam.pdf" }, 
  };

  // --- side-effect: lock body scroll when modal open (prevent background scrollbar) ---
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (unlockedFriend) {
      document.body.style.overflow = "hidden";
      // prevent horizontal overflow too
      document.documentElement.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = prev || "auto";
      document.documentElement.style.overflowX = "hidden";
    }
    return () => {
      // restore when component unmounts
      document.body.style.overflow = prev || "auto";
      document.documentElement.style.overflowX = "hidden";
    };
  }, [unlockedFriend]);

  // --- handlers ---
  const handleChange = (id, value) => {
    setEnteredPasswords((prev) => ({ ...prev, [id]: value }));
  };

  const handleUnlock = (id) => {
    const friend = friends.find((f) => f.id === id);
    if (!friend) return;
    const enteredPassword = (enteredPasswords[id] || "").toString().toLowerCase();
    if (enteredPassword === friend.password.toLowerCase()) {
      setUnlockedFriend(messages[friend.password]);
      setEnteredPasswords((prev) => ({ ...prev, [id]: "" }));
    } else {
      alert("Wrong password ❌ Try again!");
    }
  };

  const handleDownload = (imageSrc) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = imageSrc.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // viewer area height: modal header ~120px + padding ~40px -> viewer gets rest of 90vh
  const viewerHeight = "calc(90vh - 160px)";

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-[#f9f5f0] p-4 sm:p-6 overflow-hidden">
      {/* Background blobs (absolutely positioned — keep overflow-x-hidden on root) */}
      <motion.div
        className="pointer-events-none absolute top-[-120px] left-[-120px] w-[22rem] sm:w-[30rem] h-[22rem] sm:h-[30rem] bg-gradient-to-br from-[#f6d6ad] to-[#f4b6c2] opacity-40 rounded-full blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 15, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-120px] right-[-120px] w-[24rem] sm:w-[32rem] h-[24rem] sm:h-[32rem] bg-gradient-to-tr from-[#b4c6a6] to-[#f0d9b5] opacity-40 rounded-full blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, -20, 0], rotate: [0, -3, 3, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tulip */}
      <motion.img
        src="/images/tulip.png"
        alt="Tulip"
        className="absolute top-4 left-4 w-24 sm:w-40 md:w-56"
        animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.03, 1, 1.03] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <div className="w-full max-w-6xl mx-auto z-10">
        <h2 className="text-3xl sm:text-5xl font-shifty text-[#705c53] mb-2 text-center">Happy Birthday Rishika 🎉</h2>
        <h4 className="text-base sm:text-xl mb-8 tracking-wide text-center text-[#7a6563] px-2">Solve the Little Riddle and Unveil a Sweet Note!</h4>

        {/* GRID: center items and give each card a controlled max width to avoid horizontal overflow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {friends.map((friend) => (
            <motion.div
              key={friend.id}
              className="bg-[#fffaf3] shadow-md rounded-2xl p-5 sm:p-6 w-full max-w-[20rem] text-center border border-[#d6c2b5] hover:scale-[1.03] transition-transform flex flex-col justify-between min-h-[220px]"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-md sm:text-lg font-semibold mb-3 text-[#7a6563] font-serif leading-snug">
                {friend.name}
              </h2>

              <div className="relative">
                <input
                  type={showPassword[friend.id] ? "text" : "password"}
                  placeholder="Enter password"
                  className="border border-[#d6c2b5] bg-[#fcf9f4] rounded-lg p-2 w-full text-center focus:outline-none focus:ring-2 focus:ring-[#d8a48f]"
                  value={enteredPasswords[friend.id] || ""}
                  onChange={(e) => handleChange(friend.id, e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => ({ ...prev, [friend.id]: !prev[friend.id] }))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b4846c] hover:text-[#8b6c5c]"
                >
                  {showPassword[friend.id] ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button
                onClick={() => handleUnlock(friend.id)}
                className="mt-4 bg-[#d8a48f] text-white rounded-lg px-5 py-2 hover:bg-[#c58d78] transition font-medium"
              >
                Unlock
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {unlockedFriend && (
          <motion.div
            key="modal-backdrop"
            className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key="modal"
              className="relative bg-[#fff9f4] shadow-2xl w-full max-w-3xl md:max-w-5xl rounded-2xl overflow-hidden flex flex-col items-center"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              {/* close button */}
              <button
                onClick={() => setUnlockedFriend(null)}
                className="absolute top-4 right-4 text-[#705c53] text-2xl font-bold z-30"
                aria-label="close"
              >
                <FaTimes />
              </button>

              {/* title */}
              <div className="w-full px-6 pt-6">
                <h2 className="text-xl sm:text-3xl font-bold text-[#b4846c] mb-4 text-center font-serif">
                  {unlockedFriend.title}
                </h2>
              </div>

              {/* viewer area: SINGLE scrollable region inside modal */}
              <div style={{ height: viewerHeight }} className="w-full px-6 pb-6">
                {unlockedFriend.image.endsWith(".pdf") ? (
                  <div className="w-full h-full rounded-xl border border-[#e5d2c2] overflow-auto">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                      <Viewer fileUrl={unlockedFriend.image} />
                    </Worker>
                  </div>
                ) : unlockedFriend.image.endsWith(".mp4") ? (
                  <div className="w-full h-full rounded-xl border border-[#e5d2c2] flex items-center justify-center overflow-hidden">
                    <video
                      controls
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    >
                      <source src={unlockedFriend.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="w-full h-full rounded-xl border border-[#e5d2c2] flex items-center justify-center overflow-auto">
                    <img
                      src={unlockedFriend.image}
                      alt="Letter"
                      style={{ maxHeight: "100%", width: "auto", display: "block" }}
                      className="shadow-lg"
                    />
                  </div>
                )}
              </div>

              {/* download button area */}
              <div className="w-full px-6 pb-6 flex justify-center">
                <button
                  onClick={() => handleDownload(unlockedFriend.image)}
                  className="flex items-center gap-2 bg-[#d8a48f] text-white px-5 py-2 rounded-lg hover:bg-[#c58d78] transition font-medium"
                >
                  <FaDownload /> Download
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
