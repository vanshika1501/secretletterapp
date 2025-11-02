import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import React, { useState } from "react";
import { FaTimes, FaDownload, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Worker, Viewer } from "@react-pdf-viewer/core";

export default function BirthdaySecrets() {
  const [unlockedFriend, setUnlockedFriend] = useState(null);
  const [enteredPasswords, setEnteredPasswords] = useState({});
  const [showPassword, setShowPassword] = useState({});
  const [enteredGroupPins, setEnteredGroupPins] = useState({});
  const [unlockedGroups, setUnlockedGroups] = useState([]);

  // 🎯 group PINs
  const groupPins = {
    group1: "1111",
    group2: "2222",
    group3: "3333",
  };

  // 🧩 riddles + passwords + grouping
  const friends = [
    { id: 1, name: "Starts with 8, ends with 9...", password: "816274169", group: "group1" },
    { id: 2, name: "Reshu didi...", password: "bholu", group: "group1" },
    { id: 3, name: "Reshu tum mera...", password: "ande", group: "group1" },
    { id: 4, name: "I am the repetitive...", password: "dainikbhaskarmall", group: "group1" },
    { id: 5, name: "Chhoti thi height...", password: "5", group: "group1" },
    { id: 6, name: "For Khushi 💫", password: "alpha", group: "group1" },

    { id: 7, name: "Himanshu bhaiya", password: "beta", group: "group2" },
    { id: 8, name: "Himalaya bhaiya", password: "gamma", group: "group2" },
    { id: 9, name: "Jeeju bhaiya", password: "delta", group: "group2" },
    { id: 10, name: "Shivam bhaiya", password: "epsilon", group: "group2" },
    { id: 11, name: "Paras bhaiya", password: "paraspwd", group: "group2" },

    { id: 12, name: "Rohit bhaiya", password: "oneone", group: "group3" },
    { id: 13, name: "Aadi bhaiya", password: "twotwo", group: "group3" },
    { id: 14, name: "Ansh bhaiya", password: "threethree", group: "group3" },
    { id: 15, name: "Mummy", password: "fourfour", group: "group3" },
    { id: 16, name: "Dhruvi bhaiya", password: "fivefive", group: "group3" },
  ];

  // 💌 messages
  const messages = {
    "816274169": { title: "From Stuti!", image: "/images/stuti.pdf" },
    "bholu": { title: "From Dishu!", image: "/images/dishu.pdf" },
    "ande": { title: "From Samina!", image: "/images/samina.pdf" },
    "dainikbhaskarmall": { title: "From Jaya!", image: "/images/jaya.png" },
    "5": { title: "From Sneha!", image: "/images/sneha.jpg" },
    "alpha": { title: "From Khushi!", image: "/images/group2-a.jpg" },
    "beta": { title: "From Riya!", image: "/images/group2-b.jpg" },
    "gamma": { title: "From Megha!", image: "/images/group2-c.pdf" },
    "delta": { title: "From Priya!", image: "/images/group2-d.jpg" },
    "epsilon": { title: "From Tanya!", image: "/images/group2-e.pdf" },
    "paraspwd": { title: "From Paras!", image: "/images/paras.jpg" },
    "oneone": { title: "From Aman!", image: "/images/g3-11.jpg" },
    "twotwo": { title: "From Karan!", image: "/images/g3-12.pdf" },
    "threethree": { title: "From Tanu!", image: "/images/g3-13.jpg" },
    "fourfour": { title: "From Keshav!", image: "/images/g3-14.pdf" },
    "fivefive": { title: "From Shruti!", image: "/images/g3-15.jpg" },
  };

  // handlers
  const handleChange = (id, value) => setEnteredPasswords(prev => ({ ...prev, [id]: value }));

  const handleUnlock = (id) => {
    const friend = friends.find(f => f.id === id);
    if (!friend) return;
    const entered = (enteredPasswords[id] || "").toLowerCase();
    if (entered === friend.password.toLowerCase()) {
      const msg = messages[friend.password];
      if (msg) {
        setUnlockedFriend(msg);
        setEnteredPasswords(prev => ({ ...prev, [id]: "" }));
      } else alert("No message found for this card.");
    } else alert("Wrong password ❌ Try again!");
  };

  const handleGroupPinChange = (groupKey, value) => setEnteredGroupPins(prev => ({ ...prev, [groupKey]: value }));

  const handleGroupPinSubmit = (groupKey) => {
    const expected = groupPins[groupKey];
    const entered = (enteredGroupPins[groupKey] || "").toString();
    if (entered === expected) {
      if (!unlockedGroups.includes(groupKey)) setUnlockedGroups(prev => [...prev, groupKey]);
    } else alert("Incorrect group PIN ❌");
  };

  const handleDownload = (imageSrc) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = imageSrc.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const groupsInUse = Array.from(new Set(friends.map(f => f.group)));

  return (
    <div className="relative min-h-screen bg-[#f9f5f0] overflow-x-hidden overflow-y-auto p-6 sm:p-10 scroll-smooth">
      {/* animated bg */}
      <motion.div className="absolute top-[-120px] left-[-120px] w-[22rem] sm:w-[30rem] h-[22rem] sm:h-[30rem] bg-gradient-to-br from-[#f6d6ad] to-[#f4b6c2] opacity-40 rounded-full blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[-120px] right-[-120px] w-[24rem] sm:w-[32rem] h-[24rem] sm:h-[32rem] bg-gradient-to-tr from-[#b4c6a6] to-[#f0d9b5] opacity-40 rounded-full blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />

      <motion.img src="/images/tulip.png" alt="Tulip"
        className="absolute top-6 left-6 w-20 sm:w-36 md:w-48"
        animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.02, 1, 1.02] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

      <div className="w-full max-w-6xl mx-auto z-10 relative">
        <h2 className="text-3xl sm:text-5xl font-shifty text-[#705c53] mb-2 text-center tracking-wide">
          Happy Birthday Rishika 🎂
        </h2>
        <h4 className="text-base sm:text-xl mb-6 tracking-wide text-center text-[#7a6563] px-4">
          Enter your group PIN to unlock riddles — then solve each riddle to open your secret letter 💌
        </h4>

        {/* group PINs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-8">
          {groupsInUse.map(groupKey => (
            <div key={groupKey}
              className="bg-[#fffaf3] border w-10/12 md:w-80 border-[#d6c2b5] p-4 rounded-2xl shadow-md flex flex-col items-center">
              <div className="text-sm text-[#705c53] font-medium mb-2">
                {groupKey.toUpperCase()}
              </div>
              <input
                type="password"
                placeholder="Enter Group PIN"
                value={enteredGroupPins[groupKey] || ""}
                onChange={e => handleGroupPinChange(groupKey, e.target.value)}
                className="border border-[#d6c2b5] bg-[#fcf9f4] rounded-lg p-2 w-full text-center focus:outline-none focus:ring-2 focus:ring-[#d8a48f]"
              />
              <button
                onClick={() => handleGroupPinSubmit(groupKey)}
                className="mt-3 bg-[#d8a48f] text-white rounded-lg px-4 py-2 hover:bg-[#c58d78] transition font-medium w-full">
                Unlock {groupKey.toUpperCase()}
              </button>
              {unlockedGroups.includes(groupKey)
                ? <div className="mt-2 text-sm text-green-700 font-semibold">Unlocked ✅</div>
                : <div className="mt-2 text-sm text-[#705c53]">Locked 🔒</div>}
            </div>
          ))}
        </div>

        {/* cards */}
        <div className="space-y-10">
          {groupsInUse.map(groupKey => {
            const groupCards = friends.filter(f => f.group === groupKey);
            const isGroupUnlocked = unlockedGroups.includes(groupKey);
            return (
              <motion.div layout key={groupKey}>
                <div className="mb-4 mt-4 flex items-center justify-between">
                  <h3 className="text-xl text-[#705c53] font-semibold">
                    {groupKey.toUpperCase()}
                  </h3>
                  <div className="text-sm text-[#7a6563]">
                    {isGroupUnlocked ? "Solve riddles below 🎯" : "Group locked — enter PIN above"}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                  {groupCards.map(friend => (
                    <motion.div
                      layout
                      key={friend.id}
                      className={`relative bg-[#fffaf3] shadow-md rounded-2xl p-5 sm:p-6 border w-64 sm:w-72 mx-auto border-[#d6c2b5] transition-transform overflow-hidden text-center min-h-[220px] ${
                        isGroupUnlocked ? "hover:scale-105" : "blur-sm pointer-events-none"
                      }`}
                      whileHover={isGroupUnlocked ? { y: -5 } : {}}
                    >
                      {!isGroupUnlocked && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-20 rounded-2xl">
                          <div className="text-[#705c53] font-semibold">🔒 Locked</div>
                        </div>
                      )}

                      <h2 className="text-md sm:text-lg font-semibold mb-3 text-[#7a6563] font-serif">
                        {friend.name}
                      </h2>

                      <div className="relative">
                        <input
                          type={showPassword[friend.id] ? "text" : "password"}
                          placeholder="Enter password"
                          className="border border-[#d6c2b5] bg-[#fcf9f4] rounded-lg p-2 w-full text-center focus:outline-none focus:ring-2 focus:ring-[#d8a48f]"
                          value={enteredPasswords[friend.id] || ""}
                          onChange={e => handleChange(friend.id, e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(prev => ({ ...prev, [friend.id]: !prev[friend.id] }))}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b4846c] hover:text-[#8b6c5c]"
                        >
                          {showPassword[friend.id] ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>

                      <div className="flex justify-center">
                        <button
                          onClick={() => handleUnlock(friend.id)}
                          className="flex justify-center mt-4 bg-[#d8a48f] text-white rounded-lg px-5 py-2 hover:bg-[#c58d78] transition font-medium">
                          Unlock Letter
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* modal */}
      <AnimatePresence>
        {unlockedFriend && (
          <motion.div
            className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-[#fff9f4] shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 flex flex-col items-center rounded-2xl"
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

              <h2 className="text-xl sm:text-4xl font-bold text-[#b4846c] mb-4 sm:mb-6 font-serif text-center">
                {unlockedFriend.title}
              </h2>

              {unlockedFriend.image.endsWith(".pdf") ? (
                <div className="w-full h-[70vh] rounded-xl border border-[#e5d2c2] overflow-hidden">
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer fileUrl={unlockedFriend.image} />
                  </Worker>
                </div>
              ) : (
                <img
                  src={unlockedFriend.image}
                  alt="Letter"
                  className="rounded-xl mb-4 sm:mb-6 max-w-full max-h-[80vh] object-contain shadow-lg border border-[#e5d2c2]"
                />
              )}

              <button
                onClick={() => handleDownload(unlockedFriend.image)}
                className="flex items-center mt-4 gap-2 bg-[#d8a48f] text-white px-5 py-2 rounded-lg hover:bg-[#c58d78] transition font-medium"
              >
                <FaDownload /> Download Letter
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
