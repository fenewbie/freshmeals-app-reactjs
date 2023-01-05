import BlogSlider from '@components/Blog/BlogSlider';
import Title from '@components/Title';
import { useRouteLoaderData } from 'react-router-dom';

function BlogLeatest() {
	const { blogs } = useRouteLoaderData('root');
	return (
		<div className="container xl:max-w-xl lg:max-w-lg md:max-w-md my-28">
			<Title title="Lastest Blog" />
			<BlogSlider blogs={blogs} />
		</div>
	);
}

export default BlogLeatest;
