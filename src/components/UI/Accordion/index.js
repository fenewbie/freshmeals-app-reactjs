import { useEffect, useState } from 'react';

function Accordion({ children, opened }) {
	const [indexAct, setIndexAct] = useState();

	const handleClick = (id) => {
		id === indexAct ? setIndexAct(false) : setIndexAct(id);
	};

	useEffect(() => {
		opened && setIndexAct(opened);
	}, [opened]);

	return (
		<div>
			{children.map((item) => {
				const { id, children, className, ...itemProps } = item.props;
				const Title = children[0];
				const Content = children[1];

				return (
					<div
						key={id}
						className={`cursor-pointer ${className}`}
						onClick={opened ? () => {} : () => handleClick(id)}
						{...itemProps}
					>
						<div>{Title}</div>
						<div
							className={`transition-all ease-linear duration-300 overflow-hidden ${
								id === indexAct ? `max-h-[250px]` : 'max-h-0'
							}`}
						>
							{Content}
						</div>
					</div>
				);
			})}
		</div>
	);
}

Accordion.Item = ({ children }) => {
	return children;
};

Accordion.Title = ({ children }) => {
	return children;
};

Accordion.Content = ({ children }) => {
	return children;
};

export default Accordion;
