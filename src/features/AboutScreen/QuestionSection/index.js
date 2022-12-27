import Title from '@components/Title';
import Accordion from '@components/UI/Accordion';
import { useLoaderData } from '../../../../node_modules/react-router-dom/dist/index';
import { AiOutlinePlus } from 'react-icons/ai';

function QuestionSection() {
	const { questions } = useLoaderData();
	return (
		<div className="py-[120px] px-4">
			<Title title="Some questions" />
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
				<Accordion>
					{questions.map((question, index) => (
						<Accordion.Item
							key={question.id}
							id={question.id}
							className={`border-2 border-gray-200  px-8 py-3 cursor-pointer  ${
								index === 0 ? 'border-t-2' : 'border-t-0'
							}`}
						>
							<Accordion.Title>
								<h4 className="font-bold capitalize flex justify-between items-center">
									{question.title}
									<span className="w-10 h-10 bg-sectionBg flex items-center justify-center text-2xl">
										<AiOutlinePlus className="text-greenBtn" />
									</span>
								</h4>
							</Accordion.Title>
							<Accordion.Content>
								<p className="py-8 capitalize">
									{question.desc}
								</p>
							</Accordion.Content>
						</Accordion.Item>
					))}
				</Accordion>

				<img
					src="https://firebasestorage.googleapis.com/v0/b/freshmeals-reactjs.appspot.com/o/Q%26A%2Fimage.webp?alt=media&token=4ebad5c3-5648-49d9-8532-013d4541ad3b"
					className="w-full object-contain"
					alt="img-about"
				/>
			</div>
		</div>
	);
}

export default QuestionSection;
