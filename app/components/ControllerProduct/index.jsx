"use client"
import React, { useState } from 'react';
import ButtonSmall from '../UI/ButtonSmall';
import { useCartContext } from '@/app/context/CartContext';

const ControllerProduct = ({data}) => {
    const { addToCart } = useCartContext()
    
    const [count, setCount] = useState(0);
    const [product] = useState(data);
    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    const handleAddToCart = () => {
        addToCart({
            ...product,
            cantidad: count
        })
    }

  return (
    <div>
        <div className="flex justify-center items-center pb-2">
            <ButtonSmall onClick={decrementCount} text={"-"} />
                <span className="p-5">
                    {count}
                </span>
            <ButtonSmall onClick={incrementCount} text={"+"} />
        </div>
            <ButtonSmall onClick={handleAddToCart} className="p-5" text={'Add Cart'}/>
    </div>
  );
};

export default ControllerProduct;
