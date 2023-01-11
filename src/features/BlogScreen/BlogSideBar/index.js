import { memo } from 'react';

import IntroSection from './IntroSection';
import SocialLink from '@components/UI/SocialLink';
import { CommonSection, BlogCategory, Tags } from '@components/Blog';
import { default as PromotionRandom } from '@features/Promotion/Random';
import SearchSection from './SearchSection';

function BlogSideBar() {
	return (
		<>
			<div className="-mt-8">
				<IntroSection />
			</div>
			<CommonSection title="Search Object">
				<SearchSection />
			</CommonSection>

			<CommonSection title="Popular Feeds">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
			</CommonSection>

			<BlogCategory
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

			<CommonSection title="Popular Tags">
				<Tags
					relatedTag
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
			</CommonSection>

			<PromotionRandom />
		</>
	);
}

export default memo(BlogSideBar);
