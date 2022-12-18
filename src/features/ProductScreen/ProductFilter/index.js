import { useRouteLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useQuery from '@hooks/useQuery';
import { productFilter as filter } from '@utils/constants';

import Button from '@components/UI/Button';
import { default as Grid } from '@components/Product/ProductGrid';
import { CommonSection } from '@components/Blog';
import { Input } from '@components/Form';

function ProductFilter() {
	const { products } = useRouteLoaderData('root');

	const [filterArr, setFilterArr] = useState([]);
	const { handleFilter, resultFilter } = useQuery('products', filterArr);

	const [isClean, setIsClean] = useState(false);
	const [isFiltering, setIsFiltering] = useState(false);

	const [types, setTypes] = useState([]);
	const [label, setLabel] = useState();
	const [price, setPrice] = useState({ from: 0, to: 1000 });
	const [rating, setRating] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		setFilterArr([
			{
				name: 'category',
				field: 'category',
				operator: 'array-contains-any',
				value: types,
			},
			{
				name: 'sale',
				field: 'label',
				operator: '==',
				value: label,
			},
			{
				name: 'priceFrom',
				field: 'price',
				operator: '>=',
				value: parseInt(price.from),
			},
			{
				name: 'priceTo',
				field: 'price',
				operator: '<=',
				value: parseInt(price.to),
			},
			{
				name: 'popularity',
				field: 'rating',
				operator: '==',
				value: rating,
			},
		]);
		!isFiltering && setIsFiltering(true);
	};

	useEffect(() => {
		isFiltering && handleFilter();
		if (isClean) {
			setFilterArr([]);
			setTypes([]);
			setLabel();
			setPrice({ from: 0, to: 1000 });
			setRating();
			setIsClean(false);
		}
	}, [filterArr, isFiltering, handleFilter, isClean]);

	const handleCheckBox = (name, setName) => {
		setName((pres) => {
			const newArr = pres.includes(name)
				? pres.filter((pre) => pre !== name)
				: [...pres, name];
			return newArr;
		});
	};

	return (
		<div className="grid md:grid-cols-12 grid-cols-1  gap-8">
			<div className="md:col-span-8">
				<div className="flex justify-between mb-10 flex-wrap max-md:justify-center">
					<h3 className="font-bold text-lg max-md:mb-5">
						{isFiltering
							? `Showing ${resultFilter.length} ${
									resultFilter.length < 2
										? 'result'
										: 'results'
							  }`
							: 'All products'}
					</h3>
					<div>
						<select className="font-bold bg-gray-50 -2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
							<option value="1">Sort By Popularity</option>
							<option value="2">
								Sort By Price: From Hight to Low
							</option>
							<option value="3">
								Sort By Price: From Low to High
							</option>
						</select>
					</div>
				</div>
				<Grid products={isFiltering ? resultFilter : products} />
			</div>
			<div className="md:col-span-4">
				<CommonSection title="Filter By">
					<form onSubmit={handleSubmit}>
						<div className="border-b pb-5">
							<h4 className="font-bold mb-2">Type</h4>
							<div className="flex flex-wrap">
								{filter.categories.map((item) => (
									<div
										className="lg:w-1/3 w-1/2 my-1 flex items-center"
										key={item.id}
									>
										<input
											type="checkbox"
											name="type"
											value={item.name}
											checked={types.includes(item.name)}
											onChange={() =>
												handleCheckBox(
													item.name,
													setTypes
												)
											}
										/>
										<label className="ml-1 capitalize">
											{item.name}
										</label>
									</div>
								))}
							</div>
						</div>
						<div className="border-b py-5">
							<h4 className="font-bold mb-2">Price</h4>
							<div className="flex">
								<input
									className="w-1/2 py-2 px-3 border-2 focus:border-greenBtn rounded outline-none"
									type="number"
									name="price"
									placeholder="From"
									value={price.from}
									onChange={(e) =>
										setPrice({
											...price,
											from: e.target.value,
										})
									}
								/>
								<input
									className="w-1/2 py-2 px-3 ml-2 border-2 focus:border-greenBtn rounded outline-none"
									type="number"
									name="price"
									placeholder="To"
									value={price.to}
									onChange={(e) =>
										setPrice({
											...price,
											to: e.target.value,
										})
									}
								/>
							</div>
						</div>
						<div className="border-b py-5">
							<h4 className="font-bold mb-2">Sale program</h4>
							<div className="flex flex-wrap">
								{filter.labels.map((item) => (
									<div
										className="lg:w-1/3 w-1/2 my-1 flex items-center"
										key={item.id}
									>
										<input
											type="radio"
											name="label"
											value={item.value}
											checked={label === item.value}
											onChange={() =>
												setLabel(item.value)
											}
										/>
										<label className="ml-1 capitalize">
											{item.desc}
										</label>
									</div>
								))}
							</div>
						</div>
						<div className="border-b py-5">
							<h4 className="font-bold mb-2">Start</h4>
							{filter.rating.map((item) => (
								<div key={item.id}>
									<input
										type="radio"
										name="rating"
										value={item.value}
										checked={item.value === rating}
										onChange={() => setRating(item.value)}
									/>
									<label className="ml-2">{item.desc}</label>
								</div>
							))}
						</div>
						<Button
							btn="card"
							className="w-full"
						>
							Apply Filter
						</Button>
						<Button
							btn="cancel"
							onClick={() => {
								setIsFiltering(false);
								setIsClean(true);
							}}
						>
							Clear All Filter
						</Button>
					</form>
				</CommonSection>
			</div>
		</div>
	);
}

export default ProductFilter;
