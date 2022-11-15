import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../../services/firebase";
import { Link } from "react-router-dom"
import Timer from "./Timer";

const CountDown = () => {
    const [item, setItem] = useState();

    useEffect(() => {
		const getData = async () => {
			const data = await getDocs(collection(db, "countdown"));
			setItem(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]);
		};
	  
		getData();
	}, []);

    return (
        <div className="bg-[#F7F5EB] py-[120px] px-4 sm:px-8">
            <div className="lg:w-[1200px] max-w-full mx-auto">
                {
                    item && 
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-10">
                        <div className="lg:col-span-5">
                            <img src={item.image} alt='countdown'/>
                        </div>

                        <div className="lg:col-span-7">
                            <h6 className="font-bold text-greenBtn capitalize mb-3">{item.subtitle}</h6>
                            <h1 className="text-2xl lg:text-5xl min-[600px]:text-3xl md:text-4xl font-bold capitalize">{item.title1}</h1>
                            <h1 className="text-2xl lg:text-5xl min-[600px]:text-3xl md:text-4xl font-bold md:font-bold capitalize">{item.title2}</h1>
                            <Timer day={2}/>
                            <Link to='/shop' className="group relative  mt-14 flex items-center justify-center w-full h-10  md:w-[150px] lg:h-14 md:h-12 bg-[#80B500]  hover:text-gray-900 hover:bg-black focus:outline-none focus:z-10 focus:ring focus:ring-blue-100 after:content-[''] after:absolute after:top-0 after:left-0 after:bg-white after:w-[0%] after:h-full after:transition-all after:duration-[400ms] after:ease-in-out hover:after:w-full hover:after:border hover:after:border-gray-900">
                                <span className="group-hover:text-neutral-700 text-sm font-bold text-white uppercase relative z-10 m-auto">Shop now</span>
                            </Link>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default CountDown;