const Button = ({children, title, onClick}) => {
    return (
        <button 
            title={title} 
            className={`h-[50px] w-[50px] font-medium text-gray-900 bg-white mx-1 rounded-full focus:outline-none hover:bg-[#80B500] hover:text-white transition-all duration-300`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}


export default Button;