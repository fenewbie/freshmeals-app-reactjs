import Title from '../../../components/Title';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import useFirestore from '../../../hooks/useFirestore';


function QuestionSection() {
	const {docs} = useFirestore('Q&A');
	const [activeIndex, setActiveIndex] = useState();
	
	const handleSetActive = (id) => {
		setActiveIndex((preIndexAct) => {
			const newIndexAct = preIndexAct === id ? undefined : id;
			return newIndexAct;
		});
	};

	return (
		<div className="py-[120px] px-4">
			<Title title="Some questions" />
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
				<div>
					{docs.map((item, index) => (
						<div
							key={item.id}
							className={`border-2 border-gray-200  px-8 py-4  ${
								index === 0 ? 'border-t-2' : 'border-t-0'
							}`}
						>
							<div
								className="flex justify-between items-center cursor-pointer"
								onClick={() => handleSetActive(item.id)}
							>
								<h3 className="font-bold">{item.question}</h3>
								<span className="p-2 border-2 rounded border-gray-300 bg-sectionBg hover:border-greenBtn hover:text-greenBtn transition-all">
									{item.id === activeIndex ? (
										<AiOutlineMinus className="text-greenBtn" />
									) : (
										<AiOutlinePlus />
									)}
								</span>
							</div>

							{item.id === activeIndex && (
								<div className="overflow-hidden animate-[accordionAppear_1s_ease-in-out_forwards]">
									<p className="py-6 ">{item.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/freshmeals-reactjs.appspot.com/o/Q%26A%2Fimage.webp?alt=media&token=4ebad5c3-5648-49d9-8532-013d4541ad3b"
					className="w-full object-contain"
				/>
			</div>
		</div>
	);
}

export default QuestionSection;
