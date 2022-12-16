import Pagination from '@components/UI/Pagination';
import usePagination from '@hooks/usePagination';
import BlogCard from '../BlogCard';

function BlogList({ blogs }) {
	const { dataRender, totalPages, currentPage, handlePageChange } =
		usePagination({ listData: blogs, limit: 3 });
	return (
		<>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
				{dataRender.map((blog) => (
					<BlogCard
						key={blog.id}
						id={blog.id}
						title={blog.title}
						description={blog.description}
						tags={blog.tags}
						image={blog.image}
					/>
				))}
			</div>
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
		</>
	);
}

export default BlogList;
