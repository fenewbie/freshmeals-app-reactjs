import { useLoaderData } from 'react-router-dom';
import Post from '@components/Blog/Post';
import CommentSection from './CommentSection';
import BlogSideBar from '../BlogSideBar';

function BlogDetail() {
	const { blog } = useLoaderData();

	if (!blog) {
		return (
			<div className="container mx-auto px-4 py-8">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-gray-600">Blog post not found</h2>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<div className="lg:col-span-2">
					<Post blog={blog} />
					<div className="mt-12">
						<CommentSection />
					</div>
				</div>
				<div className="lg:col-span-1">
					<BlogSideBar />
				</div>
			</div>
		</div>
	);
}

export default BlogDetail;