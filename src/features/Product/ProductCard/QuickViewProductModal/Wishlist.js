import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai'

const WishList = ({className, wishlist, onClick}) => {

    return (
        <button className={className} onClick={onClick}>
            {
                wishlist ? <AiFillHeart className='text-greenBtn'/> : <AiOutlineHeart/>
            }
        </button>
    )
}

export default WishList;