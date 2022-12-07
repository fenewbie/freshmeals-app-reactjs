import { Link } from 'react-router-dom';

import Tags from '../Tags';

import { BiCalendar } from 'react-icons/bi';
import { FaUserEdit } from 'react-icons/fa';

const BlogCard = ({ id, title, description, img, tags }) => (
	<div className="shadow-xl rounded-lg overflow-hidden my-10  border">
		<Link
			to={`/blog/${id}`}
			className="pb-[70%] w-full overflow-hidden relative flex bg-slate-50"
		>
			<div className="absolute top-0 left-0 h-full w-full">
				<img
					alt="Blog"
					src={img}
					className="mx-auto w-auto h-full transition-all duration-500 scale-100 hover:scale-110"
				/>
			</div>
		</Link>
		<div className="bg-white p-8 ">
			<Tags tags={tags} />
			<Link
				to={`/blog/${id}`}
				className="text-xl lg:text-2xl font-bold capitalize inline-block mb-2 hover:text-greenBtn transition-all duration-300"
			>
				{title}
			</Link>
			<p className="text-justify truncate">{description}</p>
			<Link
				to={`/blog/${id}`}
				className="inline-block text-greenBtn font-medium underline underline-offset-4 mt-1 "
			>
				Read more
			</Link>

			<div className="flex items-center justify-between mt-7 border-t pt-6">
				<Link
					to="/"
					className="flex items-center hover:text-greenBtn transition-all duration-300"
				>
					<FaUserEdit className="text-greenBtn mr-2" />
					by{' '}
					<span className="ml-1 font-medium capitalize">admin</span>
				</Link>
				<span className="flex items-center">
					<BiCalendar className="text-greenBtn mr-2" />
					Nov 12, 2022
				</span>
			</div>
		</div>
	</div>
);

export default BlogCard;
