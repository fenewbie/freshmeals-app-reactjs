import BtnItemModal from '@components/Product/BtnItemModal';
import Price from '@components/Product/Price';
import { Link } from 'react-router-dom';
import Rating from '@components/Product/Rating';
import Card from '@components/UI/Card';
import { useDispatch } from 'react-redux';
import { modalActions } from '@store/modal/modalSlice';
import { cartActions } from '@store/cart/cartSlice';

const ProductItem = ({
	rating,
	reviews,
	image,
	label,
	title,
	price,
	discount,
	id,
	card,
	className,
	category,
}) => {
	const dispatch = useDispatch();
	const handleOpenQuickView = () => {
		dispatch(
			modalActions.quickView({
				status: true,
				dataActive: {
					id,
					title,
					image,
					price,
					rating,
					reviews,
					discount,
					category,
				},
			})
		);
	};
	const handleAddProductToCart = (e) => {
		dispatch(
			cartActions.addToCart({
				id,
				title,
				discount,
				image,
				quantity: 1,
			})
		);
		dispatch(
			modalActions.successModal({
				status: true,
				type: 'cart',
				dataActive: {
					id,
					title,
					image,
				},
			})
		);
	};
	const handleOpenWishListModal = () => {
		dispatch(
			modalActions.successModal({
				status: true,
				type: 'wishlist',
				dataActive: {
					id,
					title,
					image,
				},
			})
		);
	};

	return (
		<Card
			className={`${
				card &&
				'border-2 border-zinc-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300 group '
			} ${className}`}
			key={id}
		>
			<div className={card ? '' : 'flex items-center'}>
				<div
					className={`block relative cursor-pointer
					${
						card
							? ` bg-slate-100 pt-[100%]`
							: ' h-24 w-24 border border-[rgba(0, 0, 0, 0.1]'
					}`}
				>
					{label && (
						<span className="absolute top-4 right-4 text-sm font-bold text-white py-1 px-3 rounded-tl-2xl rounded-br-2xl bg-greenBtn z-[1]">
							{label}
						</span>
					)}

					<img
						src={image}
						title="product"
						className={
							'absolute top-0 left-0 w-full h-full object-contain'
						}
						alt={title}
					/>
					{card && (
						<BtnItemModal
							handleOpenQuickView={handleOpenQuickView}
							handleAddProductToCart={handleAddProductToCart}
							handleOpenWishListModal={handleOpenWishListModal}
						/>
					)}
				</div>

				<div className={`${card ? 'p-8' : 'ml-5 flex-1'}`}>
					<Rating
						value={rating}
						text={reviews ? reviews : null}
						center={card}
						size={card ? '18' : '15'}
					/>
					<Link
						className={`text-[15px]  ${
							card
								? ' min-h-[45px] flex items-center justify-center '
								: 'inline-block'
						} capitalize font-bold my-2 hover:text-greenBtn transition-all duration-300`}
						to={`/shop/${id}`}
						reloadDocument
					>
						<span
							className={`line-clamp-2 ${card && 'text-center'}`}
						>
							{title}
						</span>
					</Link>
					<Price
						card={card}
						discount={discount}
						price={price}
					/>
				</div>
			</div>
		</Card>
	);
};
export default ProductItem;
