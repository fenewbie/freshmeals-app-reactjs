import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export function Quantity({ className, decreaseItem, incrementItem, quantity }) {
	return (
		<div className={`flex ${className}`}>
			<button
				className="inline-block w-12  rounded-md border-2  border-gray-300 outline-greenBtn bg-white"
				onClick={decreaseItem}
			>
				<AiOutlineMinus className="mx-auto" />
			</button>
			<p className="text-lg font-bold flex items-center justify-center w-24 border-2 rounded-md  mx-2 border-gray-300">
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
