import { useRouteLoaderData } from 'react-router-dom';
import usePagination from '@hooks/usePagination';
import Pagination from '@components/UI/Pagination';
import { BlogList } from '@components/Blog';

const BlogGrid = () => {
	const {blogs} = useRouteLoaderData('root');
	const {
		dataRender,
		totalPages,
		currentPage,
		handlePageChange
	} = usePagination({ listData: blogs, limit: 3});

	return (
		<div
			title="Blog"
			className="px-4 sm:px-8 py-24  mx-auto"
		>
			<BlogList blogs={dataRender} />
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
		</div>
	);
};

export default BlogGrid;
