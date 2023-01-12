import { useEffect, useMemo, useState } from 'react';

function RangSlider({
	min = 0,
	max = 200,
	step = 10,
	minV = 0,
	maxV = 100,
	handleChange = () => {},
}) {
	const [minValue, setMinValue] = useState(minV);
	const [maxValue, setMaxValue] = useState(maxV);

	const total = useMemo(() => {
		return min + max;
	}, [min, max]);

	const [minPos, setMinPos] = useState(((minValue - min) / total) * 100);
	const [maxPos, setMaxPos] = useState(((maxValue - min) / total) * 100);

	const handleChangeMin = (e) => {
		e.preventDefault();
		let value = +e.target.value;
		setMinValue(Math.min(value, maxValue));
	};

	const handleChangeMax = (e) => {
		e.preventDefault();
		const value = +e.target.value;
		setMaxValue(Math.max(value, minValue));
	};

	useEffect(() => {
		const value =
			minValue < total / 2
				? minValue - min + step / 2
				: minValue > total / 2
				? minValue - min - step / 2
				: minValue - min;
		setMinPos(parseInt((value / total) * 100));
		handleChange({ min: minValue, max: maxValue });
	}, [minValue, min, total]);

	useEffect(() => {
		const value =
			maxValue < total / 2
				? maxValue - min + step / 2
				: maxValue > total / 2
				? maxValue - min - step / 2
				: maxValue - min;

		setMaxPos(parseInt((value / total) * 100));
		handleChange({ min: minValue, max: maxValue });
	}, [maxValue, min, total]);

	return (
		<div className="relative h-1 w-full bg-black rounded-full">
			<div>
				<input
					type="range"
					value={minValue}
					min={min}
					max={max}
					step={step}
					onChange={handleChangeMin}
					className="appearance-none absolute bg-slate-500 top-0 left-0 h-full opacity-0 z-30 pointer-events-none range-slider"
				/>
				<input
					type="range"
					value={maxValue}
					min={min}
					max={max}
					step={step}
					className="appearance-none absolute bg-red-300 bottom-0 left-0 w-full h-full opacity-0 z-30 pointer-events-none range-slider"
					onChange={handleChangeMax}
				/>
			</div>

			<div>
				<div
					className={`absolute h-full bg-greenBtn z-10`}
					style={{
						left: `${minPos}%`,
						right: `${100 - maxPos}%`,
					}}
				></div>
				<span
					className="h-3 w-3 absolute bg-greenBtn rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
					style={{ left: `${maxPos}%` }}
				></span>

				<span
					className="h-3 w-3 absolute bg-greenBtn rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
					style={{ left: `${minPos}%` }}
				></span>
			</div>
		</div>
	);
}

export default RangSlider;
