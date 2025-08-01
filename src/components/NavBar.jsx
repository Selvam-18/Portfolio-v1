import { NavLink } from "react-router-dom"
import { motion } from 'framer-motion'

export default function NavBar() {
    return(
        <nav >
            <ul className="flex flex-row justify-center gap-5">
                <div>
                <NavLink to="/"  className={({isActive}) => `text-xl navbar p-2 ${isActive ? 'active-bar' : ''}`}>Home</NavLink>

                </div>
                <div>

                <NavLink to="/projects" className={({isActive}) => `text-xl navbar p-2 ${isActive ? 'active-bar' : ''}`}>Projects</NavLink>
                </div>
                <div>

                <NavLink to="/about" className={({isActive}) => `text-xl navbar p-2 ${isActive ? 'active-bar' : ''}`}>About</NavLink>
                </div>
                {/* <NavLink to="/stats" className="btn">Stats</NavLink> */}
                {/* <NavLink className="btn">Home</NavLink> */}
            
            </ul>
        </nav>
    )
}