import { motion, useScroll, useTransform } from "framer-motion";
import Stats from "../components/stats/Stats";
import ProjectsMini from "../components/projects/ProjectsMini";

import image from "../assets/mail.png";
import Footer from "../components/Footer";

export default function Root() {
  const { scrollY } = useScroll();
  const linkY = useTransform(scrollY, [0, 200, 400], [1, 0.9, 0.8]);
  return (
    <>
      <main className="w-full max-w-[1200px]">
        <motion.section
          id="banner"
          className="flex h-screen flex-col gap-8 pb-32 pt-32 items-center justify-center "
          variants={{
            hidden: { opacity: 0, y: 150 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          style={{ scale: linkY }}
        >
          <div className="flex flex-col  gap-10 items-center ">
            <motion.h1 className="text-7xl text-justify font-semibold">
              Selvam
            </motion.h1>
            <h2 className="text-5xl text-justify">Frontend Developer</h2>
            <h2 className="text-3xl text-justify">
              Mainly focused on JavaScript environment
            </h2>
          </div>
          <motion.div className="flex felx-row items-center gap-3">
            <a
              href="mailto:theselvam18@gmail.com"
              target="_blank"
              className="inline-flex text-2xl"
            >
              <img src={image} className="w-8 h-8" />
            </a>
          </motion.div>
        </motion.section>

        <Stats />
        <ProjectsMini />
      </main>
      <Footer />
    </>
  );
}
