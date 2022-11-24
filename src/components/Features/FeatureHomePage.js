import useFirestore from '../../hooks/useFirestore';
import { shuffle } from '../../helper/utils';
import Rating from '../../containers/Product/ProductItem/Rating';
import { Link } from 'react-router-dom';
import { BtnIcon } from '../../containers/Product/ProductItem/BtnIcon';
import Title from '../UI/Title';
import Slider from '../UI/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
export default function FeatureHomePage() {
	const { docs } = useFirestore('products');
	const shuffleProducts = shuffle(docs);
	const featureProducts = shuffleProducts.slice(0, 9);

	return (
		<div>
			<Title title="Featured Products" />
			<Slider
				breakpoints={{
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 4,
					},
				}}
			>
				{featureProducts.map((item, index) => (
					<SwiperSlide key={index}>
						<div className="border-2 border-zinc-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300 group">
							<div>
								<Link
									className={`block relative bg-slate-100 pt-[100%]`}
								>
									<span className="absolute top-4 right-4 text-sm font-bold text-white py-1 px-3 rounded-tl-2xl rounded-br-2xl bg-greenBtn z-10">
										{item.label}
									</span>
									<img
										src={item.image}
										title="product"
										className="absolute top-0 left-0 w-full h-full object-contain"
										alt={item.title}
									/>
									<div className="absolute left-0 top-1/2 w-full text-center opacity-0 transition-all duration-300 translate-y-1/2 group-hover:opacity-100 group-hover:-translate-y-1/2">
										<BtnIcon />
									</div>
								</Link>

								<div className="p-8">
									<Rating
										value={item.rating}
										text={`(${item.numReviews} reviews)`}
									/>
									<Link
										className="text-[15px] text-center capitalize font-bold mt-1 block hover:text-greenBtn transition-all duration-300"
										to={`shop/${item.id}`}
									>
										{item.title}
									</Link>
									<div className="flex justify-center mt-2">
										<h4 className="text-xl font-bold text-greenBtn">
											${item.discount}
										</h4>
										<h4 className="text-xl font-bold text-greenBtn line-through ml-3 opacity-60">
											${item.price}
										</h4>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Slider>
		</div>
	);
}
