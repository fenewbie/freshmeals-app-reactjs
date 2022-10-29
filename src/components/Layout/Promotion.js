import React from 'react'
import {promitionListImages} from '../../constants/route'

export default function Promotion() {
  	return (
		<div className='container mx-auto '>
			<div className='flex flex-wrap lg:mx-[-15px] justify-center'>
				{
					promitionListImages.map(({url}, index) => (
						<div key={index} className='lg:w-1/3 md:w-1/2 w-full px-[15px] lg:my-0 my-[15px]'>
							<div className='pt-[60%] bg-[red] relative overflow-hidden'>
									<div className='absolute top-0 left-0 w-full h-full bg-[#FE9901] flex items-center  px-[20px] md:px-[25px] hover:scale-110 transition-all duration-[2000ms]'>
										<div className='text-[#FFFFF7]  grow shrink-0'>

											<span className='text-xs sm:text-lg md:text-base font-medium uppercase'>Hot sales</span>

											<h2 className='font-semibold text-[1.7rem] sm:text-[2.6rem] md:text-[1.8rem] capitilize'>Big sale</h2>

											<h4 className='text-[1.2rem] sm:text-[2rem] md:text-[1.5rem]'>Mango & juci</h4>

											<a href='' className='text-xs sm:text-lg md:text-base sm:mt-3 capitilize font-medium'>Buy Now</a>
										</div>
										<div>
											<img src={url} className='h-full w-full relative left-2.5'/>
										</div>
									</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
  	)
}
