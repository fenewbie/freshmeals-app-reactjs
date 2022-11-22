const Notification = (props) => {
	let specialClasses = '';

	if (props.status === 'error') {
		specialClasses = props.error;
	}
	if (props.status === 'success') {
		specialClasses = props.success;
	}

	const cssClasses = `${props.notification} ${specialClasses}`;

	return (
		<section className={cssClasses}>
			<h2>{props.title}</h2>
			<p>{props.message}</p>
		</section>
	);
};

export default Notification;
