import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import {
	FaRegArrowAltCircleLeft,
	FaRegArrowAltCircleRight,
} from 'react-icons/fa';
import { TbGridDots } from 'react-icons/tb';

import { db } from '@services/firebase';
import CommentSection from './CommentSection';
import SocialLink from '@components/UI/SocialLink';
import RelatedList from '@features/RelatedList/index';
import { CommentForm } from '@components/Form';
import { Post, Tags } from '@components/Blog';
import PrivateRoute from '@components/PrivateRoute';
import Button from '@components/UI/Button';

function BlogDetail() {
	const { blog, id } = useLoaderData();
	const { blogs } = useRouteLoaderData('root');

	const handleSubmit = (values, actions) => {
		console.log(values);
		try {
			setDoc(doc(db, 'comment-form', values.email), {
				comment: values.comment,
				name: values.name,
				email: values.email,
				saveinfo: values.saveinfo[0],
				createdAt: Timestamp.now().toDate(),
				// time: new Date(),
			});
			alert('Thank you for your comment! ');
			actions.resetForm();
		} catch (err) {
			console.log(err);
		}
	};

	// useEffect(() => {
	// 	window.scrollTo({ top: 130, left: 0 });
	// }, [blog]);

	return (
		<div className="border-2 rounded py-10 md:px-12 px-6 mb-28">
			<Post blog={blog} />

			<div className="flex justify-between mt-16 max-lg:flex-wrap">
				<div>
					<h3 className="font-bold text-lg mb-6">Related Tags</h3>
					<Tags
						title="Related Tag"
						relatedTag
						tags={[
							'business',
							'healthy',
							'Fresh food',
							'Vegetables',
						]}
					/>
				</div>
				<div className="text-right max-lg:text-left max-lg:mt-5">
					<h3 className="font-bold text-lg">Social Share</h3>
					<SocialLink />
				</div>
			</div>

			<div className="flex justify-between items-center py-12 my-14 border-t border-b">
				<Button
					type="link"
					link={`/blog/${id - 1}`}
					className={`text-xl text-greenBtn  ${
						id === 1
							? 'opacity-50 pointer-events-none'
							: 'opacity-80 hover:opacity-100'
					}`}
				>
					<span className="flex items-center">
						<FaRegArrowAltCircleLeft />
						<span className="ml-2">Pre Post</span>
					</span>
				</Button>

				<TbGridDots className="text-greenBtn text-3xl" />

				<Button
					type="link"
					link={`/blog/${id + 1}`}
					className={`text-xl text-greenBtn  ${
						id === blogs.length
							? 'opacity-50 pointer-events-none'
							: 'opacity-80 hover:opacity-100'
					}`}
					disabled={id === blogs.length}
				>
					<span className="flex items-center">
						<span
							className="ml-2"
							disabled={true}
						>
							Next Post
						</span>
						<FaRegArrowAltCircleRight className="ml-2" />
					</span>
				</Button>
			</div>
			<RelatedList
				col="blogs"
				related={blog.tags}
				type="tags"
			/>
			<CommentSection />
			{/* <CommentCard /> */}
			<PrivateRoute
				isLoggedIn={true}
				type="admin"
			>
				<CommentForm handleSubmit={handleSubmit} />
			</PrivateRoute>
		</div>
	);
}

export default BlogDetail;
