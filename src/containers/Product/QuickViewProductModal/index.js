import { Link, useParams } from 'react-router-dom';
import Rating from '../ProductItem/Rating';
// import Button from '../Button';
import ProductCounter from './ProductCounter';
import SocialLink from '../../../components/UI/SocialLink';
import WishList from './Wishlist';

import { BsArrowLeftRight } from 'react-icons/bs';
import Modal from '../../../components/Modal';

const QuickViewProductModal = ({
	setIsModalShowing,
	docs,
	isOpen,
	handleClose,
	handleOpenModal2,
}) => {
	const { productId } = useParams();

	return (
		<Modal
			isOpen={isOpen}
			handleClose={handleClose}
			classNames="fixed top-0 left-0 bottom-0 right-0 bg-[#0003] z-[10000]"
		>
			<div>
				<span>Quick View Product</span>

				<button
					onClick={handleOpenModal2}
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ml-10"
				>
					Add To Card
				</button>
			</div>



			
			{/* <div className="bg-red-500 p-8 rounded grid grid-cols-1 md:grid-cols-2 md:gap-14 border-2">				
				{docs
					.filter((title) => title.id === productId)
					.map((el) => (
						<>
							<div>
								<img
									src={el.image}
									className="w-full h-full object-contains"
									alt={el.title}
								/>
							</div>
							<div>
								<Rating amount={`${el.amountRating} reviews`} />
								<h4 className="text-3xl font-bold">{el.title}</h4>
								<div className="flex items-center">
									<span className="inline-block text-[50px] font-bold text-greenBtn">
										${el.discount}
									</span>
									<span className="inline-block text-[42px] font-bold text-greenBtn opacity-50 line-through ml-4">
										${el.price}
									</span>
								</div>
								<div className="flex items-center py-5 mb-8 border-t-[1px] border-b-[1px] border-grey">
									<span>Categories:</span>
									<ul className="flex items-center ml-5">{el.label} </ul>
								</div>
								<ProductCounter />
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
			</div> */}
		</Modal>
	);
};

export default QuickViewProductModal;
