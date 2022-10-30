import React from 'react'
import {promitionListImages} from '../../constants/route'

export default function Promotion() {
  	return (
		<div className='container mx-auto xsm:max-w-full'>
			{/* <div className='flex flex-wrap lg:mx-[-15px] justify-center'> */}
			<div className='flex flex-wrap justify-center'>
				{
					promitionListImages.map(({url, title, subtitle, id}) => 
						(
							<div key={id} className='w-full lg:w-1/3 md:w-1/2 px-[15px] my-[15px]'>
								<div className='lg:pt-[60%] pt-[50%] relative overflow-hidden'>
										<div className='absolute top-0 left-0 w-full h-full bg-[#FE9901] flex items-center  px-[30px] md:px-[25px] hover:scale-110 transition-all duration-[2000ms]'>
											<div className='text-[#fffffff7] shrink-0 grow'>

												<span className='text-xs xsm:text-sm sm:text-lg md:text-[0.9rem] font-semibold uppercase'>hot sales</span>

												<h2 className='font-bold text-[1.4rem] xsm:text-[1.8rem] sm:text-[2.5rem] md:text-[1.8rem] capitalize'>{title}</h2>

												<h4 className='text-[1rem] xsm:text-[1.4rem]  sm:text-[2rem] md:text-[1.5rem] capitalize'>{subtitle}</h4>

												<a href='' className='text-xs xsm:text-sm sm:text-lg md:text-[0.9rem] sm:mt-3 capitilize font-semibold block mt-1'>Buy Now</a>
											</div>
											<div className='h-full'>
												<img src={url} className='h-full w-full object-contain relative left-2.5'/>
											</div>
										</div>
								</div>
							</div>
						)
					)
				}
			</div>
		</div>
  	)
}
