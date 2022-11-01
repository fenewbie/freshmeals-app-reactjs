import { Link } from 'react-router-dom'
import { BsFillBasket2Fill } from "react-icons/bs"

const Button = () => {
    return (
        <Link to='/shop' className='text-xs sm:text-lg md:text-[0.9rem] sm:mt-3 capitilize font-semibold mt-1.5 border-[1px] border-solid rounded border-white px-2 py-1 inline-block hover:bg-[#ffffff2b]'>
			<div className='flex items-center'>
				<span className='mr-[7px]'>Buy Now</span>
				<BsFillBasket2Fill/>
			</div>
		</Link>
    )
}


export default Button