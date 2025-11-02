import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; import React, { useState } from "react";
import { FaTimes, FaDownload, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Worker, Viewer } from '@react-pdf-viewer/core';



export default function BirthdaySecrets() {
  const [unlockedFriend, setUnlockedFriend] = useState(null);
  const [enteredPasswords, setEnteredPasswords] = useState({});
  const [showPassword, setShowPassword] = useState({});


  const friends = [
    { id: 1, name: "Starts with 8, ends with 9, opens the door to the new world where we have siblings to find.", password: "816274169" },
    { id: 2, name: "Reshu didi bht achi hai, vo mjhe ____ se khelne detin hain", password: "bholu" },
    { id: 3, name: "Reshu tum mera kaunsa gaya hua gaana loop pe sunti ho?", password: "ande" },
    { id: 4, name: "I am the repetitive meeting place that always makes you grin, And the one place I hate where you constantly drag me in..Where am I?", password: "dainikbhaskarmall" },
    { id: 5, name: "Chhoti thi height, badi thi baat, Wahi se shuru hui dosti ki shuruaat♥️Bata kis class?", password: "5" },
    { id: 6, name: "In a yellow dress you look like?", password: "butterfly" },
    { id: 7, name: "Riddle 7", password: "test" },
    { id: 8, name: "Riddle 8", password: "test" },
    { id: 9, name: "Riddle 9", password: "test" },
    { id: 10, name: "Riddle 10", password: "test" },
    { id: 11, name: "Riddle 11", password: "test" },
    { id: 12, name: "Riddle 12", password: "test" },
    { id: 13, name: "Riddle 13", password: "test" },
    { id: 14, name: "Riddle 14", password: "test" },
    { id: 15, name: "Riddle 15", password: "test" },
  ];

  const messages = {
    816274169: {
      title: "From Stuti!",
      image: "/images/stuti.pdf",
    },
    bholu: {
      title: "From Dishu!",
      image: "/images/friend1.jpg",
    },
     ande: {
      title: "From Samina!",
      image: "/images/samina.pdf",
    },
    dainikbhaskarmall: {
      title: "From Jaya!",
      image: "/images/jaya.png",
    },
      5: {
      title: "From Sneha!",
      image: "/images/sneha.jpg",
    },
    butterfly: {
      title: "From Himanshu!",
      image: "/images/himanshu.png",
    },
  };

  const handleChange = (id, value) => {
    setEnteredPasswords((prev) => ({ ...prev, [id]: value }));
  };

  const handleUnlock = (id) => {
    const friend = friends.find((f) => f.id === id);
    const enteredPassword = enteredPasswords[id] || "";

    if (enteredPassword.toLowerCase() === friend.password.toLowerCase()) {
      setUnlockedFriend(messages[friend.password]);
      setEnteredPasswords((prev) => ({ ...prev, [id]: "" }));
    } else {
      alert("Wrong password ❌ Try again!");
    }
  };

  // 🖼️ Download image function
  const handleDownload = (imageSrc) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = imageSrc.split("/").pop(); // file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#f9f5f0] overflow-hidden p-4 sm:p-6">
      {/* 🌿 Boho Blobs */}
      <motion.div
        className="absolute top-[-120px] left-[-120px] w-[22rem] sm:w-[30rem] h-[22rem] sm:h-[30rem] bg-gradient-to-br from-[#f6d6ad] to-[#f4b6c2] opacity-40 rounded-full blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 15, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-120px] w-[24rem] sm:w-[32rem] h-[24rem] sm:h-[32rem] bg-gradient-to-tr from-[#b4c6a6] to-[#f0d9b5] opacity-40 rounded-full blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, -20, 0], rotate: [0, -3, 3, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌷 Tulip Image */}
      <motion.img
        src="/images/tulip.png"
        alt="Tulip Letter"
        className="absolute top-4 left-4 w-24 sm:w-40 md:w-56"
        animate={{
          rotate: [0, 3, -3, 0],
          scale: [1, 1.03, 1, 1.03],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🎂 Title */}
      <h2 className="text-3xl sm:text-5xl font-shifty ml-4 text-[#705c53] mb-2 tracking-wide text-center z-10">
        Happy Birthday Rishika
      </h2>
      <h4 className="text-base sm:text-xl font-shifty ml-4 mb-8 tracking-wide text-center z-10 px-2">
        Solve the Little Riddle and Unveil a Sweet Note!
      </h4>

      {/* 📜 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 z-10">
        {friends.map((friend) => (
          <motion.div
            key={friend.id}
            className="bg-[#fffaf3] shadow-md rounded-2xl p-5 sm:p-6 w-64 sm:w-72 text-center border border-[#d6c2b5] cursor-pointer hover:scale-105 transition-transform mx-auto"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-md sm:text-lg font-semibold mb-3 text-[#7a6563] font-serif">
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
    onClick={() =>
      setShowPassword((prev) => ({ ...prev, [friend.id]: !prev[friend.id] }))
    }
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

      {/* 💌 Modal */}
      <AnimatePresence>
        {unlockedFriend && (
          <motion.div
            className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-[#fff9f4] shadow-2xl w-full max-w-md sm:max-w-3xl md:max-w-5xl overflow-y-auto p-6 sm:p-10 flex flex-col items-center rounded-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setUnlockedFriend(null)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 text-[#705c53] text-2xl font-bold"
              >
                <FaTimes />
              </button>

              <h2 className="text-xl sm:text-4xl font-bold  text-[#b4846c] mb-4 sm:mb-6 font-serif text-center">
                {unlockedFriend.title}
              </h2>

              {unlockedFriend.image.endsWith(".pdf") ? (
                <div className="w-full h-[70vh] sm:h-[80vh] rounded-xl border border-[#e5d2c2] overflow-hidden">
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer fileUrl={unlockedFriend.image} />
                  </Worker>
                </div>
              ) : (
                <img
                  src={unlockedFriend.image}
                  alt="Letter"
                  className="rounded-xl mb-4 sm:mb-6 max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain shadow-lg border border-[#e5d2c2]"
                />
              )}


              {/* ⬇️ Download Button */}
              <button
                onClick={() => handleDownload(unlockedFriend.image)}
                className="flex items-center mt-2 gap-2 bg-[#d8a48f] text-white px-5 py-2 rounded-lg hover:bg-[#c58d78] transition font-medium"
              >
                <FaDownload />
                Download Letter
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
