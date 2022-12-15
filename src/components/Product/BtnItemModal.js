import { FaRegEye, FaShoppingCart } from 'react-icons/fa';
import { AiTwotoneHeart } from 'react-icons/ai';

export default function BtnIconItem({
	handleOpenQuickView,
	handleOpenAddToCardModal,
	handleOpenWishListModal
}) {
	return (
		<div className="absolute left-0 top-1/2 w-full text-center opacity-0 transition-all duration-300 translate-y-1/2 group-hover:opacity-100 group-hover:-translate-y-1/2">
			<button
				className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-1"
				onClick={handleOpenQuickView}
			>
				<FaRegEye className="mx-auto" />
			</button>

			<button
				className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-1"
				onClick={handleOpenAddToCardModal}
			>
				<FaShoppingCart className="mx-auto" />
			</button>

			<button
				className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-auto"
				onClick={handleOpenWishListModal}
			>
				<AiTwotoneHeart className="mx-auto" />
			</button>
		</div>
	);
}
