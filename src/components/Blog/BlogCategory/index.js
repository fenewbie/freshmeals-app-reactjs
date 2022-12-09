import Button from '@components/UI/Button';
import CommonSection from '../CommonSection';

function BlogCategory({ categories }) {
	return (
		<CommonSection title="Categories">
			{categories.map((category, index) => (
				<Button key={index} className=" group text-white py-2 px-6 mb-4 w-full bg-[#071C1F] hover:bg-greenBtn flex justify-between items-center transition-all duration-300 rounded-md">
					<span>{category.title}</span>
					<span className="bg-black group-hover:bg-[#739b17] transition-all duration-300 h-12 w-12 rounded-md flex items-center justify-center">
						{category.number}
					</span>
				</Button>
			))}
		</CommonSection>
	);
}

export default BlogCategory;
