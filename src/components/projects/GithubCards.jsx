import LinkImg from '../../assets/link.png';
import { motion } from 'framer-motion';

export default function GithubCards({name, description, url}) {
    return(
        <>
            <motion.div className="flex flex-col justify-between gap-4 bg-[#1e293b]  rounded-2xl p-3 m-3" whileHover={{scale: 1.05}}>
                <div>
                <h1 className="text-3xl font-semibold p-2">{name}</h1>

                <p className="text-xl p-2">{description}</p>
                </div>
                <div className="flex justify-center">

                <motion.a whileHover={{x: 10}} href={url} target="_blank" className="text-xl p-3 inline-flex items-baseline ">Repo<img src={LinkImg} className='w-4 h-4 ml-2' /></motion.a>
                </div>
            </motion.div>
        </>
    )
}