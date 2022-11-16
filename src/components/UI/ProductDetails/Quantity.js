import { useState } from "react";
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai';
export const Quantity = () => {
    const [quantity, setQuantity] = useState(0);
    
    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <div className="flex ">
            <button className="inline-block h-10 w-10 mx-2 border-2 rounded-sm border-gray-300"><AiOutlineMinus className="mx-auto"/></button>
            <input 
                type='number' 
                value={quantity} 
                onChange={handleQuantity}
                className='text-center h-10 w-20 border-2 rounded-sm border-gray-300 focus:outline-greenBtn'
            />
            <button className="inline-block h-10 w-10 mx-2 border-2 rounded-sm border-gray-300"><AiOutlinePlus  className="mx-auto"/></button>
        </div>
    )
}

export default Quantity;