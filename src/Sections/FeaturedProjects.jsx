import { motion, AnimatePresence } from "framer-motion";
import Tag from "../Components/Tag";
import { useState, useEffect } from "react";
function FeaturedProjects() {

  return (
    <section className="pt-24 md:pt-32 px-4 sm:px-8" id="projects">
      <motion.h2
        className="text-center text-3xl sm:text-5xl mb-10 sm:mb-14 font-motley dark:text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
      >
        Projects
      </motion.h2>

      <div className="flex flex-col sm:flex-row w-full max-w-7xl mx-auto">

        {/* Image section */}
        <div className="w-full sm:w-1/2 relative overflow-hidden min-h-[250px] sm:min-h-[400px] md:min-h-[70vh] mb-2 sm:mb-0">
          <img
            src="/images/Pro1.webp"
            alt="Animated preview"
            className="w-full h-full object-contain border-4 border-purple2 rounded-xl"
          />
        </div>

        {/* Text section */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center px-4 sm:px-8">
          <div className="max-w-3xl">
            <motion.div
              className="flex flex-wrap gap-2 mb-4 font-bold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              <Tag text="Python" color="purple" />
              <Tag text="PyTorch" color="purple4" />
              <Tag text="XAI" color="purple" />
              <Tag text="Multimodal Learning" color="purple4" />
              <Tag text="Transfer Learning" color="purple" />

            </motion.div>

            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-motley mb-3 text-purple4 text-center sm:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              An Explainable Artificial Intelligence and Multimodal Deep Learning Approach to Skin Lesion Classification.
            </motion.h3>

            <motion.p
              className="text-base sm:text-lg font-shifty mb-4 dark:text-white text-center sm:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            >
              Implemented multimodal deep learning networks with CNN and transfer learning for skin lesion classification, achieving <span className="font-serif font-semibold">91%</span> accuracy. Integrated XAI tools like LIME, SHAP, and Grad-CAM for explainable predictions.
            </motion.p>

            <motion.a
              className="text-sm sm:text-base font-bold group text-purple4 hover:text-black text-center sm:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
              href="https://github.com/vanshika1501/An-Explainable-Deep-Learning-Approach-for-Multimodal-Skin-Lesion-Classification"
              target="_blank"
              rel="noopener noreferrer"
            >
              [Source Code] <span className="duration-300 group-hover:ml-2">→</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* 

      <div className="flex flex-col justify-center sm:w-1/2 p-8 sm:p-12">
        <div className="max-w-5xl mr-auto" >
          <motion.div
            className="flex mb-8 text-center text-2xl font-bold justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
          >
            <Tag text="Python" color="purple" />
            <Tag text="Pytorch" color="fuchsia-400" />
            <Tag text="XAI" color="purple" />
          </motion.div>
          <motion.h3
            className="text-3xl font-motley  mb-2 justify-center items-center text-center text-purple2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
          > An Explainable Artificial Intelligence and Multimodal Deep Learning Approach to Skin Lesion Classification.
          </motion.h3>
          <motion.p
            className="text-description font-shifty text-2xl mb-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
          >
            Implemented multimodal deep learning networks with CNN and transfer learning for skin lesion classification, achieving <span className="font-serif font-semibold">91%</span> accuracy which was better than unimodal approaches (using patient's metadata and lesion images one at a time), and incorporated explainable AI (using LIME, SHAP, and GRAD-CAM) for interpretable explanations.
          </motion.p>
          <motion.a
            className="text-lg font-semibold group hover:text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
            href="https://chrome.google.com/webstore/detail/talking-chatgpt/dppbeenbobngogcdfnocicajiegcofmo"
            target="_blank"
            rel="noopener"
          >
            Visit Extension <span className="duration-300 group-hover:ml-2">→</span>
          </motion.a>
        </div>
      </div> */}

    </section>
  );
}

export default FeaturedProjects;
