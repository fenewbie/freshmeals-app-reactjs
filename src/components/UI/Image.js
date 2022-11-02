const Image = ({url, className, alt='image description'}) => {
    return (
		<img 
            src={url} 
            alt={alt}
            className={`h-full w-full ${className}`}
        />
    )
}

export default Image;