import {TiMessages} from 'react-icons/ti';

function ClientCard({name, desc, job, avatar}) {
    return (
		<div className="relative flex max-md:flex-wrap items-center bg-white p-10 rounded shadow-card">
			<img
				src={avatar}
				alt="client"
				className="h-40 w-40 max-md:mr-auto object-contain mr-10"
			/>
			<div className="">
				<p className="mb-4 max-md:mt-6">{desc}</p>
				<h4 className="block text-xl font-bold ">{name}</h4>
				<span className="font-light">{job}</span>
			</div>
			<span className='absolute text-9xl bottom-2 right-6 opacity-[0.03]'><TiMessages /></span>
		</div>
	);
}

export default ClientCard;