import {
	IntroSection,
	QuestionSection,
	ServiceSection,
	SubscribeSection,
	TeamMemberSection,
	TestimonialsSection,
} from '@features/AboutScreen';
import BlogLeatest from '@features/BlogScreen/BlogLeatest';

const About = () => {
	return (
		<>
			<IntroSection />
			<ServiceSection />
			<TeamMemberSection />
			<TestimonialsSection />
			<QuestionSection />
			<SubscribeSection />
			<BlogLeatest />
		</>
	);
};

export default About;

