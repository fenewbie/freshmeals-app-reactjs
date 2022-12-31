import BlogSlider from '@components/Blog/BlogSlider';
import Title from '@components/Title';
import Button from '@components/UI/Button';
import { useRouteLoaderData } from 'react-router-dom';
import { SubscribeForm } from '@components/Form';
import Timer from '@features/HomeScreen/CountDownSection/Timer';
import { Link } from 'react-router-dom';

const Gallery = () => {
	const { galleries } = useRouteLoaderData('root');
	const { blogs } = useRouteLoaderData('root');
	return (
		<div>
			<Title title="Our Activities" />
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
				{galleries[0].images.map((item) => {
					return (
						<div className="h-72 w-full group overflow-hidden">
							<img
								src={item}
								alt="gallery"
								className="h-full w-full object-cover group-hover:scale-110 transition-all duration-[1s]"
							/>
						</div>
					);
				})}
			</div>
			<div className="text-center">
				<Button className="btn-animated mt-16 max-md:w-full">
					<span className="btn-animated-text">Load More</span>
				</Button>
			</div>
			{/* <div className="mt-16">
				<Title title="Leatest Blog" />
				<BlogSlider blogs={blogs} />
			</div> */}
		<div className="bg-comming-soon bg-cover bg-center bg-no-repeat h-[750px] px-0 -mt-1">
			<div className="flex flex-col items-center justify-center ">
				<div className="text-center mt-14">
					<h6 className="text-green-600 bold font-raj text-lg mb-3">
						Welcome to you
					</h6>
					<h1 className="font-raj text-7xl text-white">We Are Coming Soon</h1>
					<h5 className="text-green-600 bold font-raj text-lg mt-3">
						July 26, 2023
					</h5>
				</div>
				<Timer day={162} type={true}/>

				<div className="my-14 shrink w-2/4">
					<h3 className="mb-10 text-center font-raj text-2xl text-white">
						Notify me when we launch
					</h3>
					<SubscribeForm />
				</div>
				<div className="mb-14 ">
					<Link to="contact" className="uppercase text-white">
						Contact Us
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
