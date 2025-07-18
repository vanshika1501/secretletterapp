import React from "react";

const Stars = () => {
  const stars = Array.from({ length: 60 });
  const meteors = Array.from({ length: 2 });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Twinkling Stars */}
      {stars.map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-[3px] h-[3px] bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            opacity: Math.random(),
          }}
        />
      ))}

      {/* Meteor Shower */}
      {meteors.map((_, i) => (
        <div
          key={`meteor-${i}`}
          className="absolute w-[2px] h-32 bg-gradient-to-tr from-white to-transparent opacity-0 animate-meteor"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
