import Button from '../../../components/UI/Button';
import CommonSection from '../CommonSection';

function PopularTagsSection({ tags }) {
	return (
		<CommonSection title="Popular Tags">
			{tags.map((tag) => (
				<Button btn="tag" className='mb-2'>{tag}</Button>
			))}
		</CommonSection>
	);
}

export default PopularTagsSection;
