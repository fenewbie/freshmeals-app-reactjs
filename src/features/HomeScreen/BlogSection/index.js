import { useRouteLoaderData } from 'react-router-dom';
import BlogList from '../../../components/Blog/BlogList';

import Title from '../../../components/Title';

const BlogSection = () => {
	const { blogs } = useRouteLoaderData('root');
	return (
		<div>
			<div className="pt-[115px] pb-[70px]">
				<Title title="Lastest Blog" />
				<BlogList blogs={blogs} />
			</div>
		</div>
	);
};

export default BlogSection;
