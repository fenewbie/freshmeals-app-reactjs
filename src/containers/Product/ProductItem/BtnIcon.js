import { FaRegEye } from 'react-icons/fa';
import { AiTwotoneHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
export function BtnIcon() {
	return (
		<>
			<button
				className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-1"
				onClick
			>
				<FaRegEye className="mx-auto" />
			</button>

			<button className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-1">
				<FaShoppingCart className="mx-auto" />
			</button>

			<button className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-auto">
				<AiTwotoneHeart className="mx-auto" />
			</button>
		</>
	);
}
