import BlogSlider from '@components/Blog/BlogSlider';
import {
	IntroSection,
	QuestionSection,
	ServiceSection,
	SubscribeSection,
	TeamMemberSection,
	TestimonialsSection,
} from '@features/AboutScreen';
import { getDocuments } from '@services/api';
import { useLoaderData } from 'react-router-dom';

const About = () => {
	const { blogs } = useLoaderData();
	return (
		<div className="px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 mx-auto">
			<IntroSection />
			<ServiceSection />
			<TeamMemberSection />
			<TestimonialsSection />
			<QuestionSection />
			<SubscribeSection />
			<div className="py-[120px]">
				<BlogSlider blogs={blogs} />
			</div>
		</div>
	);
};

export default About;

export const loader = () => {
	const getDocs = async function () {
		const blogs = await getDocuments('blog');
		const questions = await getDocuments('blog/1/q&a');
		const services = await getDocuments('features/1/feature-serivce');
		const teams = await getDocuments('members');
		const feedbacks = await getDocuments('members/1/client-feedback');
		return { blogs, questions, services, teams, feedbacks };
	};

	return getDocs();
};
