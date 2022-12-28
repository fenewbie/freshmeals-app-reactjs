import { useState } from 'react';

function RangSlider({
	min = 0,
	max = 100,
	step = 5,
	handleChange = (value) => console.log(value),
}) {
	const [minValue, setMinValue] = useState(10);
	const [maxValue, setMaxValue] = useState(20);
	
    return (
		<div>
			<input
				id="min"
				name="min"
				type="range"
				value={minValue}
				min={min}
				max={max}
				step={step}
			/>
			<input
				id="max"
				name="max"
				type="range"
				value={maxValue}
				min={min}
				max={max}
				step={step}
			/>
		</div>
	);
}

export default RangSlider;
