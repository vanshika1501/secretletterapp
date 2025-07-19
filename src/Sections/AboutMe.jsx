import { motion } from "framer-motion";
import { calculateAge, getYearsSince } from "../helpers/date";
import { FaHeart } from "react-icons/fa";

const birthday = new Date('2000-01-15'); // Birthday
const startedCoding = new Date('2019-01-01'); // Started coding
const startedPentesting = new Date('2022-06-01'); // Started pentesting

function AboutMe() {
    return (
        <section
  className="flex flex-col xl:flex-row dark:bg-[#18181b] bg-animepurple  scroll-smooth scroll-mt-8 w-full h-full px-4 sm:px-6 md:px-10 py-10"
  id="aboutme"
>
  <div className="w-full xl:w-3/4 p-4 sm:p-6 md:p-12">
    <motion.h2
      className="text-3xl sm:text-3xl md:text-4xl font-motley mb-5 sm:mb-7 flex items-center gap-3 text-black dark:text-purple2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
    >
      A Little About Me{" "}
      <FaHeart className="text-[#9B7EBD] opacity-50" />
    </motion.h2>
                <div className="mb-6 dark:text-slate-300">
                    <motion.p
                        className="mb-6 text-base sm:text-lg md:text-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
                    >
                        <span className="font-shifty">Hi! I’m Vanshika Sharma, a</span> <span className="arial text-base sm:text-lg md:text-xl font-semibold">{calculateAge(birthday)}</span>
                        <span className="font-shifty"> year old software developer. I'd love to share a bit about my tech journey, because honestly, it feels like a story still unfolding.
</span>

                    </motion.p>
                  
                    <motion.p
                        className="mb-6 text-base sm:text-lg md:text-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
                    >
                    <span className="font-shifty text-base sm:text-2xl">It all started back in </span>
                    <span className="arial text-base sm:text-xl font-semibold">6th </span><span className="font-shifty text-base sm:text-2xl">
                         when I wrote my very first website using just HTML and CSS. You know that feeling, right? It was absolute magic, seeing my words and ideas suddenly appear on a screen! But as I dove into my B.Tech, I quickly realized coding was just the tip of the iceberg. Beneath it lay a vast, fascinating world of operating systems, networking, data structures - a world so deep it was almost a delightful fright to explore. Projects and internships truly sparked a deeper curiosity, pushing me towards a Master's and eventually into the industry. That’s where everything started to click ... theory turned into prototypes, and curiosity turned into creation

But like a good recursive function, I just kept wanting to go deeper. I found myself drawn to everything from UI/UX design and building intricate frontends to navigating cloud platforms, mastering databases, and spending hours into AI/ML research work. I googled things, broke them (sometimes intentionally, sometimes not!), and then, with immense satisfaction, figuring out how to fix them. Eventually, I moved beyond just building components; I started crafting and shipping full products from their initial idea all the way to deployment.
                    </span>
                    </motion.p>
                                        
                    <motion.p
                        className="mb-6 text-base sm:text-lg md:text-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
                    >
                        <span className="font-shifty text-base sm:text-2xl"> And beyond the keyboard? Well, I'm just as expressive there. You'll find me dancing when no one's watching, painting when words just can't quite capture what I'm feeling, reading latest tech, and getting lost in games that often require more planning than my Git commit messages! </span> </motion.p>

                    <motion.p
                        className="mb-6 text-base sm:text-lg md:text-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "backOut" }}
                    >
                        <span className="font-shifty text-base sm:text-2xl">The more I build, the more I realize there’s always more to learn. Call it a joyful infinite loop, minus the memory leak. I'm always excited to create something that not only runs, but resonates.</span>
                    </motion.p>
                </div>
            </div>
            <div className="w-full rounded-2xl xl:w-3/5 bg-[url(/illustrations/m1.jpg)] dark:bg-[url(/illustrations/t1.jpg)] bg-cover bg-center bg-[#d8cded] bg-no-repeat min-h-[500px] xl:min-h-[500px]" />
        </section>
    );
}

export default AboutMe;
