import Button from '@components/UI/Button';
import TooltipCustom from '@components/UI/TooltipCustom';
import CommonSection from '../CommonSection';

function BlogCategory({ categories }) {
	return (
		<CommonSection title="Categories">
			{categories.map((category, index) => (
				<div
					className="h-16 mb-3"
					key={index}
				>
					<TooltipCustom
						content="Feature under development"
						className="!left-1/2 !-translate-x-1/2 "
					>
						<Button className="absolute h-full group text-white  px-6  bg-[#071C1F] hover:bg-greenBtn  transition-all duration-300 rounded-md flex justify-between items-center w-full">
							<span>{category.title}</span>
							<span className="bg-black group-hover:bg-[#739b17] transition-all duration-300 h-full w-12 rounded-md flex items-center justify-center">
								{category.number}
							</span>
						</Button>
					</TooltipCustom>
				</div>
			))}
		</CommonSection>
	);
}

export default BlogCategory;
