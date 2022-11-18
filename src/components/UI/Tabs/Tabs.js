import { useState } from 'react';
import TabButton from './TabButton';
import TabPanel from './TabPanel';

const Tabs = ({ children }) => {
	const [tabActive, setTabActive] = useState(children[0].props.label);
	return (
		<div>
			<div className="flex justify-center flex-wrap">
				{children.map(({ props }) => (
					<TabButton
						key={props.label}
						label={props.label}
						isActive={tabActive === props.label}
						onClick={() => setTabActive(props.label)}
					/>
				))}
			</div>
			<div className="mt-10">
				{children.map(
					({ props }) =>
						props.label === tabActive && (
							<TabPanel key={props.label}>{props.children}</TabPanel>
						)
				)}
			</div>
		</div>
	);
};

export default Tabs;
