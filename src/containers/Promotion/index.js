
import { RiShoppingCart2Line } from 'react-icons/ri';

import Button from '../Button';
import useFirestore from '../../../hooks/useFirestore';

export default function Promotion() {
	const { docs } = useFirestore('promotion');

	return (
		<div className="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1 gap-7">
			{docs.map((item) => (
				<div 
					key={item.id}
					className={`lg:col-span-1 ${
						item.id == 3 ? 'md:col-[2_/_span_2]' : 'md:col-span-2'
					}`}
				>
					<div className="lg:pt-[65%] md:pt-[60%] max-[320px]:pt-[65%] pt-[55%] relative overflow-hidden rounded">
						<div
							className={`absolute top-0 left-0 w-full h-full flex items-center max-[320px]:px-[15px]  px-[30px] md:px-[25px] hover:scale-110 transition-all duration-[1000ms] 
					${item.id == 2 ? 'bg-[#103001]' : 'bg-[orange]'}`}
						>
							<div className="text-[#fffffff7] shrink-0 grow ">
								<span className="text-xs xsm:text-sm sm:text-lg md:text-[0.9rem] font-semibold uppercase">
									{item.type}
								</span>
								<h2 className="font-bold text-[1.4rem] xsm:text-[1.8rem] sm:text-[2.5rem] md:text-[1.8rem] capitalize">
									{item.title}
								</h2>
								<h4 className="text-[1rem] xsm:text-[1.4rem]  sm:text-[2rem] md:text-[1.5rem] capitalize">
									{item.subtitle}
								</h4>
								<Button
									className="rounded-lg hover:text-gray-900 mt-3 max-[320px]:text-[0.7rem] max-[320px]:p-2 inline-block py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-200"
									to="/shop"
								>
									<span className="flex items-center">
										Buy Now
										<RiShoppingCart2Line className="ml-2" />
									</span>
								</Button>
							</div>
							<div className="h-full">
								<img
									src={item.image}
									alt={item.title}
									className="h-full w-full object-contain relative left-2.5"
								/>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
