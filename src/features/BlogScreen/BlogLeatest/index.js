import BlogSlider from '@components/Blog/BlogSlider';
import Title from '@components/Title';
import Container from '@components/UI/Container';
import { useRouteLoaderData } from 'react-router-dom';

function BlogLeatest() {
	const { blogs } = useRouteLoaderData('root');
	return (
		<Container>
			<Title title="Lastest Blog" />
			<BlogSlider blogs={blogs} />
		</Container>
	);
}

export default BlogLeatest;
