import BlogDetail from '@features/BlogDetailScreen';
import { getDocumentById, getDocuments } from '@services/api';

function BlogDetailPage() {
	return (
		<div className="px-4 sm:px-8 mx-auto py-28">
			<BlogDetail />
		</div>
	);
}

export default BlogDetailPage;

export const loader = ({ params }) => {
	const blog = getDocumentById(params.blogId, 'blog');
	
	if (!blog) {
		throw new Response('', {
			status: 404,
			statusText: 'Not Found',
		});
	}

	return blog;
};
