import { Navbar, Tooltip } from 'flowbite-react';
import { memo, useRef, useState } from 'react';

function TooltipCustom({
	content = 'default tooltip',
	children,
	className = '',
	...props
}) {
	const { style, arrow, placement, animation, ...rest } = props;
	return (
		<div className="relative h-full">
			<Tooltip
				content={content}
				className={`whitespace-nowrap md:text-base text-sm ${className}`}
				arrow={arrow || false}
				animation={animation || 'duration-300'}
				style={style || 'light'}
				placement={placement || 'top'}
				{...rest}
			>
				{children}
			</Tooltip>
		</div>
	);
}

export default memo(TooltipCustom);
