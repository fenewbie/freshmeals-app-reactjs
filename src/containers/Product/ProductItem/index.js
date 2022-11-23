import { FaRegEye } from 'react-icons/fa';
import { AiTwotoneHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from '../ProductItem/Rating'

const ProductItem = ({
	rating, numReviews,
	image,
	label,
	title,
	price,
	discount,
	handleClick,
}) => {
	return (
		<div className="border-2 border-zinc-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300 group">
			<div>
				<Link className={`block relative bg-slate-100 pt-[100%]`}>
					<span className="absolute top-4 right-4 text-sm font-bold text-white py-1 px-3 rounded-tl-2xl rounded-br-2xl bg-greenBtn z-10">
						{label}
					</span>
					<img
						src={image}
						title="product"
						className="absolute top-0 left-0 w-full h-full object-contain"
						alt={title}
					/>
					<div className="absolute left-0 top-1/2 w-full text-center opacity-0 transition-all duration-300 translate-y-1/2 group-hover:opacity-100 group-hover:-translate-y-1/2">
						<button
							className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-1"
							onClick={handleClick}
						>
							<FaRegEye className="mx-auto" />
						</button>

						<button className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-1">
							<FaShoppingCart className="mx-auto" onClick={handleClick} />
						</button>

						<button className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-auto">
							<AiTwotoneHeart className="mx-auto" onClick={handleClick} />
						</button>
					</div>
				</Link>

				<div className="p-8">
					<Rating value={rating} text={`(${numReviews} reviews)`} />
					<Link className="text-[15px] text-center capitalize font-bold mt-1 block hover:text-greenBtn transition-all duration-300">
						{title}
					</Link>
					<div className="flex justify-center mt-2">
						<h4 className="text-xl font-bold text-greenBtn">${discount}</h4>
						<h4 className="text-xl font-bold text-greenBtn line-through ml-3 opacity-60">
							${price}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProductItem;
