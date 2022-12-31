import { useRouteLoaderData } from 'react-router-dom';
import { BlogGrid } from '@components/Blog';

const BlogGridPage = () => {
	const { blogs } = useRouteLoaderData('root');

	return (
		<div title="Blog">
			<BlogGrid blogs={blogs} />
		</div>
	);
};

export default BlogGridPage;
