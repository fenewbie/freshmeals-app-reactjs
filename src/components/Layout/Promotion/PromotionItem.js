import { Link } from 'react-router-dom'
import { BsFillBasket2Fill } from "react-icons/bs"

const PromotionItem = (props) => {
	console.log(props.color);
    return (
        <div className='w-full lg:w-1/3 md:w-1/2 px-[15px] my-[15px]'>
			<div className='lg:pt-[60%] pt-[50%] relative overflow-hidden'>
				<div className={`absolute top-0 left-0 w-full h-full flex items-center  px-[30px] md:px-[25px] hover:scale-110 transition-all duration-[1000ms] border-2 border-solid rounded bg-[${props.color}]`}>
						<div className='text-[#fffffff7] shrink-0 grow'>
							<span className='text-xs xsm:text-sm sm:text-lg md:text-[0.9rem] font-semibold uppercase'>{props.value.type}</span>
							<h2 className='font-bold text-[1.4rem] xsm:text-[1.8rem] sm:text-[2.5rem] md:text-[1.8rem] capitalize'>{props.value.title}</h2>
							<h4 className='text-[1rem] xsm:text-[1.4rem]  sm:text-[2rem] md:text-[1.5rem] capitalize'>{props.value.subtitle}</h4>
							<Link to='/shop' className='text-xs xsm:text-sm sm:text-lg md:text-[0.9rem] sm:mt-3 capitilize font-semibold mt-1 border-2 border-solid rounded border-white px-2 inline-block'>
								<div className='flex items-center'>
									<span className='mr-[7px]'>Buy Now</span>
									<BsFillBasket2Fill/>
								</div>
							</Link>
						</div>
						<div className='h-full'>
							<img src={props.value.image} className='h-full w-full object-contain relative left-2.5'/>
						</div>
			    </div>
			</div>
		</div>

    )
}

export default PromotionItem;