"use client"
import React, { useState } from 'react';
import ButtonSmall from '../UI/ButtonSmall';
import { useCartContext } from '@/app/context/CartContext';

const ControllerProduct = ({typeCategoryGeneral, data}) => {
    const { addToCart } = useCartContext()
    
    const [count, setCount] = useState(0);
    const [product] = useState(data);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count <= 0) return;
        setCount(count - 1);
    };

    const handleAddToCart = () => {
        addToCart({
            ...product,
            quantity: count,
            totalParcial: count * product.price,
            typeCategoryGeneral
        })
    }

  return (
    <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
        <div>
            <div className="flex justify-center items-center pb-2">
                <ButtonSmall onClick={decrementCount} text={"-"} />
                    <span className="p-5">
                        {count}
                    </span>
                <ButtonSmall onClick={incrementCount} text={"+"} />
            </div>
            <ButtonSmall onClick={handleAddToCart} disabled={count === 0} className="p-5" text={'Add Cart'}/>
        </div>
        <div>
            <h1>
                Total: {count * product.price}$
            </h1>
        </div>
    </div>
  );
};

export default ControllerProduct;
