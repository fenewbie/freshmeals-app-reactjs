export default function DropDown({ id, title, onClick, className }) {
	return (
		<ul id={id} className={`${className}`}>
			<li onClick={onClick}>{title}</li>
		</ul>
	);
}
