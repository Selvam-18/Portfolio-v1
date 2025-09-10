import { useEffect, useState } from "react"
import GithubCards from "./GithubCards"
// import env from 'dotenv'


// env.config();
export default function Github() {
    const apiKey = import.meta.env.VITE_GIT_API
    const [ stats, setStats ] = useState()
    // console.log(stats)
    // console.log(apiKey, 'working')
    async function githubStats() {
        const options = {
            Authorization: apiKey
        }
        const response = await fetch('https://api.github.com/users/Selvam-18/repos',{
            headers: options
        })

        const resData = await response.json()
        // console.log(resData)
        return resData;
    }

    useEffect(()=>{
        async function fetchStats() {
            const response = await githubStats()
            // console.log('Setting stats')
            setStats(response)
        }

        fetchStats()
    }, [])
    return(
        <>
        <h1 className='max-sm:text-3xl lg:text-7xl mt-24 text-center'>GitHub Repositories</h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1 justify-evenly max-sm:justify-center w-full my-10  mb-20">

            {stats && stats.map((item) => 
                <GithubCards name={item.name} key={item.name} description={item.description} url={item.html_url} />
                )}
        </div>
        </>
    )
}

