import { Link } from 'react-router-dom';

import Timer from './Timer';
import useFirestore from '@hooks/useFirestore';
import Container from '@components/UI/Container';

const CountDownSection = () => {
	const { docs } = useFirestore('countdown');

	return (
		<div className="bg-[#F7F5EB] font-raj ">
			<Container>
				<div className="overflow-hidden">
					{docs &&
						docs.map((item, index) => (
							<div
								className="grid lg:grid-cols-12 grid-cols-1 gap-10 "
								key={index}
							>
								<div className="lg:col-span-5">
									<img
										src={item.image}
										alt="countdown"
									/>
								</div>
								<div className="lg:col-span-7">
									<h6 className="font-bold text-greenBtn capitalize mb-3">
										{item.subtitle}
									</h6>
									<h1 className="text-2xl lg:text-5xl min-[600px]:text-3xl md:text-4xl font-bold capitalize">
										{item.title1}
									</h1>
									<h1 className="text-2xl lg:text-5xl min-[600px]:text-3xl md:text-4xl font-bold md:font-bold capitalize">
										{item.title2}
									</h1>
									<Timer day={2} />
									<Link
										to="/shop"
										className="btn-animated rounded-md mt-10"
									>
										<span className="btn-animated-text">
											Shop now
										</span>
									</Link>
								</div>
							</div>
						))}
				</div>
			</Container>
		</div>
	);
};

export default CountDownSection;
