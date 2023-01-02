import Card from '@components/UI/Card/index';
import { TiMessages } from 'react-icons/ti';

function ClientCard({ name, desc, job, image }) {
	return (
		<Card className="relative flex max-md:flex-wrap items-center bg-white p-10 rounded shadow-card ">
			<img
				src={image}
				alt="client"
				className="h-40 w-40 max-md:mx-auto object-cover mr-8 rounded-full"
			/>
			<div className="">
				<p className="mb-4 max-md:mt-6 line-clamp-4 max-h-[120px]">
					{desc}
				</p>
				<h4 className="block md:text-xl text-lg font-bold ">{name}</h4>
				<span className="font-light">{job}</span>
			</div>
			<span className="absolute text-9xl bottom-2 right-6 opacity-[0.03]">
				<TiMessages />
			</span>
		</Card>
	);
}

export default ClientCard;
