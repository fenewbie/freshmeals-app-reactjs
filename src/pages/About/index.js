import {
	IntroSection,
	QuestionSection,
	ServiceSection,
	SubscribeSection,
	TeamMemberSection,
	TestimonialsSection,
} from '@features/AboutScreen';
import BlogLeatest from '@features/BlogScreen/BlogLeatest';
import { getDocuments } from '@services/api';

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
