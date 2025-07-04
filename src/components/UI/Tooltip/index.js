import { useState, useRef } from 'react';

export default function Tooltip(props) {
	const timeout = useRef();
	const [active, setActive] = useState(false);

	const showTip = () => {
		timeout.current = setTimeout(() => {
			setActive(true);
		}, props.delay || 100);
	};

	const hideTip = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
		}
		setActive(false);
	};

	return (
		<div
			className="relative"
			onMouseEnter={showTip}
			onMouseLeave={hideTip}
		>
			{props.children}
			{active && (
				<div className={`tooltip ${props.direction || 'top'}`}>
					{props.content}
				</div>
			)}
		</div>
	);
}
