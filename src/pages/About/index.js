import CommonSection from '../../components/common-section';
import MainLayout from '../../components/Layout/HomeLayout';

const About = () => {
	return (
		<MainLayout>
			<CommonSection />
			<p>Welcome to our company</p>
			<h1 className="text-4xl">About</h1>
		</MainLayout>
	);
};

export default About;
