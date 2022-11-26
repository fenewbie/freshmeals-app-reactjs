import { useEffect, useRef } from 'react';
import ReactPortal from './ReactPortal';

function Modal({ children, classNames, handleClose }) {
	const nodeRef = useRef(null);
	useEffect(() => {
		const closeOnEscapeKey = (e) =>
			e.key === 'Escape' ? handleClose() : null;
		document.body.addEventListener('keydown', closeOnEscapeKey);
		return () => {
			document.body.removeEventListener('keydown', closeOnEscapeKey);
		};
	}, [handleClose]);

	const handleCloseModal = (e) => {
		const overlay = e.target.closest('.overlay');
		return overlay && handleClose();
	};

	return (
		<ReactPortal wrapperId="react-portal-modal-container">
			<div
				className={`fixed top-0 left-0 bottom-0 right-0  z-[10000] flex ${classNames}`}
				ref={nodeRef}
				onClick={handleCloseModal}
			>
				<div className="overlay absolute top-0 left-0 w-full h-full bg-[#0003] animate-[overlayApper_200ms_ease-in-out_forwards] "></div>
				<div className="m-auto animate-[modalAppear_300ms_ease-in-out_forwards]">
					{children}
				</div>
			</div>
		</ReactPortal>
	);
}
export default Modal;
