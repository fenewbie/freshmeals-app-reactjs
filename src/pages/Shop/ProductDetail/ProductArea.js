import { BsArrowLeftRight } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import * as cs from '../../../constants/Constant';

import { Link } from 'react-router-dom';
import SocialLink from '../../../components/UI/SocialLink';
import Button from '../../../components/UI/Button';
import WishList from '../../../containers/Product/QuickViewProductModal/Wishlist';
import ProductListImages from './ProductListImages';
import ProductDescTabs from './ProductDescTabs';
import Rating from '../../../containers/Product/ProductItem/Rating';


function ProductArea({product}) {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-14">
				<ProductListImages images={product.images} />
				<div>
					<div className="">
						<Rating
							value={product.rating}
							text={product.reviews}
						/>
						<h4 className="text-2xl font-bold mt-4">
							{product.title}
						</h4>
						<div className="flex items-center">
							<span className="inline-block text-[40px] font-semibold text-greenBtn">
								${product.discount}
							</span>
							<span className="inline-block text-[32px] font-bold text-greenBtn opacity-50 line-through ml-4">
								${product.price}
							</span>
						</div>
					</div>
					<div className="flex items-center py-5 mb-8 border-t-[1px] border-b-[1px] border-grey">
						<span>Categories:</span>
						<div className="ml-3">
							{product.category.map((item, index) => (
								<span
									className="capitalize font-semibold"
									key={item}
								>
									{index === product.category.length - 1
										? item
										: `${item},`}
								</span>
							))}
						</div>
					</div>
					<form
						className="flex"
						onSubmit={(e) => e.preventDefault()}
					>
						<div className="flex">
							<button className="inline-block w-12 rounded-md border-2  border-gray-300 outline-greenBtn">
								<AiOutlineMinus className="mx-auto" />
							</button>
							<input
								type="number"
								className="text-lg font-bold text-center w-24 border-2 rounded-md  mx-2 border-gray-300 focus:outline-greenBtn"
							/>
							<button className="inline-block w-12 border-2 rounded-md border-gray-300 outline-greenBtn">
								<AiOutlinePlus className="mx-auto" />
							</button>
						</div>
						<Button
							btn="cart"
							className="mt-0 ml-5"
						>
							Add to cart
						</Button>
					</form>
					<div className="flex mt-5">
						<div className="flex items-center mr-10 hover:text-greenBtn transition-all cursor-pointer">
							<WishList />
							<span className="ml-1 font-medium">
								Add to Wishlist
							</span>
						</div>
						<Link className="flex items-center  hover:text-greenBtn transition-all">
							<BsArrowLeftRight />
							<span className="ml-1 font-medium">Compare</span>
						</Link>
					</div>
					<div className="flex items-center border-t-[1px] mt-8">
						<span className="mr-6">Share:</span>
						<SocialLink />
					</div>					
				</div>
			</div>
			<ProductDescTabs
				productDesc={product.desc}
				review={product.review}
			/>
		</>
	);
}

export default ProductArea;
