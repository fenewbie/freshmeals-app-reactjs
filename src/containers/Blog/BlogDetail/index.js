import { useLoaderData, useParams } from 'react-router-dom';

import Tags from '../Tags';
import Loader from '../../../components/UI/Loader';
import Button from '../../../components/UI/Button';

import {
	FaRegArrowAltCircleLeft,
	FaRegArrowAltCircleRight,
} from 'react-icons/fa';

function BlogDetail() {
	const blog = useLoaderData();
	return (
		<>
			{blog === null ? (
				<Loader />
			) : (
				<div className="grid lg:max-w-[750px] max-w-full mx-auto">
					<div className="border-2 rounded py-8 px-8">
						<Tags tags={blog.tags} />
						<h2 className="text-3xl font-bold mb-10">
							{blog.title}
						</h2>
						<img
							src={blog.image}
							alt={blog.title}
							className="w-full object-contain mx-auto mb-10"
						/>
						<p className="first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900 first-letter:float-left first-letter:mr-2  text-justify">
							{blog.description}
						</p>
					</div>
					<div className="flex justify-between mt-10">
						<Button
							type="link"
							link="/blog"
							className={`text-2xl text-greenBtn hover:opacity-50`}
						>
							<span className="flex items-center">
								<FaRegArrowAltCircleLeft />
								<span className="ml-2">Pre Post</span>
							</span>
						</Button>

						<Button
							type="link"
							link="/blog"
							className={`text-2xl text-greenBtn hover:opacity-50`}
						>
							<span className="flex items-center">
								<span className="mr-2">Next Post</span>
								<FaRegArrowAltCircleRight />
							</span>
						</Button>
					</div>
				</div>
			)}
		</>
	);
}

export default BlogDetail;
