import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TechStack from "./TechStack";
import FetchStats from "./FetchStats";

import Social from "./Social";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 1,
  });
  const techStack = [
    "js",
    "react",
    "redux",
    "reactrouter",
    "tailwindcss",
    "nodejs",
    "git",
    "npm",
  ];
  return (
    <>
      <section className="my-10  lg:h-screen " id="stats">
        <h1 className="max-sm:text-3xl lg:text-7xl max-lg:text-7xl m-5 text-center">
          Current Stats
        </h1>
        <motion.div
          className="grid grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-1 max-sm:grid-cols-2 gap-3 ;"
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className=" col-start-[1] col-end-[7] max-lg:col-start-[1] max-lg:col-end-[5] overflow-hidden bg-[#1e293b] border-2 rounded-2xl border-[#1e293b]">
            <div className="flex flex-initial">
              <div className="border-1 rounded-full p-3 m-3">
                <h1 className="text-xl">Tech Stack</h1>
              </div>
            </div>
            <motion.div className="flex flex-wrap justify-center gap-1 max-sm:grid max-sm:grid-cols-2 m-3">
              {techStack.map((item) => (
                <TechStack
                  stackName={item}
                  key={item}
                  className="overflow-hidden"
                />
              ))}
            </motion.div>
          </div>
          <div className=" col-start-1 col-end-4 max-lg:col-start-[1] max-lg:col-end-[3] max-md:col-end-[5] bg-[#1e293b] border-0.5 rounded-2xl">
            <FetchStats />
          </div>
          <div className="col-start-4 col-end-[7] max-lg:col-start-[3] max-lg:col-end-[5] max-md:col-start-1 bg-[#1e293b] border-0.5 rounded-2xl">
            <Social />
          </div>
        </motion.div>
      </section>
    </>
  );
}

