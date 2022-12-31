import { useEffect } from 'react';

export function useOnHoverOutside(ref, handler) {
	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener('mouseover', listener);
		return () => {
			document.removeEventListener('mouseout', listener);
		};
	}, [ref, handler]);
}
