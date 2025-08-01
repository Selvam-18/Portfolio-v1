import Chip from '@mui/material/Chip';

import { motion } from 'framer-motion';

export default function ProjectCard({heading, description, link, image, topics, repoUrl}) {
    return(
        <>
            <motion.div className="card my-2 bg-[#1e293b] rounded-2xl p-3"
            variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                whileHover={{y:-20, duration:0.3}}
                    >
                <motion.img src={image} className="w-full h-80 max-lg:h-60 max-sm:h-50 max-sm:w-70 p-2 rounded-2xl" whileHover={{scale: 1.02}}/>
                <h1 className="text-3xl text-left px-4 py-3 font-semibold">{heading}</h1>
                <p className="text-xl text-left px-4 py-3">{description}</p>

                <div className="chips-site flex flex-row justify-between">
                    <div className="chips flex flex-wrap w-2/3 gap-3">

                {topics.map(item =><Chip key={item} label={item} color='info' variant='outlined' size='medium'/>)}
                   
                    </div>
                    <div>

                {link !=='' ? <a href={link} target='_blank' className='flex items-center project-link hover:rounded-2xl p-2 text-lg'>Live Preview</a> : 
                <a href={repoUrl} target='_blank' className='flex items-center project-link p-2 hover:rounded-2xl text-lg'>Repository</a>}
                    </div>
                
                </div>
            </motion.div>

        </>
    )
}