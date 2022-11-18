import { Link } from 'react-router-dom';
import Rating from '../../Product/Rating';
import Button from '../Button';
import ProductCounter from './ProductCounter';
import SocialLink from '../SocialLink';
import WishList from './Wishlist';

import { BsArrowLeftRight } from 'react-icons/bs'

const ProductDetail = ({
    imgSrc = 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/product/4.png',
    alt='product',
    rating = 4, 
    title = 'Name of Products', 
    oldPrice = 100, 
    newPrice = 20,
    categories = ['Item 1', 'Item 2', 'Item 3'],
    amountRating = 24,
    wishlist
}) => {
    return (
        <div className="bg-white p-8 rounded grid grid-cols-1 md:grid-cols-2 md:gap-14 border-2">
            <div className="">
                <img src={imgSrc} className="w-full h-full object-contains" alt={alt}/>
            </div>
            <div className="">
                <Rating amount={`${amountRating} reviews`}/>
                <h4 className="text-3xl font-bold">{title}</h4>
                <div className='flex items-center'>
                    <span className="inline-block text-[50px] font-bold text-greenBtn">${newPrice.toFixed(2)}</span>
                    <span className="inline-block text-[42px] font-bold text-greenBtn opacity-50 line-through ml-4">${oldPrice.toFixed(2)}</span>
                </div>
                <div className='flex items-center py-5 mb-8 border-t-[1px] border-b-[1px] border-grey'>
                    <span>Categories:</span>
                    <ul className='flex items-center ml-5'>
                        {categories.map((item, index) => 
                            <li key={item} className='font-medium mr-2'>
                                <Link to='/' className='hover:text-greenBtn'>
                                    {index < (categories.length - 1) ? item  + ',': item}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
                <ProductCounter/>
                <div className='flex mt-5'>
                    <div className='flex items-center mr-10 hover:text-greenBtn transition-all cursor-pointer'>
                        <WishList wishlist={wishlist}/>
                        <span className='ml-1 font-medium'>Add to Wishlist</span>
                    </div>
                    <Link className='flex items-center  hover:text-greenBtn transition-all'>
                            <BsArrowLeftRight/>
                            <span className='ml-1 font-medium'>Compare</span>
                    </Link>
                </div>
                <div className='flex items-center border-t-[1px] mt-8'>
                    <span className='mr-6'>Share:</span>
                    <SocialLink/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;