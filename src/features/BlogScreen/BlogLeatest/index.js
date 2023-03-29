import { memo, Suspense } from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';
import BlogSlider from '@components/Blog/BlogSlider';
import Title from '@components/Title';

function BlogLeatest() {
	const { blogs } = useRouteLoaderData('root');
	return (
		<div className="container py-28">
			<Title title="Lastest Blog" />
			<Suspense>
				<Await
					resolve={blogs}
					children={(blogs) => <BlogSlider blogs={blogs} />}
				/>
			</Suspense>
		</div>
	);
}

export default memo(BlogLeatest);
