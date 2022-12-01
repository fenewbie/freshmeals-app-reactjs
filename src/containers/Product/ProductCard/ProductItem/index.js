import { Link } from 'react-router-dom';
import Rating from '../Rating';
import BtnIcon from '../BtnIcon';

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
	className = '',
}) => {
	return (
		<div
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
						<div className="absolute left-0 top-1/2 w-full text-center opacity-0 transition-all duration-300 translate-y-1/2 group-hover:opacity-100 group-hover:-translate-y-1/2">
							<BtnIcon />
						</div>
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
						to={`../../shop/${id}`}
					>
						{title}
					</Link>
					<div className={`flex ${card && 'justify-center mt-2'} `}>
						<h4
							className={`${
								card ? 'text-xl' : 'text-base'
							} font-bold text-greenBtn`}
						>
							${discount}
						</h4>
						<h4
							className={`${
								card ? 'text-xl' : 'text-[15px]'
							} font-bold text-greenBtn line-through ml-3 opacity-60`}
						>
							${price}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProductItem;