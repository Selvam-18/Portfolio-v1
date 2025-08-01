
import { motion } from 'framer-motion'
import ProjectCard from '../components/projects/ProjectCard'

import data from '../utils/projectData'
import Github from '../components/projects/Github'
import Footer from '../components/Footer'

export default function Projects() {
    return(
        <>
            <h1 className='text-center text-7xl my-5 py-5 max-sm:text-3xl'>Milestones in the Journey</h1>

                <motion.div
                    className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-5 transition-all ease-in duration-500 my-10 "
                    variants={{
                        visible: {transition: { staggerChildren: 0.5}}
                    }}

                    >
                    
                    {data.map((project) => 
                        <ProjectCard 
                            heading={project.heading}
                            description={project.description}
                            link={project.link}
                            image={project.img.src}
                            key={project.repoUrl}
                            topics={project.topics}
                            repoUrl={project.repoUrl}
                            />)}
                    
                </motion.div>
            {/* </AnimatePresence> */}
                        <Github />
                        <Footer />
        </>
    )
}