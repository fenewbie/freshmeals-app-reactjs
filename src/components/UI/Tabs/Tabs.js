import { useState } from 'react';

const Tabs = ({ children }) => {
	const [tabActive, setTabActive] = useState(children[0]);
	return (
		<div>
			<div className="flex justify-center flex-wrap">
				{children.map((child,id) => {
					return (
						<div className="relative">
							<button
								key={child}
								className={`text-sm md:text-lg font-bold uppercase px-6 py-4 my-1 mx-2 border-b-2 ${
									child === tabActive
										? 'text-greenBtn border-greenBtn'
										: 'border-transparent'
								} hover:text-greenBtn`}
								onClick={() => setTabActive(child)}
							>
								{child}
							</button>
							{id !== children.length - 1 && (
								<span className="absolute top-1/2 -right-[1px] -translate-y-1/2 h-4 w-[2px] bg-slate-300"></span>
							)}
						</div>
					);
				})}
			</div>
			<div className="mt-10 min-h-[200px]">
				{children.map((child) => {
					
					return <div key={child}>{child === tabActive && children}</div>;
				})}
			</div>
		</div>
	);
};

export default Tabs;
