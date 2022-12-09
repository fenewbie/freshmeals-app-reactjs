import { useLoaderData } from 'react-router-dom';

import Button from '../../components/UI/Button';

import PromotionCard from '../HomeScreen/PromotionSection/PromotionCard';
import CommentSection from './CommentSection';
import FormSection from './FormSection';
import RelatedBlogsSection from './RelatedBlogsSection';
import IntroSection from './IntroSection';

import {
	FaRegArrowAltCircleLeft,
	FaRegArrowAltCircleRight,
} from 'react-icons/fa';

import { TbGridDots } from 'react-icons/tb';
import SocialLink from '../../components/UI/SocialLink';
import SearchSection from './SearchSection';
import CommonSection from './CommonSection';
import RelatedTagsSection from './RelatedTagsSection';
import PostSection from './PostSection';
import CategorySection from './CategorySection';
import PopularTagsSection from './PopularTagsSection';

function BlogDetail() {
	const blog = useLoaderData();
	return (
		<>
			<div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
				<div className="lg:col-span-8">
					<div className="border-2 rounded py-10 px-12 ">
						<PostSection blog={blog} />

						<div className="flex justify-between mt-16">
							<RelatedTagsSection
								tags={['business', 'healthy', 'Fresh food', 'Vegetables']}
							/>
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
						<RelatedBlogsSection />
						<CommentSection />
						<FormSection />
					</div>
				</div>

				<div className="lg:col-span-4">
					<div className="-mt-8">
						<IntroSection />
					</div>
					<SearchSection />

					<CommonSection title="Popular Feeds">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
					</CommonSection>

					<CategorySection
						categories={[
							{ title: 'Vegetables', number: 10 },
							{ title: 'Fruits', number: 20 },
							{ title: 'Dairy', number: 41 },
							{ title: 'Meat', number: 20 },
						]}
					/>

					<CommonSection title="Never Miss News">
						<div className="-mt-6">
							<SocialLink />
						</div>
					</CommonSection>

					<CommonSection title="Twitter Feeds">
						<div className="flex items-center">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit
						</div>
					</CommonSection>

					<CommonSection title="Instagram Feeds">
						<div className="flex items-center">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit
						</div>
					</CommonSection>

					<PopularTagsSection
						tags={[
							'#freshfood',
							'#healthyfood',
							'#homemade',
							'#supportlocal',
							'#eatlocal',
							'#dinner',
							'#cooking',
						]}
					/>

					<PromotionCard />
				</div>
			</div>
		</>
	);
}

export default BlogDetail;
