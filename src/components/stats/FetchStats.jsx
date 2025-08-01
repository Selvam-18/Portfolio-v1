import { useEffect, useState } from "react"
import AccuracyImg from '../../assets/accuracy.png'
import LanguageImg from '../../assets/language.png'
import ConsistentImg from '../../assets/consistent.png'
import mtImg from '../../assets/matrix.png'
// import Chip from '@mui/material/Chip';



export default function FetchStats() {
    const apiKey = import.meta.env.VITE_MT_API
    const [ stats, setStats ] = useState({
        wpm: 84,
        acc: 98,
        consistency: 97
    })
     async function monkeytypePb() {

        const options = {
            Authorization: apiKey,
            'Content-Type': 'application/json'
        }

        const response = await fetch('https://api.monkeytype.com/users/personalBests?mode=time', {
            headers: options,
            mode: 'cors'
        })

        const resData = await response.json()
        
        const pb60 = resData.data['60']

        // console.log("Pb", pb60[0])

        return pb60[0];
    }

    
    useEffect(()=>{
        async function fetchData() {
            const monkeytypeStats = await monkeytypePb()
            // console.log('API call', monkeytypeStats)
            setStats(monkeytypeStats)
        }
        fetchData()
       
    }, [])
    return(
        <>
            <div className="min-h-32 flex flex-col">
                <a href="https://monkeytype.com/profile/selvam18" target="_blank">
                <div className="flex flex-row p-3 justify-between ">
                    <div className="flex border-1 rounded-full ">
                        {/* <div className="border-1 rounded-full p-3 m-3">

                                <h1 className="text-xl">Social Profile</h1>
                                </div> */}
                    <div className="flex items-center p-1 ">
                        <div>
                            <img src={mtImg} className="rounded-full m-1 w-8 h-8"/>
                        </div>
                        
                        <h3 className=" text-xl m-1">
                            Typing Stats
                        </h3>
                    </div>
                    </div>
                    
                </div>
                <div className="flex flex-row items-baseline px-7 justify-center">
                <h1 className="text-7xl">{Math.round(stats.wpm)}</h1>
                <p className="lg:text-2xl p-2">WPM</p>
                {/* {stats.acc} */}
                </div>
                <div className="flex justify-evenly my-3">
                    <div className="flex">
                        <img src={AccuracyImg} className="w-7 h-7 lg:w-10 lg:h-10" />
                        <p className="lg:text-3xl p-1">{stats.acc}</p>
                    </div>
                    <div className="flex">
                        <img src={ConsistentImg} className="w-7 h-7 lg:w-10 lg:h-10"   />
                        <p className="lg:text-3xl p-1">{stats.consistency}</p>
                    </div>
                    <div className="flex">
                        <img src={LanguageImg} className="w-6 h-6 lg:w-9 lg:h-9" />
                        <p className="lg:text-3xl p-1">EN</p>
                    </div>
                </div>
                </a>
            </div>
        </>
    )
}