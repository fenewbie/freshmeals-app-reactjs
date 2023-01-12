import { BsFillSignpost2Fill } from 'react-icons/bs';
import SocialLink from '@components/UI/SocialLink';
import {CommonSection} from '@components/Blog';



function IntroSection() {
	return (
		<CommonSection
			title="About me"
			icon={
				<BsFillSignpost2Fill className="text-2xl mr-4 text-greenBtn" />
			}
		>
			<div className="text-center mt-5">
				<img
					src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/team/4.jpg"
					alt="writer"
					className="h-36 w-36 rounded-full mx-auto"
				/>
				<h3 className="font-bold mt-6">Rosalina D. Willaimson</h3>
				<p className="mt-3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Veritatis distinctio, odio, eligendi suscipit reprehenderit
					atque.
				</p>
				<div className="flex justify-center">
					<SocialLink />
				</div>
			</div>
		</CommonSection>
	);
}

export default IntroSection;
