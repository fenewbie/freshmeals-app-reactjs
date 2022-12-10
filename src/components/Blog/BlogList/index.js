import BlogCard from '../BlogCard';

function BlogList({ blogs }) {
	console.log(blogs);
	return (
		<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
			{blogs.map((blog) => (
				<BlogCard
					key={blog.id}
					id={blog.id}
					title={blog.title}
					description={blog.description}
					tags={blog.tags}
					img={blog.image}
				/>
			))}
		</div>
	);
}

export default BlogList;
