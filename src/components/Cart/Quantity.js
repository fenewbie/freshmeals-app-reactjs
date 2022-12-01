import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export function Quantity({product}) {
	return (
		<div className="flex">
			<button className="inline-block w-12 rounded-md border-2  border-gray-300 outline-greenBtn">
				<AiOutlineMinus className="mx-auto" />
			</button>
			<input
				type="number"
				className="text-lg font-bold text-center w-24 border-2 rounded-md  mx-2 border-gray-300 focus:outline-greenBtn"
			/>
			<button className="inline-block w-12 border-2 rounded-md border-gray-300 outline-greenBtn">
				<AiOutlinePlus className="mx-auto" />
			</button>
		</div>
	);
}
