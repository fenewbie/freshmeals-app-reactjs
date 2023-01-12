import { memo, useEffect, useState } from 'react';
import RangSlider from '@features/ProductScreen/ProductFilter/RangSlider';

function FilterPriceRange({ setFieldValue }) {
	const initValue = {
		min: 0,
		max: 300,
		step: 1,
		minPrice: 0,
		maxPrice: 150,
	};
	const [values, setValues] = useState({
		minPrice: initValue.minPrice,
		maxPrice: initValue.maxPrice,
	});

	const handleChange = (values) => {
		setValues({ minPrice: values.min, maxPrice: values.max });
	};

	useEffect(() => {
		setFieldValue('minPrice', values.minPrice);
		setFieldValue('maxPrice', values.maxPrice);
	}, [values]);

	return (
		<>
			<div className="flex max-lg:flex-wrap mb-5">
				<span className="mr-5">
					From:<b className="ml-1">{values.minPrice}$</b>
				</span>
				<span>
					To:
					<b className="ml-1">{values.maxPrice}$</b>
				</span>
			</div>
			<RangSlider
				handleChange={handleChange}
				min={initValue.min}
				max={initValue.max}
				minV={initValue.minPrice}
				maxV={initValue.maxPrice}
				step={initValue.step}
			/>
		</>
	);
}

export default memo(FilterPriceRange);
