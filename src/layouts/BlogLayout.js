import { Outlet } from 'react-router-dom';
import BlogSideBar from '@features/BlogScreen/BlogSideBar';
import Container from '@components/UI/Container';

function BlogLayout() {
	return (
		<Container>
			<div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
				<div className="lg:col-span-8">
					<Outlet />
				</div>
				<div className="lg:col-span-4">
					<BlogSideBar />
				</div>
			</div>
		</Container>
	);
}

export default BlogLayout;
