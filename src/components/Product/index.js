import { Link, useParams } from 'react-router-dom';
import { useFetchProductQuery } from '../../redux/api/apiSlice';

import { FaRegEye } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import Rating from './Rating';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';


const ProductCard = () => {
	const {id} = useParams()
	const {data:product, isError, error} = useFetchProductQuery(id ? id : skipToken)
	
	useEffect(() => {
		isError && <div>{error}</div>;
	}, [isError]);

	


	return (
		<div className="border-2 border-zinc-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300 group">
			{product?.map((item) => (
				<div>
					<Link className={`block relative bg-slate-100 pt-[100%]`}>
						<span className="absolute top-4 right-4 text-sm font-bold text-white py-1 px-3 rounded-tl-2xl rounded-br-2xl bg-greenBtn">
							{item.label}
						</span>
						)
						<img
							src={item.image}
							title="product"
							className="absolute top-0 left-0 w-full h-full object-contain"
							alt={item.title}
						/>
						<div className="absolute left-0 top-1/2 w-full text-center hidden group-hover:block animate-[fadeOut_300ms_ease-out_both]">
							<button
								title=""
								className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-1"
							>
								<FaRegEye className="mx-auto" />
							</button>

							<button
								title=""
								className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-1"
							>
								<FaShoppingCart className="mx-auto" />
							</button>

							<button
								title=""
								className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-auto"
							>
								<AiTwotoneHeart className="mx-auto" />
								{/* {wishList ? (
								) : (
									<AiOutlineHeart className="mx-auto" />
								)} */}
							</button>
						</div>
					</Link>

					<div className="p-8">
						<Rating />
						<Link className="text-[15px] text-center capitalize font-bold mt-1 block hover:text-greenBtn transition-all duration-300">
							{item.title}
						</Link>
						<div className="flex justify-center mt-2">
							<h4 className="text-xl font-bold text-greenBtn">£20.00</h4>
							<h4 className="text-xl font-bold text-greenBtn line-through ml-3 opacity-60">
								$25.00
							</h4>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductCard;
