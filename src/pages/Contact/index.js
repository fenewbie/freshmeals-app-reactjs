import FormContainer from '@components/Form/FormContainer';
import Loader from '../../components/UI/Loader';
const Contact = () => {
	return (
		<div title="Contact Us">
			<h1 className="text-4xl">Contact</h1>
			<Loader />
			<FormContainer />
		</div>
	);
};

export default Contact;
