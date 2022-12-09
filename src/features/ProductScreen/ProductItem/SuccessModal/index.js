import { useDispatch } from 'react-redux';
import { uiActions } from '@store/ui/ui-slice';

import { IoClose } from 'react-icons/io5';

import SuccessCard from './SuccessCard';
import Modal from '@components/UI/Modal';

function SuccessModal({ type }) {
	const dispatch = useDispatch();
	const handleClose = () => {
		return dispatch(
			uiActions.successModal({ status: false, type: null })
		);
	};
	
	return (
		<Modal
			handleClose={handleClose}
		>
			<div className="bg-white relative p-8 rounded  border border-[#e8e8e8] w-10/12 mx-auto">
				<button
					onClick={handleClose}
					className="absolute top-2 right-2 bg-white"
				>
					<IoClose className="text-3xl" />
				</button>
				<SuccessCard type={type}/>
			</div>
		</Modal>
	);
}

export default SuccessModal;
