import Checkboxes from './Checkboxes';
import Input from './Input';
import RadioButtons from './RadioButtons';
import Select from './Select';
import Textarea from './Textarea';

export default function FormikControl(props) {
	const { control, ...rest } = props;
	switch (control) {
		case 'input':
			return <Input {...rest} />;
		case 'textarea':
			return <Textarea {...rest} />;
		case 'select':
			return <Select {...rest} />;
		case 'radio':
			return <RadioButtons {...rest} />;
		case 'checkbox':
			return <Checkboxes {...rest} />;
		default:
			return null;
	}
}
