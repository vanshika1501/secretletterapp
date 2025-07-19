import Navbar from "./Components/Navbar";
import HeroSection from "./Sections/Hero";
import WhatIDo from "./Sections/WhatIDo";
import FeaturedProjects from "./Sections/FeaturedProjects";
import Quote from "./Sections/Quote";
import AboutMe from "./Sections/AboutMe";
import Timeline from "./Sections/TimeLine";
import { Map } from "./Sections/Map";
import TechStack from "./Sections/TechStack";
import ThemeToggleButton from "./Components/DarkMode";
import MusicToggleButton from "./Components/MusicToggleButton";

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden dark:bg-[#18181b]">
        <ThemeToggleButton/>
        <MusicToggleButton/>
        <Navbar />
        <HeroSection />
        <Timeline />
        <TechStack/>
        <WhatIDo />
        <FeaturedProjects />
        <Quote />
        <AboutMe />
        <Map />
      </div>
    </>
  );
}

export default App;
