import Title from '../../../components/Title';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const fakeData = [
	{
		id: 1,
		title: 'How to buy a product',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac.',
	},
	{
		id: 2,
		title: 'How to buy a product',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac.',
	},
	{
		id: 3,
		title: 'How to buy a product',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac.',
	},
];
function QuestionSection() {
	const [activeIndex, setActiveIndex] = useState();

	const handleSetActive = (id) => {
		setActiveIndex(preIndexAct => {
			const newIndexAct = preIndexAct === id ? undefined : id;
			return newIndexAct;
		})
	}
	return (
		<div className="py-[120px] px-4">
			<Title title="Some questions" />
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
				<div>
					{fakeData.map((item, index) => (
						<div
							className={`border-2 border-gray-200  px-8 py-4 transition-all duration-200 ${
								index === 0 ? 'border-t-2' : 'border-t-0'
							}`}
						>
							<div
								className="flex justify-between items-center cursor-pointer"
								onClick={() => handleSetActive(item.id)}
							>
								<h3 className="font-bold">{item.title}</h3>
								<span className="p-2 border-2 rounded border-gray-300 bg-sectionBg">
									{item.id === activeIndex ? (
										<AiOutlineMinus className='text-greenBtn'/>
									) : (
										<AiOutlinePlus />
									)}
								</span>
							</div>
							{item.id === activeIndex && (
								<div className='py-6'>
									<p>{item.desc}</p>
								</div>
							)}
						</div>
					))}
				</div>
				<img
					src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/bg/12.png"
					className="w-full object-contain"
				/>
			</div>
		</div>
	);
}

export default QuestionSection;
