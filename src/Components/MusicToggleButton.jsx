import { useState, useRef } from "react";
import { FaMusic, FaRegStopCircle, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function MusicToggleButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} src="illustrations/cosmic_candy.ogg" loop preload="auto" />

      {/* Toggle Button */}
      <button
        onClick={toggleMusic}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center 
          transition-all duration-300 border-2 border-purpdark shadow-md hover:scale-105
          ${isPlaying ? "bg-purple" : "bg-purple"} `}
      >
        {isPlaying ? (
          <FaVolumeUp className=" bg-purple text-purpdark text-3xl" />
        ) : (
          <FaVolumeMute className=" bg-purple text-purpdark text-3xl" />
        )}
      </button>
    </>
  );
}
