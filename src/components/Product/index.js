import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

import Rating from "./Rating";
import Label from "./Label";
import Button from "./Button";
import Price from "./Price";

import style from './product.module.css';

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
        <div className="border-2 border-zinc-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300">
            
            <Link to={to} className={`block relative pt-[100%] ${style.link}`}>
                <image url={imgSrc} className='absolute top-0 left-0' alt='product image'/>
                {label && <Label>{label}</Label>}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-full text-center  ${style.control}`}>
                    <Button title='Quick View'><FaRegEye className="mx-auto"/></Button>
                    <Button title='Add to Cart'><FaShoppingCart className="mx-auto"/></Button>
                    <Button title='Wishlist'>
                        {wishList ? <AiTwotoneHeart className="mx-auto"/> : <AiOutlineHeart className="mx-auto"/>}
                    </Button>
                </div>
            </Link>

            <div className="p-8">
                <Rating/>
                <Link to={to} className="text-[15px] text-center capitalize font-bold mt-1 block hover:text-greenBtn transition-all duration-300">{name}</Link>
                <div className="flex justify-center mt-2">
                    <Price>{newPrice}</Price>
                    {oldPrice && <Price className='line-through ml-3 opacity-60'>{oldPrice}</Price>}
                </div>
            </div>

        </div>
    )
};


export default Product;