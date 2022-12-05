import IntroSection from "../../containers/AboutScreen/IntroSection";
import QuestionSection from "../../containers/AboutScreen/QuestionSection";
import ServiceSection from "../../containers/AboutScreen/ServiceSection";
import SubcribeSection from "../../containers/AboutScreen/SubscribeSection";
import TeamMemberSection from "../../containers/AboutScreen/TeamMemberSection";
import TestimonialsSection from "../../containers/AboutScreen/TestimonialsSection";
import BlogSection from "../../containers/HomeScreen/BlogSection";

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
