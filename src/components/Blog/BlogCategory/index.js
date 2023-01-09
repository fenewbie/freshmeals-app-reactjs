import Button from '@components/UI/Button';
import Tooltip from '@components/UI/Tooltip';
import CommonSection from '../CommonSection';

function BlogCategory({ categories }) {
	return (
		<CommonSection title="Categories">
			{categories.map((category, index) => (
				<Tooltip content="Feature under development" key={index}>
					<Button className="group text-white  px-6 py-2  bg-[#071C1F] hover:bg-greenBtn  transition-all duration-300 rounded-md flex justify-between items-center w-full mb-2">
						<span>{category.title}</span>
						<span className="bg-black group-hover:bg-[#739b17] transition-all duration-300 py-2 w-12 rounded-md flex items-center justify-center">
							{category.number}
						</span>
					</Button>
				</Tooltip>
			))}
		</CommonSection>
	);
}

export default BlogCategory;
