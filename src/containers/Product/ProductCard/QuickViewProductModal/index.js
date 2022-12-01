import { Link} from 'react-router-dom';
import Rating from '../Rating';
import ProductCounter from './ProductCounter';
import SocialLink from '../../../../components/UI/SocialLink';
import WishList from './Wishlist';

import { BsArrowLeftRight } from 'react-icons/bs';
import Modal from '../../../../components/Modal';

import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../../redux/ui/ui-slice';

const QuickViewProductModal = ({ docs }) => {

	const productId = 2;
	const dispatch = useDispatch();
	const handleCloseModal = () => {
		dispatch(uiActions.quickView());
	};
	return (
		<Modal handleClose={handleCloseModal}>
			<div className="bg-white relative p-8 rounded  border border-[#e8e8e8] lg:w-4/6 md:w-5/6 w-4/6 mx-auto">
				<button
					onClick={handleCloseModal}
					className="absolute top-2 right-2 bg-white"
				>
					<IoClose className="text-3xl" />
				</button>
				{docs
					.filter((title) => title.id == productId)
					.map((el) => (
						<div
							key={el.id}
							className="grid grid-cols-1 md:grid-cols-2 md:gap-14"
						>
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
						</div>
					))}
			</div>
		</Modal>
	);
};

export default QuickViewProductModal;
