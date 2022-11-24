import Footer from '../Footer';
import Header from '../Header';
import FeatureFooter from '../../containers/Features/FeatureFooter';
import CommonSection from '../../containers/CommonSection';

const PageLayout = ({ children, title, className }) => {
	return (
		<div className="w-full mx-auto flex flex-col space-y-1 p-0 m-0">
			<CommonSection title={title}>
				<Header />
			</CommonSection>
			<main className={`w-full p-1`}>
				<div
					className={`px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 mx-auto ${className}`}
				>
					{children}
				</div>
			</main>
			<FeatureFooter />
			<Footer />
		</div>
	);
};

export default PageLayout;
