import { Outlet } from 'react-router-dom';
import BlogSideBar from '@features/BlogScreen/BlogSideBar';

function BlogLayout({ children }) {
	return (
		<div className="container mx-auto py-28 grid lg:grid-cols-12 grid-cols-1 gap-8">
			<div className="lg:col-span-8">
				<Outlet />
				{children}
			</div>
			<div className="lg:col-span-4">
				<BlogSideBar />
			</div>
		</div>
	);
}

export default BlogLayout;
