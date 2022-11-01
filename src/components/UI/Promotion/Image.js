const Image = ({url}) => {
    return (
        <div className='h-full'>
			<img src={url} alt='promotion_img' className='h-full w-full object-contain relative left-2.5'/>
		</div>
    )
}

export default Image;