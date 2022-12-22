import React from 'react';
import Input from './Input';
import RadioButtons from './RadioButtons';
import Select1 from './Select1';
import Textarea from './Textarea';

export default function FormikControl(props) {
	const { control, ...rest } = props;
	switch (control) {
		case 'input':
			return <Input {...rest} />;
		case 'textarea':
			return <Textarea {...rest} />;
		case 'select':
			return <Select1 {...rest} />;
		case 'radio':
			return <RadioButtons {...rest} />;
		default:
			return null;
	}
}
