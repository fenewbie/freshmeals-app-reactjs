import PromotionCard from '@components/Promotion/PromotionCard';
import { useRouteLoaderData } from 'react-router-dom';

export default function Promotion() {
	const { promotions } = useRouteLoaderData('root');

	return (
		<div className="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1 gap-7 mt-[120px]">
			{promotions.map((item) => (
				<div
					key={item.id}
					className={`lg:col-span-1 ${
						item.id == 3 ? 'md:col-[2_/_span_2]' : 'md:col-span-2'
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
