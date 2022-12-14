import BtnItemModal from '@components/Product/BtnItemModal';
import Price from '@components/Product/Price';
import { Link } from 'react-router-dom';
import Rating from '@components/Product/Rating';
import Card from '@components/UI/Card';
import { useDispatch, useSelector } from 'react-redux';
import QuickViewProductModal from './QuickViewProductModal';
import SuccessModal from './SuccessModal';
import { modalActions } from '@store/modal/modalSlice';

const ProductItem = ({
	rating,
	numReviews,
	image,
	label,
	title,
	price,
	discount,
	id,
	card = false,
	className,
	product,
}) => {
	const isShowingQuickViewModal = useSelector(
		(state) => state.modal.isShowingQuickViewModal
	);
	const isShowingSuccessModal = useSelector(
		(state) => state.modal.isShowingSuccessModal
	);
	const dispatch = useDispatch();
	const handleOpenQuickView = () => {
		dispatch(modalActions.quickView());
	};
	const handleOpenAddToCardModal = (e) => {
		dispatch(modalActions.successModal({ status: true, type: 'wishlist' }));
	};
	const handleOpenWishListModal = () => {
		dispatch(modalActions.successModal({ status: true, type: 'cart' }));
	};
	return (
		<Card
			className={`${
				card &&
				'border-2 border-zinc-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300 group'
			} ${className}`}
			key={id}
		>
			<div className={card ? '' : 'flex items-center'}>
				<Link
					className={`block relative 
					${
						card
							? ` bg-slate-100 pt-[100%]`
							: ' h-24 w-24 border border-[rgba(0, 0, 0, 0.1]'
					}`}
				>
					{label && (
						<span className="absolute top-4 right-4 text-sm font-bold text-white py-1 px-3 rounded-tl-2xl rounded-br-2xl bg-greenBtn z-10">
							{label}
						</span>
					)}

					<img
						src={image}
						title="product"
						className={'absolute top-0 left-0 w-full h-full object-contain'}
						alt={title}
					/>
					{card && (
						<BtnItemModal
							handleOpenQuickView={handleOpenQuickView}
							handleOpenAddToCardModal={handleOpenAddToCardModal}
							handleOpenWishListModal={handleOpenWishListModal}
						/>
					)}
				</Link>

				<div className={card ? 'p-8' : 'ml-5 flex-1'}>
					<Rating
						value={rating}
						text={numReviews}
						center={card}
						size={card ? '18' : '15'}
					/>
					<Link
						className={`text-[15px] ${
							card && 'text-center'
						} capitalize font-bold mt-1 block hover:text-greenBtn transition-all duration-300`}
						to={`/shop/${id}`}
						reloadDocument
					>
						{title}
					</Link>
					<Price card={card} discount={discount} price={price} />
				</div>
			</div>
			{isShowingQuickViewModal ? (
				<QuickViewProductModal product={product} />
			) : null}

			{isShowingSuccessModal.status ? (
				<SuccessModal product={product} type={isShowingSuccessModal.type} />
			) : null}
		</Card>
	);
};
export default ProductItem;
