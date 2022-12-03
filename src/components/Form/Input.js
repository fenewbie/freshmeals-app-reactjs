import { TiWarning } from 'react-icons/ti';

function Input({
	type,
	rows,
	cols,
	messageError,
	icon,
	value,
	onChange,
	onKeyDown,
	name,
	placeholder,
}) {
	const element =
		type === 'textarea' ? (
			<textarea
				name={name}
				value={value}
				onChange={onChange}
				onKeyDown={onKeyDown}
				placeholder={placeholder}
				rows={rows}
				cols={cols}
				className="flex-1 border-none h-full outline-none  px-4 text-black"
			/>
		) : (
			<input
				name={name}
				value={value}
				onChange={onChange}
				onKeyDown={onKeyDown}
				placeholder={placeholder}
				type={type}
				className="flex-1 border-none h-full outline-none  px-4 text-black"
			/>
		);
	return (
		<div>
			<div
				className={`relative flex py-4 w-full outline-none rounded border-2 ${
					messageError ? 'border-red-400' : 'border-gray-200'
				} bg-white focus-within:border-greenBtn`}
			>
				{element}
				{icon && <span className="mr-4 text-greenBtn">{icon}</span>}
			</div>
			{messageError && (
				<p className="my-2 text-red-400 flex items-center">
					<TiWarning className="mr-1" /> {messageError}
				</p>
			)}
		</div>
	);
}

export default Input;
