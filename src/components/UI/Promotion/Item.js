
import Content from './Content';
import Image from './Image';

const Item = (props) => {
    return (
        <div className='w-full lg:w-1/3 md:w-1/2 px-[15px] my-[15px]'>
			<div className='lg:pt-[65%] md:pt-[60%] pt-[55%] relative overflow-hidden rounded'>
				<div className={`absolute top-0 left-0 w-full h-full flex items-center  px-[30px] md:px-[25px] hover:scale-110 transition-all duration-[1000ms] 
					${props.value.id == 2 
							? 'bg-[#103001]'
							: 'bg-[orange]'
					}`}
				>
						<Content 
							title={props.value.title} 
							subtitle={props.value.subtitle}
							type={props.value.type}
						/>
						<Image url={props.value.image}/>
			    </div>
			</div>
		</div>

    )
}

export default Item;