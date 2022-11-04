import { useEffect, useState } from "react";

import Product from "../../../components/Product";


const OurProducts = () => {
    const products = [
        {
            id: 1,
            name: 'Carrots Group Scal',
            newPrice: '32.00',
            oldPrice: '46.00',
            labelSale: '19%',
            image: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/product/6.png'
        }
    ]

    return (
        <div className="grid grid-cols-4 gap-[30px] py-[100px]">
            {products.map((product, index) => {
                return <Product key={index} imgSrc={product.image} name={product.name} newPrice={product.price}/>
            })}
        </div> 
    )
}

export default OurProducts;