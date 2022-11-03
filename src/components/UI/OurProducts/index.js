import { useEffect, useState } from "react";

import Product from "../Product";
import axios from "axios";

const OurProducts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const apiLink = 'https://api.spoonacular.com/recipes/1003464/priceBreakdownWidget.json?apiKey=4afa02b7ba254594b134c17e3347d39f&includeNutrition=true.';

        axios.get(apiLink)
            .then(res => 
                setData(res.data.ingredients)
            );
    }, []);

    return (
        <div className="grid grid-cols-4 gap-[30px] py-[100px]">
            {data.map((item, index) => {
                console.log(item.image);
                return <Product key={index} imgSrc={'hihi'} name={item.name} newPrice={item.price}/>
            })}
        </div>
    )
}

export default OurProducts;