import { RiStarFill } from 'react-icons/ri';
import { RiStarHalfFill } from 'react-icons/ri';
import { RiStarLine } from 'react-icons/ri';

const Rating = ({ value, text, color = '#FFB800', size = 18, center = false }) => {
	return (
		<div className={`flex items-center ${center && 'justify-center'}`}>
			<span>
				{value >= 1 ? (
					<RiStarFill
						size={size}
						color={color}
					/>
				) : value >= 0.5 ? (
					<RiStarHalfFill
						size={size}
						color={color}
					/>
				) : (
					<RiStarLine
						size={size}
						color={color}
					/>
				)}
			</span>
			<span>
				{value >= 2 ? (
					<RiStarFill
						size={size}
						color={color}
					/>
				) : value >= 1.5 ? (
					<RiStarHalfFill
						size={size}
						color={color}
					/>
				) : (
					<RiStarLine
						size={size}
						color={color}
					/>
				)}
			</span>
			<span>
				{value >= 3 ? (
					<RiStarFill
						size={size}
						color={color}
					/>
				) : value >= 2.5 ? (
					<RiStarHalfFill
						size={size}
						color={color}
					/>
				) : (
					<RiStarLine
						size={size}
						color={color}
					/>
				)}
			</span>
			<span>
				{value >= 4 ? (
					<RiStarFill
						size={size}
						color={color}
					/>
				) : value >= 3.5 ? (
					<RiStarHalfFill
						size={size}
						color={color}
					/>
				) : (
					<RiStarLine
						size={size}
						color={color}
					/>
				)}
			</span>
			<span>
				{value >= 5 ? (
					<RiStarFill
						size={size}
						color={color}
					/>
				) : value >= 4.5 ? (
					<RiStarHalfFill
						size={size}
						color={color}
					/>
				) : (
					<RiStarLine
						size={size}
						color={color}
					/>
				)}
			</span>
			{text && (
				<span className="relative top-[1px] ml-2 text-greenBtn text-sm">
					({text})
				</span>
			)}
		</div>
	);
};

export default Rating;