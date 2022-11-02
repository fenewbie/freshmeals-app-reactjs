import { Link } from 'react-router-dom';

const ButtonLink = ({className, to = '/', children = 'Button'}) => {
    return (
		<Link to={to} 
			class={` rounded-lg   ${className}`}
		>
			{children}
		</Link>
    )
}


export default ButtonLink;