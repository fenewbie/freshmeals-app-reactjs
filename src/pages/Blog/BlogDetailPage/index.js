import BlogDetail from '@features/BlogScreen/BlogDetail';
import { getDocumentById } from '@services/api';

function BlogDetailPage() {
	return <BlogDetail />;
}

export default BlogDetailPage;

export const loader = async ({ params }) => {
	const id = params.blogId * 1;
	const blog = await getDocumentById(params.blogId, 'blog');

	if (!blog) {
		throw new Response('', {
			status: 404,
			statusText: 'Not Found',
		});
	}

	return { blog, id };
};
