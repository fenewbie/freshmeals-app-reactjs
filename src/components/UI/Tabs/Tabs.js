import { useState, useEffect } from 'react';

const Tabs = ({ children }) => {
	const [tabActive, setTabActive] = useState(children[0].props.label);

	return (
		<div>
			<div className="flex justify-center flex-wrap">
				{children.map((child) => {
					const {label} = child.props;
					return (
						<div className="relative" key={label}>
							<button
								className={`text-sm md:text-lg font-bold uppercase px-6 py-4 my-1 mx-2 border-b-2 ${
									label === tabActive
										? 'text-greenBtn border-greenBtn'
										: 'border-transparent'
								} hover:text-greenBtn`}
								onClick={() => setTabActive(label)}
							>
								{label}
							</button>
							
						</div>
					);
				})}
			</div>
			<div className="mt-10 min-h-[200px]">
				{children.map((child) => {
					const {children, label} = child.props;
					return <div key={label}>{label === tabActive ? children : undefined}</div>;
				})}
			</div>
		</div>
	);
};

export default Tabs;
