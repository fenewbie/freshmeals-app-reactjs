import { FaRegEye } from 'react-icons/fa';
import { AiTwotoneHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../redux/ui/ui-slice';

export function BtnIcon({ handleOpenAddToCard }) {
	const dispatch = useDispatch()
	const handleOpenQuickView = () => {
		dispatch(uiActions.ui.quickView())
	}

	return (
		<>
			<button
				className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-1"
				onClick={handleOpenQuickView}
			>
				<FaRegEye className="mx-auto" />
			</button>

			<button
				className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-1"
				onClick={handleOpenAddToCard}
			>
				<FaShoppingCart className="mx-auto" />
			</button>

			<button className="h-[50px] w-[50px] font-medium text-gray-900 bg-white rounded-full focus:outline-none hover:bg-greenBtn hover:text-white transition-all duration-300 mx-auto">
				<AiTwotoneHeart className="mx-auto" />
			</button>
		</>
	);
}
