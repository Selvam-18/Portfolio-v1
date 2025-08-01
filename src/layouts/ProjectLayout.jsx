import { useEffect } from "react"
import Projects from "../pages/Projects"

export default function ProjectLayout() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <>
            <Projects />
        </>
    )
}