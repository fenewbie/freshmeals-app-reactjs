import Title from '@components/Title';
import Accordion from '@components/UI/Accordion';
import { useLoaderData } from '../../../../node_modules/react-router-dom/dist/index';

function QuestionSection() {
	const {questions} = useLoaderData();
	return (
		<div className="py-[120px] px-4">
			<Title title="Some questions" />
			<Accordion docs={questions} />
		</div>
	);
}

export default QuestionSection;
