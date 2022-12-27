import { useEffect } from 'react';
import ReactPortal from './ReactPortal';

function Modal({ children, className, handleClose }) {
	const closeOnEscapeKeyDown = (e) => {
		if ((e.charCode || e.keyCode) === 27) {
			handleClose();
		}
	};
	useEffect(() => {
		document.body.addEventListener('keydown', closeOnEscapeKeyDown);
		return function cleanup() {
			document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
		};
	}, []);

	return (
		<ReactPortal wrapperId="react-portal-modal-container">
			<div
				className={`fixed top-0 left-0 bottom-0 right-0  z-[999] flex bg-[#0009] ${className}`}
				onClick={handleClose}
			>
				<div
					className="m-auto animate-[modalAppear_300ms_ease-in-out_forwards]"
					onClick={(e) => e.stopPropagation()}
				>
					{children}
				</div>
			</div>
		</ReactPortal>
	);
}
export default Modal;
