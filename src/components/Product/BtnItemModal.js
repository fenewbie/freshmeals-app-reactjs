import { FaRegEye, FaShoppingCart } from 'react-icons/fa';
import { AiTwotoneHeart } from 'react-icons/ai';
import Tooltip from '@components/UI/Tooltip';

export default function BtnIconItem({
	handleOpenQuickView,
	handleAddProductToCart,
	handleOpenWishListModal,
}) {
	return (
		<div className="absolute left-0 top-1/2 w-full text-center opacity-0 transition-all duration-300 translate-y-1/2 group-hover:opacity-100 group-hover:-translate-y-1/2 flex justify-center">
			<Tooltip
				arrow
				content="QuickView"
			>
				<button
					className="md:h-[50px] md:w-[50px] w-10 h-10 border max-md:text-sm font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 
				mx-2"
					onClick={handleOpenQuickView}
				>
					<FaRegEye className="mx-auto" />
				</button>
			</Tooltip>

			<Tooltip
				arrow
				content="Add to Cart"
			>
				<button
					className="md:h-[50px] md:w-[50px] w-10 h-10 border max-md:text-sm font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 
				mx-2"
					onClick={handleAddProductToCart}
				>
					<FaShoppingCart className="mx-auto" />
				</button>
			</Tooltip>

			<Tooltip
				arrow
				content="Wishlist"
			>
				<button
					className="md:h-[50px] md:w-[50px] w-10 h-10 border max-md:text-sm font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-2"
					onClick={handleOpenWishListModal}
				>
					<AiTwotoneHeart className="mx-auto" />
				</button>
			</Tooltip>
		</div>
	);
}
