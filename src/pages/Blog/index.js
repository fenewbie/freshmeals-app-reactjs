import PageLayout from '../../components/Layout/PageLayout';
import Blog from '../../containers/Blog';

const BlogPage = () => {
	return (
		<PageLayout title='Blog'>
			<h1 className="text-4xl">Blog</h1>
			<Blog/>
		</PageLayout>
	);
};

export default BlogPage;
