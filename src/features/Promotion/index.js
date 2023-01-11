import { useRouteLoaderData } from 'react-router-dom';
import PromotionCard from '@components/Promotion';

export default function Promotion() {
	const { promotions } = useRouteLoaderData('root');

	return (
		<div className="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1 md:gap-8 gap-4">
			{promotions.map((item) => (
				<div
					key={item.id}
					className={`lg:col-span-1 md:col-span-2 ${
						item.id === '3' ? 'md:col-start-2' : ''
					}`}
				>
					<PromotionCard
						id={item.id}
						type={item.type}
						title={item.title}
						subtitle={item.subtitle}
						image={item.image}
					/>
				</div>
			))}
		</div>
	);
}
