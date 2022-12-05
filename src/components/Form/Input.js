
function Input({
	type,
	rows,
	cols,
	hasError,
	icon,
	...inputProps
}) {
	const element =
		type === 'textarea' ? (
			<textarea
				{...inputProps}
				rows={rows}
				cols={cols}
				className="flex-1 border-none h-full outline-none  px-4 text-black"
			/>
		) : (
			<input
				{...inputProps}
				type={type}
				className="flex-1 border-none h-full outline-none  px-4 text-black"
			/>
		);
	return (
		<div>
			<div
				className={`relative flex py-4 w-full outline-none rounded border-2 ${
					hasError ? 'border-red-400' : 'border-gray-200'
				} bg-white focus-within:border-greenBtn`}
			>
				{element}
				{icon && <span className="mr-4 text-greenBtn">{icon}</span>}
			</div>
			
		</div>
	);
}

export default Input;
