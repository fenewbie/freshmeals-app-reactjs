import { FaTags } from 'react-icons/fa';
import Button from '@components/UI/Button';
import TooltipCustom from '@components/UI/TooltipCustom';

function Tags({ tags, relatedTag }) {
	return (
		<div className="mb-3">
			<div className="flex items-center">
				{!relatedTag && <FaTags className="text-greenBtn" />}
				<div className="flex flex-wrap">
					{tags.map((tag, index) => (
						<TooltipCustom content="Feature under development">
							<Button
								btn={relatedTag ? 'tag2' : 'tag'}
								key={index}
								type="link"
								link="/blog"
								className="h-full block"
							>
								{tag}
							</Button>
						</TooltipCustom>
					))}
				</div>
			</div>
		</div>
	);
}

export default Tags;
