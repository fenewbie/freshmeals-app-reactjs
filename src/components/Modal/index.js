import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactPortal from '../ReactPortal';
import './modalStyles.css';

function Modal({ children, isOpen, handleClose, classNames }) {
	const nodeRef = useRef(null);
	useEffect(() => {
		const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
		document.body.addEventListener('keydown', closeOnEscapeKey);
		return () => {
			document.body.removeEventListener('keydown', closeOnEscapeKey);
		};
	}, [handleClose]);

	return (
		<ReactPortal wrapperId="react-portal-modal-container">
			<CSSTransition
				in={isOpen}
				timeout={{ entry: 0, exit: 300 }}
				unmountOnExit
				classNames={`fixed inset-0 bg-slate-600 flex flex-col items-center justify-center transition ease-in-out duration-300 overflow-hidden z-999 opacity-0 pointer-events-none scale-[0.4] ${classNames}`}
				nodeRef={nodeRef}
			>
				<div className={`${classNames}`} ref={nodeRef}>
					<button onClick={handleClose} className={`${classNames}`}>
						Close
					</button>
					<div className="w-4/6 h-4/6 bg-[#282c34] text-white flex items-center justify-center text-3xl ">
						{children}
					</div>
				</div>
			</CSSTransition>
		</ReactPortal>
	);
}
export default Modal;
