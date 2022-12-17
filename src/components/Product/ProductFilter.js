import Button from "@components/UI/Button";

const { CommonSection } = require("@components/Blog");

function ProductFilter() {
    return (
		<CommonSection title="Filter By">
			<form>
				<div className="border-b py-5">
					<h4 className="font-bold">Type</h4>
					<div>
						<input
							type="checkbox"
							value="drink"
						/>
						<label>Drink</label>
					</div>

					<div>
						<input
							type="checkbox"
							value="Meat"
						/>
						<label>Meat</label>
					</div>
				</div>
				<div className="border-b pb-5">
					<h4 className="font-bold">Price</h4>
					<div className="flex">
						<input
							type="number"
							placeholder="From"
							value="0"
						/>
						<input
							type="number"
							placeholder="To"
							value="100"
						/>
					</div>
				</div>
				<div className="border-b pb-5">
					<h4 className="font-bold">Label</h4>
					<div>
						<input
							type="checkbox"
							value="Offer"
						/>
						<label>Offer</label>
					</div>

					<div>
						<input
							type="checkbox"
							value="New"
						/>
						<label>New</label>
					</div>
				</div>
				<div className="border-b pb-5">
					<h4 className="font-bold">Start</h4>
					<select>
						<option>1</option>
						<option>1</option>
						<option>1</option>
						<option>1</option>
						<option>1</option>
						<option>1</option>
					</select>
				</div>
				<Button
					btn="card"
					className="w-full"
				>
					Apply
				</Button>
			</form>
		</CommonSection>
	);
}

export default ProductFilter;