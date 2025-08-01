import GitImg from '../../assets/github.png'
import LeetImg from '../../assets/leetcode.png'
import LinkedImg from '../../assets/linkedin.png'

export default function Social() {
    return(
        <>
            <div className="flex flex-initial">
                <div className="border-1 rounded-full p-3 m-3">

                    <h1 className="text-xl">Social Profiles</h1>
                </div>
            </div>
            <div className="flex justify-evenly m-3 p-2 sm:flex-wrap">
                <a href='https://github.com/Selvam-18' target='_blank'><img src={GitImg} className='w-18 h-18 lg:w-24 lg:h-24'/></a>
                <a href='https://leetcode.com/u/Selvam18' target='_blank'><img src={LeetImg} className='w-18 h-18 lg:w-24 lg:h-24'/></a>
                <a href='https://www.linkedin.com/in/selvamk18/' target='_blank'><img src={LinkedImg} className='w-18 h-18 lg:w-24 lg:h-24'/></a>
                
            </div>
        </>
    )
}