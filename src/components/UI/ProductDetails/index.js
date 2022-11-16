import Rating from '../../Product/Rating';
import Quantity from './Quantity';

const ProductDetail = ({
    imgSrc = 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/product/4.png',
    rating = 4, 
    title = 'Name of Products', 
    oldPrice = 100.00, 
    newPrice = 20,
    categories = ['Item 1', 'Item 2', 'Item 3'],
    amountRating = 24,
    wishList
}) => {
    return (
        <div className="bg-white p-8 rounded flex flex-wrap border-2">
            <div className="lg:w-1/2 w-full">
                <img src={imgSrc} className="w-full h-full object-contains"/>
            </div>
            <div className="lg:w-1/2 w-full">
                <Rating amount={`${amountRating} reviews`}/>
                <h4 className="text-2xl font-bold">{title}</h4>
                <div className='flex items-center'>
                    <span className="inline-block text-[55px] font-bold text-greenBtn">${newPrice.toFixed(2)}</span>
                    <span className="inline-block text-5xl font-bold text-greenBtn opacity-50 line-through ml-4">${oldPrice.toFixed(2)}</span>
                </div>
                <div className='flex items-center py-5 border-t-[1px] border-b-[1px] border-grey'>
                    <span>Categories:</span>
                    <ul className='flex items-center ml-11'>
                        {categories.map((item, index) => <li key={item} className='font-medium mr-2'>{index < (categories.length - 1) ? item  + ',': item}</li>)}
                    </ul>
                </div>
                <div className='flex'>
                    <Quantity/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;