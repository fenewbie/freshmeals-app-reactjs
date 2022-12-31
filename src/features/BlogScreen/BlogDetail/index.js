import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '@services/firebase';

import {
	FaRegArrowAltCircleLeft,
	FaRegArrowAltCircleRight,
} from 'react-icons/fa';
import { TbGridDots } from 'react-icons/tb';

import CommentSection from './CommentSection';
import SocialLink from '@components/UI/SocialLink';
import RelatedList from '@features/RelatedList/index';
import { CommentForm } from '@components/Form';
import { Post, Tags } from '@components/Blog';
import PrivateRoute from '@components/PrivateRoute';
import CommentCard from '@components/Comment';

function BlogDetail() {
	const { blog, id } = useLoaderData();
	const { blogs } = useRouteLoaderData('root');

	const handleSubmit = (values) => {
		console.log(values);
		try {
			setDoc(doc(db, 'comment-form', id), {
				comment: values.comment,
				name: values.name,
				email: values.email,
				saveinfo: values.saveinfo[0],
				createdAt: Timestamp.now().toDate(),
				// time: new Date(),
			});
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		window.scrollTo({ top: 130, left: 0 });
	}, [blog]);

	return (
		<div className="border-2 rounded py-10 md:px-12 px-6">
			<Post blog={blog} />

			<div className="flex justify-between mt-16 max-lg:flex-wrap">
				<div>
					<h3 className="font-bold text-lg mb-6">Related Tags</h3>
					<Tags
						title="Related Tag"
						relatedTag
						tags={['business', 'healthy', 'Fresh food', 'Vegetables']}
					/>
				</div>
				<div className="text-right max-lg:text-left max-lg:mt-5">
					<h3 className="font-bold text-lg">Social Share</h3>
					<SocialLink />
				</div>
			</div>

			<div className="flex justify-between items-center py-12 my-14 border-t border-b">
				<button
					type="link"
					link="/blog"
					className={`text-xl text-greenBtn  ${
						id === 1
							? 'opacity-50 pointer-events-none'
							: 'opacity-80 hover:opacity-100'
					}`}
				>
					<span className="flex items-center">
						<FaRegArrowAltCircleLeft />
						<Link className="ml-2" to={`/blog/${id - 1}`}>
							Pre Post
						</Link>
					</span>
				</button>

				<TbGridDots className="text-greenBtn text-3xl" />

				<button
					type="link"
					link="/blog"
					className={`text-xl text-greenBtn  ${
						id === blogs.length
							? 'opacity-50 pointer-events-none'
							: 'opacity-80 hover:opacity-100'
					}`}
					disabled={id === blogs.length}
				>
					<span className="flex items-center">
						<Link className="ml-2" to={`/blog/${id + 1}`} disabled={true}>
							Next Post
						</Link>
						<FaRegArrowAltCircleRight />
					</span>
				</button>
			</div>
			<RelatedList col="blogs" related={blog.tags} type="tags" />
			<CommentSection />
			{/* <CommentCard /> */}
			<PrivateRoute isLoggedIn={true} type="admin">
				<CommentForm handleSubmit={handleSubmit} />
			</PrivateRoute>
		</div>
	);
}

export default BlogDetail;
