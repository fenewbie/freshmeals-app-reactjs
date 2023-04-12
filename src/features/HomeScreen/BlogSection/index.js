import BlogSlider from '@components/Blog/BlogSlider';
import { useRouteLoaderData } from 'react-router-dom';

import Title from '@components/Title';

const BlogSection = () => {
	const { blogs } = useRouteLoaderData('root');
	return (
		<div>
			<div className="pt-[115px]">
				<Title title="Lastest Blog" />
				<BlogSlider blogs={blogs} />
			</div>
		</div>
	);
};

export default BlogSection;
