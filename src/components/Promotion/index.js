import { Link } from 'react-router-dom';
import { RiShoppingCart2Line } from 'react-icons/ri';

import Button from '@components/UI/Button';

function PromotionCard({ id, type, title, subtitle, image, isRandom }) {
	return (
		<Link to="/shop">
			<div className="xl:pt-[65%] lg:pt-[75%] md:pt-[60%]  pt-[55%] relative overflow-hidden rounded">
				<div
					className={`absolute top-0 left-0 w-full h-full flex items-center px-[30px] md:px-[25px] hover:scale-110 transition-all duration-[1000ms]
					${id === '2' ? 'bg-[#103001]' : 'bg-[orange]'}`}
				>
					<div className="text-[#fffffff7] shrink-0 grow ">
						<span
							className={`text-xs xsm:text-sm lg:text-[0.7rem] sm:text-lg ${
								isRandom ? 'md:text-3xl' : 'md:text-[0.7rem]'
							}  uppercase`}
						>
							{type}
						</span>
						<h2
							className={`font-bold text-[1.4rem] xsm:text-[1.8rem] sm:text-[2.5rem] lg:text-[1.8rem] ${
								isRandom
									? 'md:text-6xl md:mt-3'
									: 'md:text-[1.8rem]'
							} capitalize`}
						>
							{title}
						</h2>
						<h4
							className={`font-semibold text-[1rem] xsm:text-[1.4rem] md:text-[1.5rem]  sm:text-[2rem] ${
								isRandom && 'md:my-3'
							} capitalize`}
						>
							{subtitle}
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
							src={image}
							alt={title}
							className="h-full w-full object-contain relative left-2.5"
						/>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default PromotionCard;
