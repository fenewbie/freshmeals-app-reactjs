import Tags from '../Tags/index';

function Post({ blog }) {
	return (
		<div>
			<Tags tags={blog.tags} />
			<h2 className="md:text-3xl text-xl font-bold mb-10">{blog.title}</h2>
			<img
				src={blog.image}
				alt={blog.title}
				className="w-full object-contain mx-auto mb-10"
			/>
			<p className="first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900 first-letter:float-left first-letter:mr-2  text-justify">
				{blog.description}
			</p>
		</div>
	);
}

export default Post;
