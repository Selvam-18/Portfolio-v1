export default function MiniCard({src, title, description}) {
    return(
        <>
            <div className=" lg:w-1/3 md:w-1/3 bg-[#1e293b] rounded-2xl">
                <img src={src} className="w-full h-60 p-2 rounded-3xl"/>
                <p className="flex flex-initial  m-3">2024</p>
                <h1 className="text-3xl text-left m-3 font-semibold">{title}</h1>
                <p className="font-medium text-left m-3">{description}</p>
            </div>
        </>
    )
}