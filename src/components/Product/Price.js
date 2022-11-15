
const Price = ({className, children}) => {
    return (
        <h4 className={`text-xl font-bold text-greenBtn ${className}`}>${children}</h4>
    )
}

export default Price;