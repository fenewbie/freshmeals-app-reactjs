import IntroSection from "@features/AboutScreen/IntroSection";
import QuestionSection from "@features/AboutScreen/QuestionSection";
import ServiceSection from "@features/AboutScreen/ServiceSection";
import SubcribeSection from "@features/AboutScreen/SubscribeSection";
import TeamMemberSection from "@features/AboutScreen/TeamMemberSection";
import TestimonialsSection from "@features/AboutScreen/TestimonialsSection";
import BlogSection from "@features/HomeScreen/BlogSection";

const About = () => {
	return (
		<div className="px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 mx-auto">
			<IntroSection/>
			<ServiceSection/>
			<TeamMemberSection/>
			<TestimonialsSection/>
			<QuestionSection/>
			<SubcribeSection/>
			<BlogSection/>
		</div>
	);
};

export default About;
