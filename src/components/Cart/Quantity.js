import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export function Quantity({ className, decreaseItem, incrementItem, quantity }) {
	return (
		<div className={`flex h-full ${className}`}>
			<button
				className="inline-block w-12 rounded-md border-2  border-gray-300 outline-greenBtn bg-white"
				onClick={decreaseItem}
			>
				<AiOutlineMinus className="mx-auto" />
			</button>
			<p className="text-lg font-bold text-center w-24 border-2 rounded-md  mx-2 border-gray-300 focus:outline-greenBtn">
				{quantity}
			</p>
			<button
				className="inline-block w-12 border-2 rounded-md border-gray-300 outline-greenBtn bg-white"
				onClick={incrementItem}
			>
				<AiOutlinePlus className="mx-auto" />
			</button>
		</div>
	);
}
