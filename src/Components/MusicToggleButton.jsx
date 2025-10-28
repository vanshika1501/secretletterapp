import { useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function MusicToggleButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Use your tune.mp3 in the public folder (e.g. /public/tune.mp3) */}
      <audio ref={audioRef} src="sounds/tune.mp3" loop preload="auto" />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center
          transition-all duration-300 border-2 shadow-md hover:scale-105
         bg-[#d6c2b5] text-[#705c53] border-[#705c53]"
      >
        {isPlaying ? (
          <FaVolumeUp className="text-3xl" />
        ) : (
          <FaVolumeMute className="text-3xl" />
        )}
      </button>
    </>
  );
}
