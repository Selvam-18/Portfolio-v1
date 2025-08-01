import MiniCard from "./MiniCard";
import data from "../../utils/projectData";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import ArrowImg from '../../assets/arrow.png';


export default function ProjectsMini() {
    return(
        <>
            <section className="mb-20 " id="projects">
                <h1 className="lg:text-7xl max-lg:text-7xl max-sm:text-3xl text-center">Milestones </h1>
                <div className="flex flex-col sm:flex-row my-4 gap-2 ">
                    {data.slice(0,2).map((item) => <MiniCard key={item.heading} src={item.img.src} title={item.heading} description={item.description}/>)}
                    <motion.div className="flex flex-row items-center justify-center lg:w-1/3 p-3"
                    whileHover={{scale: 1.1}}>
                    
                    <Link to='projects' className="text-3xl inline-flex items-baseline">Load more projects  <img src={ArrowImg} className="w-6 h-6 pl-1 "/></Link>
                   
                    </motion.div>
                </div>
            </section>

        </>
    )
}