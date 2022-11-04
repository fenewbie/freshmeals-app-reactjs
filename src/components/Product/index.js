import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

import Rating from "./Rating";

const Product = ({
    to='/', 
    imgSrc, 
    label = '20%',
    name='product name',
    newPrice='32.00',
    oldPrice='46.00',
    wishList
}) => {

    // console.log(wishList);
    return (
        <div className="border-2 border-zinc-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300 group">
            
            <Link to={to} className={`block relative bg-slate-100 pt-[100%]`}>
                {label && <span className="absolute top-4 right-4 text-sm font-bold text-white py-1 px-3 rounded-tl-2xl rounded-br-2xl bg-[#80B500]">{label}</span>}

                <img src={imgSrc} title='product image' className="absolute top-0 left-0 w-full h-full object-contain"/>

                <div className='absolute left-0 top-1/2 w-full text-center hidden group-hover:block animate-[fadeOut_300ms_ease-out_both]'>
                    <button title='' className='h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-[#80B500] hover:text-white transition-all duration-300 mx-1'>
                        <FaRegEye className="mx-auto"/>
                    </button>

                    <button title='' className='h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-[#80B500] hover:text-white transition-all duration-300 mx-1'>
                        <FaShoppingCart className="mx-auto"/>
                    </button>

                    <button title='' className='h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-[#80B500] hover:text-white transition-all duration-300 mx-auto'>
                        {wishList ? <AiTwotoneHeart className="mx-auto"/> : <AiOutlineHeart className="mx-auto"/>}
                    </button>
                </div>
            </Link>

            <div className="p-8">
                <Rating/>
                <Link to={to} className="text-[15px] text-center capitalize font-bold mt-1 block hover:text-greenBtn transition-all duration-300">{name}</Link>
                <div className="flex justify-center mt-2">
                    <h4 className='text-xl font-bold text-greenBtn'>{newPrice}</h4>
                    <h4 className='text-xl font-bold text-greenBtn line-through ml-3 opacity-60'>{oldPrice}</h4>
                </div>
            </div>

        </div>
    )
};


export default Product;