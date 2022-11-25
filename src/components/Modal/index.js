import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactPortal from './ReactPortal';

function Modal({ children, isOpen = false, classNames, handleClose }) {
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
			<CSSTransition
				in={isOpen}
				timeout={{ entry: 0, exit: 300 }}
				unmountOnExit
				classNames={`fixed inset-0 bg-slate-600 flex flex-col items-center justify-center transition ease-in-out duration-300 overflow-hidden z-999 opacity-0 pointer-events-none scale-[0.4]`}
				nodeRef={nodeRef}
			>
				<div
					className={`fixed top-0 left-0 bottom-0 right-0  z-[10000] flex ${classNames}`}
					ref={nodeRef}
					onClick={handleCloseModal}
				>
					<div className="overlay absolute top-0 left-0 w-full h-full bg-[#0003] transition-all "></div>
					<div className="m-auto">{children}</div>
				</div>
			</CSSTransition>
		</ReactPortal>
	);
}
export default Modal;
