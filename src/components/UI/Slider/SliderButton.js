import { useState } from 'react';
import { useSwiper } from 'swiper/react';
import { IconContext } from 'react-icons';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';

export default function SliderButton({
	className,
	isNext,
	iconClassName,
	iconSize,
	iconColors = ['white', 'black'],
}) {
	const swiper = useSwiper();
	let [isHover, setIsHover] = useState(false);
	return (
		<button
			className={`absolute z-20 top-1/2 -translate-y-1/2 ${
				className ? className : ''
			} ${isNext ? 'right-4' : 'left-4'}`}
			onClick={() => (isNext ? swiper.slideNext() : swiper.slidePrev())}
			onMouseEnter={() => {
				setIsHover(true);
			}}
			onMouseLeave={() => {
				setIsHover(false);
			}}
		>
			{isNext ? (
				<IconContext.Provider
					value={{
						className: iconClassName,
						size: iconSize,
						color: isHover ? iconColors[0] : iconColors[1],
					}}
				>
					<RiArrowRightLine />
				</IconContext.Provider>
			) : (
				<IconContext.Provider
					value={{
						className: iconClassName,
						size: iconSize,
						color: isHover ? iconColors[0] : iconColors[1],
					}}
				>
					<RiArrowLeftLine />
				</IconContext.Provider>
			)}
		</button>
	);
}
