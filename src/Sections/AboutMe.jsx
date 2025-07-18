import { motion } from "framer-motion";
import { calculateAge, getYearsSince } from "../helpers/date";
import { FaHeart } from "react-icons/fa";

const birthday = new Date('2000-01-15'); // Birthday
const startedCoding = new Date('2019-01-01'); // Started coding
const startedPentesting = new Date('2022-06-01'); // Started pentesting

function AboutMe() {
    return (
        <section
  className="flex flex-col xl:flex-row dark:bg-black bg-animepurple rounded-2xl scroll-smooth scroll-mt-8 w-full h-full px-4 sm:px-6 md:px-10 py-10"
  id="aboutme"
>
  <div className="w-full xl:w-3/4 p-4 sm:p-6 md:p-12">
    <motion.h2
      className="text-3xl sm:text-4xl md:text-5xl font-motley mt-6 sm:mt-8 mb-5 sm:mb-7 flex items-center gap-3 text-black dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
    >
      A Little About Me{" "}
      <FaHeart className="text-[#9B7EBD] opacity-50" />
    </motion.h2>
                <div className=" mb-6 dark:text-purple2">
                    <motion.p
                        className="mb-6 text-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
                    >
                        <span className="font-shifty">Hi! I’m Vanshika Sharma, a</span> <span className="arial text-xl font-semibold">{calculateAge(birthday)}</span>
                        <span className="font-shifty"> year old based in India, software developer and penetration tester.</span>

                    </motion.p>
                  
                    <motion.p
                        className="mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
                    >
                    <span className="font-shifty text-2xl">It all started back in </span>
                    <span className="arial text-xl font-semibold">6th </span><span className="font-shifty text-2xl">grade when I wrote my first website using just HTML and CSS — and felt like magic. But during my B.Tech, I realized coding was just the tip of the iceberg — beneath it lay OS, networking, DSA, circuits, and microprocessors. Projects and internships sparked a deeper curiosity, leading me to pursue a Master’s and soon after, I started my journey in the industry.
                        That’s where everything started to click — theory turned into prototypes, and curiosity turned into creation.
But like a good recursive function, I kept going deeper. I explored UI/UX, worked with front-ends, cloud platforms, databases, AI/ML. I Googled things, broke things, fixed them. Eventually, I started building full products — not just components — and shipped them from idea to deployment.
                    </span>
                    </motion.p>
                                        
                    <motion.p
                        className="mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
                    >
                        <span className="font-shifty text-2xl"> And beyond the keyboard? I’m just as expressive. I dance when no one’s watching, paint when words fall short, read about tech, and play games that are more strategic than my Git commit messages. </span> </motion.p>

                    <motion.p
                        className="mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
                    >
                        <span className="font-shifty text-2xl">The more I build, the more I realize there’s always more to learn. Call it a joyful infinite loop, minus the memory leak. Always ready to build something that does'nt just compile, but connects!</span>
                    </motion.p>
                </div>
            </div>
            <div className="w-full rounded-2xl xl:w-3/5 bg-[url(/images/profile_pic.webp)] bg-cover bg-center bg-[#d8cded] bg-no-repeat min-h-[500px] xl:min-h-[500px]" />
        </section>
    );
}

export default AboutMe;
