import { AiOutlinePlus } from 'react-icons/ai';
import { useRouteLoaderData } from 'react-router-dom';

import Title from '@components/Title';
import Accordion from '@components/UI/Accordion';

function QuestionSection() {
	const { questions } = useRouteLoaderData('root');
	return (
		<div className="container py-28">
			<Title title="Some questions" />
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-10 max-md:mb-16">
				<Accordion>
					{questions.map((question, index) => (
						<Accordion.Item
							key={question.id}
							id={question.id}
							className={`border-2 border-gray-200  md:px-8 px-6 py-3 cursor-pointer max-md:text-sm  ${
								index === 0 ? 'border-t-2' : 'border-t-0'
							}`}
						>
							<Accordion.Title>
								<h4 className="font-bold capitalize flex justify-between items-center">
									<span className="flex-1 ">
										{question.title}
									</span>
									<span className="w-10 h-10 bg-sectionBg flex items-center justify-center text-2xl ml-5">
										<AiOutlinePlus className="text-greenBtn" />
									</span>
								</h4>
							</Accordion.Title>
							<Accordion.Content>
								<p className="py-8 capitalize ">
									{question.desc}
								</p>
							</Accordion.Content>
						</Accordion.Item>
					))}
				</Accordion>
				<div className="relative lg:top-20 top-10 lg:pb-20 pb-10">
					<img
						src="https://firebasestorage.googleapis.com/v0/b/freshmeals-reactjs.appspot.com/o/Q%26A%2Fimage.webp?alt=media&token=4ebad5c3-5648-49d9-8532-013d4541ad3b"
						className="w-full object-contain"
						alt="img-about"
					/>
				</div>
			</div>
		</div>
	);
}

export default QuestionSection;
