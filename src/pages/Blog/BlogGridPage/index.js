import { Await, useRouteLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
import { BlogGrid } from '@components/Blog';

const BlogGridPage = () => {
	const { blogs } = useRouteLoaderData('root');

	return (
		<Suspense fallback={<></>}>
			<Await resolve={blogs}>
				{(data) => (
					<div title="Blog">
						<BlogGrid blogs={data} />
					</div>
				)}
			</Await>
		</Suspense>
	);
};

export default BlogGridPage;
