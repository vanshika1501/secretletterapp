import { useState, useRef, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function MusicToggleButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const audioRef = useRef(null);

  const getDarkMode = () =>
    document.documentElement.classList.contains("dark");

  useEffect(() => {
    setIsDarkMode(getDarkMode());

    const observer = new MutationObserver(() => {
      const isDark = getDarkMode();
      setIsDarkMode(isDark);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.src = "";
      }
      setIsPlaying(false);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = isDarkMode
        ? "/illustrations/dark-music.mp3"
        : "/illustrations/cosmic_candy.ogg";
      audioRef.current.volume = isDarkMode ? 0.5: 0.4;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center
          transition-all duration-300 border-2 shadow-md hover:scale-105
          bg-purple text-purpdark border-purpdark
          dark:bg-[#1f1b2e] dark:text-[#d8cded] dark:border-[#6e5e9c]"
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
