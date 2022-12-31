function Input({ type, rows, cols, hasError, icon, className, ...inputProps }) {
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
		<div
			className={`${
				type !== ('checkbox' || 'radio') &&
				'relative flex py-4 w-full outline-none rounded border-2 bg-white focus-within:border-greenBtn'
			} ${hasError ? 'border-red-400' : 'border-gray-200'}  ${className}`}
		>
			{element}
			{icon && <span className="mr-4 text-greenBtn">{icon}</span>}
		</div>
	);
}

export default Input;
