import { useState } from "react";
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai';
import Button from "../../components/UI/Button";


const ProductCounter = () => {
    const [counter, setCounter] = useState(0);

    const handleDecrement = (e) => {
        e.preventDefault();
        setCounter(preCounter => {
            const newCounter = preCounter === 0 ? 0 : preCounter - 1;
            return newCounter;
        });
    }

    const handleIncrease = (e) => {
        e.preventDefault();
        setCounter(counter + 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(counter);
    }

    return (
        <form className="flex">
            <div className="flex  border-2 border-gray-300">
                <button 
                    className="inline-block h-12 w-12 border-r-2 border-gray-300"
                    onClick={handleDecrement}
                >
                    <AiOutlineMinus className="mx-auto"/>
                </button>
                <input 
                    type='number' 
                    value={counter} 
                    onChange={(e) => setCounter(parseFloat(e.target.value))}
                    className='text-lg font-bold text-center h-12 w-24  focus:outline-greenBtn'
                />
                <button 
                    className="inline-block h-12 w-12 border-l-2 border-gray-300"
                    onClick={handleIncrease}
                >
                    <AiOutlinePlus  className="mx-auto"/>
                </button>
            </div>
            <Button onClick={handleSubmit}>Add to cart</Button>
        </form>
    )
}

export default ProductCounter;