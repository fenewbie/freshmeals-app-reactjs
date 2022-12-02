import ServiceCard from './ServiceCard';
import Title from '../../../components/Title';

function ServiceSection() {
	const fakeData = [
		{
			id: 1,
			title: 'All Kind Brand',
			desc: 'Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.',
			iconImg:
				'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/icons/icon-img/21.png',
		},
		{
			id: 2,
			title: 'Same Day Pay',
			desc: 'Get paid fast with our Same Day Pay program. Advance your pay schedule when you want.',
			iconImg:
				'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/icons/icon-img/21.png',
		},
		{
			id: 3,
			title: 'Stay Healthy',
			desc: 'Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.',
			iconImg:
				'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/icons/icon-img/21.png',
		},
	];
	return (
		<div className="bg-sectionBg py-[120px] px-4">
			<Title title="Why Choose Us" />
			<div className="grid lg:grid-cols-3 gap-8 md:grid-cols-4 grid-cols-1 ">
				{fakeData.map((item, index) => (
					<div
						className={`${
							index === 2 && 'md:col-start-2'
						} md:col-span-2 lg:col-span-1 `}
					>
						<ServiceCard
							title={item.title}
							desc={item.desc}
							iconImg={item.iconImg}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default ServiceSection;
