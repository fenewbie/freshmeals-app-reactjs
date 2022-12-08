import { useLoaderData } from 'react-router-dom';

import Tags from '../../components/Blog/Tags';
import Button from '../../components/UI/Button';
import SocialLink from '../../components/UI/SocialLink';
import Input from '../../components/Form/Input';

import {
	FaRegArrowAltCircleLeft,
	FaRegArrowAltCircleRight,
} from 'react-icons/fa';

import { BsSearch, BsFillSignpost2Fill, BsFilterLeft } from 'react-icons/bs';
import { TbGridDots } from 'react-icons/tb';
import PromotionCard from '../HomeScreen/PromotionSection/PromotionCard';
import CommentSection from './CommentSection';
import PostSection from './PostSection';
import RelatedSection from './RelatedSection';

function BlogDetail() {
	const blog = useLoaderData();
	return (
		<>
			<div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
				<div className="border-2 rounded py-10 px-12 lg:col-span-8">
					<div>
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

					<div className="flex justify-between mt-16">
						<div className="text-left mr-10">
							<h3 className="font-bold text-lg">Related tags</h3>
							<div className="mt-6 -ml-2 flex flex-wrap">
								<Button
									type="link"
									link="/blog"
									btn="tag"
									className="shadow-none rounded-none border-none mb-2 py-2 px-6  uppercase bg-sectionBg hover:bg-greenBtn"
								>
									Popular
								</Button>
								<Button
									type="link"
									link="/blog"
									btn="tag"
									className="shadow-none rounded-none border-none mb-2 py-2 px-6  uppercase bg-sectionBg hover:bg-greenBtn"
								>
									Business
								</Button>
								<Button
									type="link"
									link="/blog"
									btn="tag"
									className="shadow-none rounded-none border-none mb-2 py-2 px-6  uppercase bg-sectionBg hover:bg-greenBtn"
								>
									Healthy
								</Button>
								<Button
									type="link"
									link="/blog"
									btn="tag"
									className="shadow-none rounded-none border-none mb-2 py-2 px-6  uppercase bg-sectionBg hover:bg-greenBtn"
								>
									Freezer
								</Button>
								<Button
									type="link"
									link="/blog"
									btn="tag"
									className="shadow-none rounded-none border-none mb-2 py-2 px-6  uppercase bg-sectionBg hover:bg-greenBtn"
								>
									Fresh Food
								</Button>
								<Button
									type="link"
									link="/blog"
									btn="tag"
									className="shadow-none rounded-none border-none mb-2 py-2 px-6  uppercase bg-sectionBg hover:bg-greenBtn"
								>
									Vegetables
								</Button>
							</div>
						</div>
						<div className="text-right">
							<h3 className="font-bold text-lg">Social Share</h3>
							<SocialLink />
						</div>
					</div>

					<div className="flex justify-between items-center py-12 my-14 border-t border-b">
						<Button
							type="link"
							link="/blog"
							className={`text-xl text-greenBtn opacity-70 hover:opacity-100`}
						>
							<span className="flex items-center">
								<FaRegArrowAltCircleLeft />
								<span className="ml-2">Pre Post</span>
							</span>
						</Button>

						<TbGridDots className="text-greenBtn text-3xl" />

						<Button
							type="link"
							link="/blog"
							className={`text-xl text-greenBtn opacity-70 hover:opacity-100`}
						>
							<span className="flex items-center">
								<span className="mr-2">Next Post</span>
								<FaRegArrowAltCircleRight />
							</span>
						</Button>
					</div>

					<RelatedSection/>
					<CommentSection />
					<PostSection />
				</div>

				<div className="lg:col-span-4">
					<div className="border-2 rounded  py-8 px-10">
						<div className="flex items-center ">
							<BsFillSignpost2Fill className="text-2xl mr-4 text-greenBtn" />
							<h3 className="font-bold text-lg">About me</h3>
						</div>
						<div className="text-center mt-5">
							<img
								src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/team/4.jpg"
								alt="writer"
								className="h-36 w-36 rounded-full mx-auto"
							/>
							<h3 className="font-bold mt-6">
								Rosalina D. Willaimson
							</h3>
							<p className="mt-3">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Veritatis distinctio, odio,
								eligendi suscipit reprehenderit atque.
							</p>
							<div className="flex justify-center">
								<SocialLink />
							</div>
						</div>
					</div>

					<div className="border-2 rounded  py-8 px-10 mt-8">
						<div className="flex items-center mb-8">
							<BsFilterLeft className="text-2xl mr-4 text-greenBtn" />
							<h3 className="font-bold text-lg">Search Object</h3>
						</div>
						<form className="md:flex">
							<div className="flex-1">
								<Input
									type="text"
									placeholder="Search for some objects"
									className="rounded-none"
								/>
							</div>
							<Button
								btn="card"
								className="rounded-none"
							>
								<BsSearch className="mx-auto" />
							</Button>
						</form>
					</div>

					<div className="border-2 rounded  py-8 px-10 mt-8">
						<div className="flex items-center mb-8">
							<BsFilterLeft className="text-2xl mr-4 text-greenBtn" />
							<h3 className="font-bold text-lg">Popular Feeds</h3>
						</div>
						<div>
							<div className="flex items-center">Blog card</div>
						</div>
					</div>

					<div className="border-2 rounded  py-8 px-10 mt-8">
						<div className="flex items-center mb-8">
							<BsFilterLeft className="text-2xl mr-4 text-greenBtn" />
							<h3 className="font-bold text-lg">Categories</h3>
						</div>
						<div>
							<div className="flex items-center">Blog card</div>
						</div>
					</div>

					<div className="border-2 rounded  py-8 px-10 mt-8">
						<div className="flex items-center mb-8">
							<BsFilterLeft className="text-2xl mr-4 text-greenBtn" />
							<h3 className="font-bold text-lg">
								Never Miss News
							</h3>
						</div>
						<div>
							<div className="flex items-center">Blog card</div>
						</div>
					</div>

					<div className="border-2 rounded  py-8 px-10 mt-8">
						<div className="flex items-center mb-8">
							<BsFilterLeft className="text-2xl mr-4 text-greenBtn" />
							<h3 className="font-bold text-lg">Twitter Feeds</h3>
						</div>
						<div>
							<div className="flex items-center">Blog card</div>
						</div>
					</div>

					<div className="border-2 rounded  py-8 px-10 mt-8">
						<div className="flex items-center mb-8">
							<BsFilterLeft className="text-2xl mr-4 text-greenBtn" />
							<h3 className="font-bold text-lg">
								Instagram Feeds
							</h3>
						</div>
						<div>
							<div className="flex items-center">Blog card</div>
						</div>
					</div>

					<div className="border-2 rounded  py-8 px-10 mt-8">
						<div className="flex items-center mb-8">
							<BsFilterLeft className="text-2xl mr-4 text-greenBtn" />
							<h3 className="font-bold text-lg">Popular Tags</h3>
						</div>
						<div>
							<div className="flex items-center">Blog card</div>
						</div>
					</div>
				</div>

				<PromotionCard />
			</div>
		</>
	);
}

export default BlogDetail;
