import { useLoaderData, useParams } from 'react-router-dom';
import Loader from '../../../components/UI/Loader';

function BlogDetail() {
	const blog = useLoaderData();
	return (
		<>
			{blog === null ? (
				<Loader />
			) : (
				<div>
					<div className='flex'>
						<h3 className="font-bold mr-10">Tags:</h3>
						<div className='flex'>
							{blog.tags.map((tag) => (
								<span>{tag}</span>
							))}
						</div>
					</div>
					<h1 className="text-4xl font-bold mb-10">{blog.title}</h1>
					<img src={blog.image} alt={blog.title} className='h-72 object-contain mx-auto mb-10'/>
					<p>{blog.description}</p>
				</div>
			)}
		</>
	);
}

export default BlogDetail;
