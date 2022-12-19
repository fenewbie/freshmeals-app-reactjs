export default function Price({ card, discount, price }) {
	return (
		<div className={`flex ${card && 'justify-center'} `}>
			<h4
				className={`${card ? 'text-xl' : 'text-base'} font-bold text-greenBtn`}
			>
				${discount}
			</h4>
			<h4
				className={`${
					card ? 'text-xl' : 'text-[15px]'
				} font-bold text-greenBtn line-through ml-3 opacity-60`}
			>
				${price}
			</h4>
		</div>
	);
}
