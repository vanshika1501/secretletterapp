import React from 'react';
import {
  FaReact,
  FaPython,
  FaFigma,
  FaJs,
  FaGit,
  FaNodeJs,
  FaAws,
  FaGoogle,
  FaHtml5,
  FaCss3,
  FaAngular,
  FaDatabase,
  FaMicroblog,
} from 'react-icons/fa';
import { Md3dRotation } from 'react-icons/md'; 
import { SiCplusplus, SiDocker, SiGoogleanalytics, SiKeras, SiMiro, SiMongodb, SiMysql, SiNeo4J, SiNumpy, SiPandas, SiPostman, SiPytorch, SiStudio3T, SiTableau, SiTensorflow } from 'react-icons/si';
import Stars from '../helpers/stars';

const TechStack = () => {
  const categories = [
    {
      title: 'Frontend Tools:',
      align: 'left',
      techs: [
        { icon: <FaHtml5 />, name: 'HTML5' },
        { icon: <FaCss3 />, name: 'CSS3' },
        { icon: <FaJs />, name: 'Javascript' },
        { icon: <FaReact />, name: 'React' },
        { icon: <FaAngular />, name: 'Angular' },
      ],
    },
    {
      title: 'Backend & Languages:',
      align: 'right',
      techs: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <SiCplusplus />, name: 'C++' },
        { icon: <FaNodeJs />, name: 'Node.js' },
      ],
    },
    {
      title: 'Databases and API Design: ',
      align: 'left',
      techs: [
        { icon: <SiMysql />, name: 'MySQL' },
        { icon: <FaDatabase />, name: 'RESTful APIs' },
        { icon: <SiNeo4J />, name: 'Neo4j' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <SiPostman />, name: 'POSTMAN' },


      ],
    },
    {
      title: 'AI/ML Tools: ',
      align: 'right',
      techs: [
        { icon: <SiTensorflow />, name: 'Tensorflow' },
        { icon: <SiPytorch />, name: 'Pytorch' },
        { icon: <SiKeras />, name: 'Keras' },
        { icon: <SiPandas />, name: 'Pandas' },
        { icon: <SiNumpy />, name: 'Numpy' },

      ],
    },
    {
      title: 'Cloud & DevOps:',
      align: 'left',
      techs: [
        { icon: <FaGit />, name: 'Git' },
        { icon: <FaAws />, name: 'AWS' },
        { icon: <FaGoogle />, name: 'GCP' },
        { icon: <SiDocker />, name: 'Docker' }
      ],
    },

  {
      title: 'UI/UX and Analytics: ',
      align: 'right',
      techs: [
        { icon: <FaFigma />, name: 'Figma' },
        { icon: <SiMiro/>, name: 'Miro' },
        { icon: <Md3dRotation />, name: 'Spline' },
        { icon: <SiGoogleanalytics />, name: 'Google Analytics' },
        { icon: <SiTableau />, name: 'Tableau' },
      ],
    },
  ];

return (
    <div className="py-16 px-4 custom-purple-gradient mt-5 relative overflow-hidden dark:opacity-80" id="techstack">
      <Stars />

      {/* Title */}
      <div className="flex justify-center items-center">
        <h2 className="text-5xl font-motley mb-14 relative inline-block group hover:text-black text-white">
          My Tech Stack
          <span className="block h-[3px] w-0 bg-black group-hover:w-full transition-all duration-500 mt-2 mx-auto rounded-full" />
        </h2>
      </div>

      {/* Alternating Rows */}
      <div className="flex flex-col gap-6 text-white text-2xl px-5 ">
        {categories.map(({ title, align, techs }, index) => (
          <div
            key={index}
            className={`w-full flex font-bold text-[#6e5e9c] ${align === 'left' ? 'justify-start' : 'justify-end'
              }`}
          >
            <div
              className={`flex items-center gap-2 flex-wrap ${align === 'right' ? 'text-right flex-row' : ''}`}
            >
              {/* Category Heading */}
              <span className="font-semibold whitespace-nowrap">{title}</span>

              {/* Icons */}
              <div className="flex flex-wrap gap-x-6 gap-y-10">
                {techs.map(({ icon, name }, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center group text-5xl  text-[#6e5e9c] hover:text-white hover:scale-125 transition-all duration-300"
                  >
                    {/* Icon */}
                    {icon}

                    {/* Tooltip */}
                    <div className="mt-3 text-center bg-white text-black text-xs font-semibold px-3 py-1 rounded-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300 shadow-lg whitespace-nowrap pointer-events-none">
                      {name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

