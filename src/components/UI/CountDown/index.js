import { Link } from "react-router-dom"

const CountDown = () => {
    return (
        <div className="bg-[#F7F5EB] py-[120px] px-4 sm:px-8">
            <div className="lg:w-[1200px] max-w-full mx-auto">
                <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">

                    <div className="lg:col-span-5">
                        <img src='https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/banner/11.png' alt='countdown image'/>
                    </div>

                    <div className="lg:col-span-7">
                        <h6 class="font-bold text-greenBtn capitalize mb-3">Todays hot deals</h6>
                        <h1 class="text-2xl lg:text-5xl min-[600px]:text-3xl md:text-4xl font-bold capitalize">Original stock honey</h1>
                        <h1 class="text-2xl lg:text-5xl min-[600px]:text-3xl md:text-4xl font-semibold md:font-bold capitalize">Compo package</h1>

                        <div className="mt-12 flex flex-wrap">
                            <div className="inline-block text-center mr-6 my-3 sm:my-0">
                                <span className="h-12 w-12 lg:h-24 lg:w-24 min-[600px]:h-14 min-[600px]:w-14 rounded-full bg-white text-xl lg:text-3xl font-bold text-center flex justify-center items-center">00</span>
                                <span className="uppercase text-sm lg:text-lg inline-block mt-2">Days</span>
                            </div>
                            <div className="inline-block text-center mr-6 my-3 sm:my-0">
                                <span className="h-12 w-12 lg:h-24 lg:w-24 min-[600px]:h-14 min-[600px]:w-14 rounded-full bg-white text-xl lg:text-3xl font-bold text-center flex justify-center items-center">00</span>
                                <span className="uppercase text-sm lg:text-lg inline-block mt-2">Days</span>
                            </div>
                            <div className="inline-block text-center mr-6 my-3 sm:my-0">
                                <span className="h-12 w-12 lg:h-24 lg:w-24 min-[600px]:h-14 min-[600px]:w-14 rounded-full bg-white text-xl lg:text-3xl font-bold text-center flex justify-center items-center">00</span>
                                <span className="uppercase text-sm lg:text-lg inline-block mt-2">Days</span>
                            </div>
                            <div className="inline-block text-center mr-6 my-3 sm:my-0">
                                <span className="h-12 w-12 lg:h-24 lg:w-24 min-[600px]:h-14 min-[600px]:w-14 rounded-full bg-white text-xl lg:text-3xl font-bold text-center flex justify-center items-center">00</span>
                                <span className="uppercase text-sm lg:text-lg inline-block mt-2">Days</span>
                            </div>
                        </div>

                        <Link to='/shop' className="group relative  mt-14 flex items-center justify-center w-full h-10  md:w-[150px] lg:h-14 md:h-12 bg-[#80B500]  hover:text-gray-900 hover:bg-black focus:outline-none focus:z-10 focus:ring focus:ring-blue-100 after:content-[''] after:absolute after:top-0 after:left-0 after:bg-white after:w-[0%] after:h-full after:transition-all after:duration-[400ms] after:ease-in-out hover:after:w-full hover:after:border hover:after:border-gray-900">
                            <span className="group-hover:text-neutral-700 text-sm font-bold text-white uppercase relative z-10 m-auto">Shop now</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountDown;