import Title from '../../../components/Title';
import Pagination from '../../../components/UI/Pagination';
import useFirestore from '../../../hooks/useFirestore';

function QuestionSection() {
	const { docs } = useFirestore('blog/1/q&a');

	return (
		<div className="py-[120px] px-4">
			<Title title="Some questions" />
			<Pagination docs={docs} />
		</div>
	);
}

export default QuestionSection;
