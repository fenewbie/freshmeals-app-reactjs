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
		return () => {
			document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
		};
	}, []);

	return (
		<ReactPortal wrapperId="react-portal-modal-container">
			<div
				className={`fixed inset-0 z-[999] flex justify-center items-center bg-[#0009] ${className}`}
				onClick={handleClose}
			>
				<div onClick={(e) => e.stopPropagation()}>
					{children}
				</div>
			</div>
		</ReactPortal>
	);
}
export default Modal;
