import { useRouteLoaderData } from 'react-router-dom';
import { BlogGrid } from '../../../containers/Blog';

const BlogPage = () => {
	const { blogs } = useRouteLoaderData('root');
	return (
		<div
			title="Blog"
			className="px-4 sm:px-8 py-24  mx-auto"
		>
			<BlogGrid blogs={blogs} />
		</div>
	);
};

export default BlogPage;
