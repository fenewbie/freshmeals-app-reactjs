import { Link } from 'react-router-dom';
import Rating from '../../../containers/Product/ProductItem/Rating';

function TopProductRatedCard({
	title,
	imgSrc,
	rating,
	review,
	price,
	discount,
	className
}) {
	return (
		<div className={`flex items-center ${className}`}>
			<img
				src={imgSrc}
				alt={title}
				className="h-24 w-24 object-contain border border-gray-100"
			/>
			<div className="ml-4 flex-1">
				<Rating
					value={rating}
					text={review}
					size="16"
				/>
				<Link
					to="../shop/:productId"
					className="font-bold hover:text-greenBtn transition"
				>
					{title}
				</Link>
				<div className="flex items-center">
					<span className="font-bold text-greenBtn ">
						${discount.toFixed(2)}
					</span>
					<span className="text-[15px] font-bold text-greenBtn line-through opacity-50 ml-2">
						${price.toFixed(2)}
					</span>
				</div>
			</div>
		</div>
	);
}

export default TopProductRatedCard;
