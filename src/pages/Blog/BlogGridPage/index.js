import { useRouteLoaderData } from 'react-router-dom';
import usePagination from '@hooks/usePagination';
import Pagination from '@components/UI/Pagination';
import { BlogGrid } from '@components/Blog';

const BlogGridPage = () => {
	const {blogs} = useRouteLoaderData('root');
	

	return (
		<div
			title="Blog"
			className="px-4 sm:px-8 py-24  mx-auto"
		>
			<BlogGrid blogs={blogs}/>
			
		</div>
	);
};

export default BlogGridPage;
