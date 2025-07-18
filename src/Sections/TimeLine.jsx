import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const timelineData = [
  {
    title: "Research Intern- Indian Institute of Technology",
    date: "Delhi, 2019",
    post: "Grduate Trainee",
    content:
      "Contributed to an Image Inpainting model with 90% accuracy improvement for restoration tasks and built a Sudoku app using ReactJS, HTML5, SQL deployed on Heroku, as part of the Common Computing Infrastructure project.",
  },
  {
    title: "Machine Learning Intern- Genisup Pvt. ltd.",
    date: "Bangalore (Remote), 2020",
    post: "Genisup Pvt. Ltd.",
    content:
      "Mastered Python and applied Machine Learning models to 6 hands-on mini projects, delivering tangible results. Contributed to 'Recruitize', developing an NLP-powered resume screening website to streamline hiring in a team of 5.",
  },
  {
    title: "Full Stack Developer- Scispot",
    date: "Canada (Remote), 2023",
    post: "Full Stack Developer",
    content: "At Scispot, I developed Scibot, an AI assistant for their Lab OS, which significantly streamlined laboratory operations. This AI-driven chat interface cut manual errors by 95% and sped up experiment setup by 90%, greatly improving workflow automation and data access. I also implemented NLP automation in Ask AI for lab data analysis, which boosted workflow efficiency by 40%. Furthermore, I designed Scispot’s Knowledge Graph using React.js, Neo4j, D3.js, LLMs, and REST APIs, leading to a 70% improvement in search efficiency. To enhance the user experience, I also built and deployed a React dashboard, optimizing the frontend for both web and iPad interfaces.",
  },
];

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-8xl mx-auto scroll-mt-36" id='experience'>
      <hr className="border-2 border-dashed border-slate-400 mb-4" />
      {/* Heading */}
      <motion.h2
       className="text-center dark:text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-motley mb-14 leading-tight"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
      >
        Experience
      </motion.h2>

      {/* Vertical Line */}
      <div className="relative w-full">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple3 z-0" />

        <div className="absolute top-[-20px] left-[-150px] w-[320px] h-[320px] bg-purple3 rounded-full opacity-30 z-0" />
        {/* Small blob on the right */}
        <div className="absolute top-[1px] right-[50px] w-[160px] opacity-20 z-0 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#6c3f7c"
              d="M42.5,-47.7C57.1,-40.5,72.2,-28.9,74.8,-15.6C77.5,-2.3,67.6,12.6,58.6,26.3C49.7,39.9,41.8,52.4,30.3,60.1C18.7,67.9,3.4,70.9,-12.4,71.7C-28.3,72.5,-45,71.2,-56.6,61.6C-68.3,51.9,-74.9,34.1,-75.5,17.6C-76.2,1.1,-70.9,-14.1,-61.4,-27.7C-51.9,-41.4,-38.2,-53.6,-23.4,-59.9C-8.6,-66.1,7.4,-66.4,22.7,-61.2C38,-56.1,53.1,-45,42.5,-47.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>


        {/* Solid curvy blob - bottom right */}
        <div className="absolute bottom-[-100px] right-[-120px] w-[350px] opacity-30 z-0 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#6c3f7c"
              d="M36.4,-62.5C47.5,-55.2,57.6,-47,62.7,-36.5C67.8,-25.9,67.9,-13,64.6,-1.1C61.3,10.9,54.5,21.8,48.2,35.8C41.8,49.7,35.8,66.7,24.4,70.5C13,74.3,-3.7,65,-20.5,58.1C-37.2,51.2,-53.9,46.6,-66.3,36.6C-78.7,26.6,-86.8,11.3,-83.8,-2.3C-80.8,-15.8,-66.8,-27.6,-54.6,-38.2C-42.4,-48.8,-31.9,-58.3,-19.2,-64.5C-6.5,-70.7,9.3,-73.7,22.7,-68.8C36.2,-63.8,48.3,-51.9,36.4,-62.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Outlined blob overlapping it */}
        <div className="absolute bottom-[-130px] right-[-160px] w-[400px] opacity-40 z-0 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="none"
              stroke="#6c3f7c"
              strokeWidth="3"
              d="M34.8,-61.8C44.4,-54.5,51.6,-44,55.4,-32.9C59.3,-21.8,59.8,-10.1,61.7,3.2C63.5,16.5,66.7,32.3,58.3,42.1C49.9,51.9,30,55.7,14.2,57.6C-1.6,59.5,-13.2,59.4,-26.5,56.6C-39.8,53.8,-54.8,48.4,-62.3,38.3C-69.8,28.2,-69.9,13.4,-69.7,-1.7C-69.5,-16.8,-69,-33.6,-60.5,-42.7C-52,-51.8,-35.5,-53.2,-21.5,-57.8C-7.5,-62.4,4.1,-70.3,16.2,-71.6C28.4,-72.9,41.1,-67.1,34.8,-61.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Another outlined blob on top left */}
        <div className="absolute top-[-120px] left-[-140px] w-[400px] opacity-30 z-0 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="none"
              stroke="#6c3f7c"
              strokeWidth="2"
              d="M40,-66.3C53.2,-58.9,65.5,-48.5,70.1,-35.6C74.6,-22.6,71.4,-7.1,66.8,7.5C62.2,22,56.2,35.5,47.1,46.8C38,58,25.8,67.1,12.3,71.4C-1.2,75.8,-15.9,75.5,-30.2,70.2C-44.6,64.9,-58.6,54.6,-66.8,41.4C-75.1,28.2,-77.6,12.1,-76.7,-4.7C-75.8,-21.5,-71.4,-38.9,-60.9,-50.6C-50.4,-62.3,-33.8,-68.2,-18.3,-71.4C-2.7,-74.6,11.7,-75.1,25.5,-71.5C39.4,-68,52.7,-60.6,40,-66.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>



        {/* Timeline Entries */}
        {timelineData.map((item, index) => (
          <div key={index} className="z-10 flex justify-center w-full mb-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group w-full max-w-3xl"
            >
              <div className="bg-purple border border-purple3 p-4 rounded-2xl transition-all duration-300 transform -translate-x-1 -translate-y-1 group-hover:-translate-x-2 group-hover:-translate-y-2 shadow-[4px_4px_0_0_#6c3f7c]">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <h3 className="text-2xl font-shifty mb-1">{item.title}</h3>
                  <span className="ml-4">
                    {expandedIndex === index ? (
                      <FaChevronUp className="text-gray-700 text-xl" />
                    ) : (
                      <FaChevronDown className="text-gray-700 text-xl" />
                    )}
                  </span>
                </div>
                <div className="flex justify-between font-semibold text-gray-500 ">
                  <p>{item.post}</p>
                  <time>{item.date}</time>
                </div>

                {/* Expandable Content */}
                {expandedIndex === index && (
                  <p className="font-semibold text-gray-700 transition-all duration-300 ease-in-out">
                    {item.content}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
