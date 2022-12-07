import BlogCard from "../BlogCard";

function BlogGrid({blogs}) {
    return (
		<div>
			{blogs.map((blog) => (
				<div className="mb-16" key={blog.id}>
					<BlogCard
						id={blog.id}
						title={blog.title}
						description={blog.description}
						tags={blog.tags}
						img={blog.image}
					/>
				</div>
			))}
		</div>
	);
}

export default BlogGrid;