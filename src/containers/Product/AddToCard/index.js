import Modal from '../../../components/Modal';

function AddToCard({ isOpen, handleClose }) {
	return (
		<Modal
			isOpen={isOpen}
			handleClose={handleClose}
			classNames="fixed top-0 left-0 bottom-0 right-0 bg-[#dcf16b36] z-[20000]"
		>
			<span>Add To Card</span>
		</Modal>
	);
}

export default AddToCard;
