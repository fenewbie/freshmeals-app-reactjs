// import { Navbar, Tooltip } from 'flowbite-react';
import { useState } from 'react';

// function TooltipCustom({
// 	content = 'default tooltip',
// 	children,
// 	className = '',
// 	...props
// }) {
// 	const { style, arrow, placement, animation, ...rest } = props;
// 	return (
// 		<div className="relative h-full">
// 			<Tooltip
// 				content={content}
// 				className={`whitespace-nowrap md:text-base text-sm ${className}`}
// 				arrow={arrow || false}
// 				animation={animation || 'duration-300'}
// 				style={style || 'light'}
// 				placement={placement || 'top'}
// 				{...rest}
// 			>
// 				{children}
// 			</Tooltip>
// 		</div>
// 	);
// }

// export default memo(TooltipCustom);

export default function TooltipCustom(props) {
	let timeout;
	const [active, setActive] = useState(false);

	const showTip = () => {
		timeout = setTimeout(() => {
			setActive(true);
		}, props.delay || 100);
	};

	const hideTip = () => {
		clearInterval(timeout);
		setActive(false);
	};

	return (
		<div
			className="inline-block relative"
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
