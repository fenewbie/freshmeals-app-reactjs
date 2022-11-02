import Button from './Button';

const Content = ({title, subtitle, type}) => {
    return (
        <div className='text-[#fffffff7] shrink-0 grow'>
			<span className='text-xs xsm:text-sm sm:text-lg md:text-[0.9rem] font-semibold uppercase'>
                {type}
            </span>
			<h2 className='font-bold text-[1.4rem] xsm:text-[1.8rem] sm:text-[2.5rem] md:text-[1.8rem] capitalize'>
                {title}
            </h2>
			<h4 className='text-[1rem] xsm:text-[1.4rem]  sm:text-[2rem] md:text-[1.5rem] capitalize'>
                {subtitle}
            </h4>
			<Button />
		</div>
    )
}

export default Content;