import { Link, useParams } from 'react-router-dom';
import Rating from '../../components/ProductCard/Rating';
// import Button from '../Button';
import QuickReviewProduct from './QuickReviewProduct';
import SocialLink from '../../components/UI/SocialLink';
import WishList from './Wishlist';

import { BsArrowLeftRight } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

const QuickViewProduct = ({ setIsModalShowing, data }) => {
	const { id } = useParams();
	return (
		<div className="bg-red-500 p-8 rounded grid grid-cols-1 md:grid-cols-2 md:gap-14 border-2">
			<button className="" onClick={() => setIsModalShowing(false)}>
				<IoClose />
			</button>
			{data
				.filter((title) => title.id === id)
				.map((el) => (
					<>
						<div>
							<img
								src={el.image}
								className="w-full h-full object-contains"
								alt={el.title}
							/>
						</div>
						<div >
							<Rating amount={`${el.amountRating} reviews`} />
							<h4 className="text-3xl font-bold">{el.title}</h4>
							<div className="flex items-center">
								<span className="inline-block text-[50px] font-bold text-greenBtn">
									${el.discount.toFixed(2)}
								</span>
								<span className="inline-block text-[42px] font-bold text-greenBtn opacity-50 line-through ml-4">
									${el.price.toFixed(2)}
								</span>
							</div>
							<div className="flex items-center py-5 mb-8 border-t-[1px] border-b-[1px] border-grey">
								<span>Categories:</span>
								<ul className="flex items-center ml-5">
									{el.label.map((item, index) => (
										<li key={item} className="font-medium mr-2">
											<Link to="/" className="hover:text-greenBtn">
												{index < el.label.length - 1 ? item + ',' : item}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<QuickReviewProduct />
							<div className="flex mt-5">
								<div className="flex items-center mr-10 hover:text-greenBtn transition-all cursor-pointer">
									<WishList wishlist={el.title} />
									<span className="ml-1 font-medium">Add to Wishlist</span>
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
					</>
				))}
		</div>
	);
};

export default QuickViewProduct;
