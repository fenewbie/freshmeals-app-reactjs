import { useRouteLoaderData } from 'react-router-dom';
import { BlogList } from '../../../components/Blog';

const BlogGrid = () => {
	const { blogs } = useRouteLoaderData('root');
	return (
		<div
			title="Blog"
			className="px-4 sm:px-8 py-24  mx-auto"
		>
			<BlogList blogs={blogs} />
		</div>
	);
};

export default BlogGrid;
