import { FaTags } from 'react-icons/fa';
import Button from '../../../components/UI/Button';

function Tags({ tags }) {
	return (
		<div className="flex mb-3">
			<div className="flex items-center">
				<FaTags className="text-greenBtn" />
				{tags.map((tag, index) => (
					<Button
						btn="tag"
						key={index}
						type='link'
						link='/blog'
					>
						{tag}
					</Button>
				))}
			</div>
		</div>
	);
}

export default Tags;
