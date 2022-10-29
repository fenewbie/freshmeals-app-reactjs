import React from 'react'

export default function Promotion() {
	const imgs = [
					'https://cdn.glitch.global/a80c0b47-9516-4b2d-9d56-57223b656dbe/%E2%80%94Pngtree%E2%80%94orange%20png%20png%20free%20download_3619070.png?v=1666906883222',
					'https://cdn.glitch.global/a80c0b47-9516-4b2d-9d56-57223b656dbe/%E2%80%94Pngtree%E2%80%94fragrant%20fruit%20nutrition%20pineapple%20high_5743513.png?v=1666906979332',
					'https://cdn.glitch.global/a80c0b47-9516-4b2d-9d56-57223b656dbe/%E2%80%94Pngtree%E2%80%94pomelo%20fruit%20food_6342487.png?v=1666906987076'
				];
  	return (
		<div className='container mx-auto  overflow-hidden'>
			<div className='flex flex-wrap mx-[-15px] justify-center'>
				{
					imgs.map((src, index) => (
						<div key={index} className='lg:w-1/3 md:w-1/2 w-full px-[15px] lg:my-0 my-[15px]'>
							<div className='pt-[60%] bg-[red] relative'>
								<div className='absolute top-0 left-0 w-full h-full bg-[#FE9901] flex p-[30px]'>
									<div className='text-[#FFFFF7] '>

										<span className='text-[0.9rem] uppercase'>Hot sales</span>

										<h2 className='font-semibold text-[2.1rem]'>Big sale</h2>

										<h4 className='text-[1.7rem]'>Mango & juci</h4>

										<button className='text-[0.9rem]'>Buy Now</button>
									</div>
									<img src={src} className='absolute right-0 top-1/2 translate-y-[-50%] w-1/2'/>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
  	)
}
