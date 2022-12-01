import { useDispatch } from 'react-redux';
import { uiActions } from '../../../redux/ui/ui-slice';

import { FaRegEye, FaShoppingCart } from 'react-icons/fa';
import { AiTwotoneHeart } from 'react-icons/ai';
import { getProductById} from '../../../redux/products/productSlice';


export function BtnIcon() {

	const dispatch = useDispatch();
	
	const handleOpenQuickView = (id) => {
		dispatch(uiActions.quickView())
		
	};
	const handleOpenWishListModal = () => {
		dispatch(uiActions.successModal({ status: true, type: 'wishlist' }));
	}

	const handleOpenAddToCardModal = () => {
		dispatch(uiActions.successModal({ status: true, type: 'cart' }));
	};

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
		</>
	);
}
