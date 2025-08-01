// import Link from '../assets/link.png';
import { motion } from 'framer-motion'

export default function Footer() {
    return(
        <>
            <footer className="border-t flex flex-wrap justify-between">
                <div className=" p-2 flex items-center">
                    <p className="p-2 text-xl">Selvam &copy; 2025, All rights reserved.</p>
                </div>
                {/* <div></div> */}
                <div className=" my-4 mx-2 flex flex-col items-center">
                    <h1 className="text-2xl">Social Links</h1>
                    <div className="p-2 m-2 flex flex-col">
                        {/* <h1>Section1</h1>
                        <h1>Section1</h1>
                        <h1>Section1</h1> */}
                        <motion.div whileHover={{scale: 1.1}}>

                        &#x2022; <motion.a href="https://letterboxd.com/selvam_18" target="_blank" >Letterboxd</motion.a>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.1}}>

                        &#x2022; <a href="https://monkeytype.com/profile/selvam18" target="_blank">Monkeytype</a>
                        </motion.div>
                       
                    </div>
                </div>
            
            </footer>
        </>
    )
}