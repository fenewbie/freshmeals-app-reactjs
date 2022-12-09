import Button from '../../../components/UI/Button';

function RelatedTagsSection({ tags }) {
	return (
		<div className="text-left mr-10">
			<h3 className="font-bold text-lg">Related tags</h3>
			<div className="mt-6 -ml-2 flex flex-wrap">
				{tags.map((tag) => (
					<Button
						type="link"
						link="/blog"
						btn="tag"
						className="shadow-none rounded-none border-none mb-2 py-2 px-6  uppercase bg-sectionBg hover:bg-greenBtn"
					>
						{tag}
					</Button>
				))}
			</div>
		</div>
	);
}

export default RelatedTagsSection;
