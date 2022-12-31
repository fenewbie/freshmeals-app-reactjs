import { FaTags } from 'react-icons/fa';
import Button from '@components/UI/Button';

function Tags({ tags, relatedTag }) {
	return (
		<div className="mb-3">
			<div className="flex items-center">
				{!relatedTag && <FaTags className="text-greenBtn" />}
				<div className="flex flex-wrap">
					{tags.map((tag, index) => (
						<Button
							btn={relatedTag ? 'tag2' : 'tag'}
							key={index}
							type="link"
							link="/blog"
						>
							{tag}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
}

export default Tags;
