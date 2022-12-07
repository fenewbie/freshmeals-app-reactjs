import { useRouteLoaderData } from 'react-router-dom';
import { BlogGrid } from '../../../containers/Blog';

const BlogPage = () => {
	const { blogs } = useRouteLoaderData('root');
	return (
		<div
			title="Blog"
			className="px-4 sm:px-8 py-24  mx-auto grid grid-cols-12 gap-8"
		>
			<div className="col-span-8">
				<BlogGrid blogs={blogs} />
			</div>
			<div className="col-span-4 ">
				<div className="border rounded p-4">
					<h3 className="text-xl font-bold">Categories</h3>
					
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
