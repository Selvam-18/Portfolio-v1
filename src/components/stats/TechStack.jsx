import { motion } from 'framer-motion';
import  StackIcon  from 'tech-stack-icons'

export default function TechStack({stackName}) {
    return(
        <>
            <motion.div 
                variants={{
                    hidden: {y:30, opacity:0},
                    visible: {y: 0, opacity:1}
                }}
                initial='hidden'
                animate='visible'
                whileHover={{y: -20}}
                className='overflow-hidden'
            >
                <StackIcon name={stackName} variant="dark" className='w-24 h-24 sm:w-24 sm:h-24 lg:w-48 lg:h-48 p-2'/>
                {/* <StackIcon name={stackName} variant="dark"/>  */}

            </motion.div>
        </>
    )
}