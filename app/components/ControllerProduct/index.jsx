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
        <div style={{width: "15rem", background:""}}>
            <div style={{display: "flex", justifyContent: "space-between", paddingBottom: "10px"}}>
                <div>
                    <ButtonSmall onClick={decrementCount} text={"-"} />
                </div>
                <div style={{ textAlign:"center", width:"6rem", height: "4rem", fontSize:"1.5rem", transition: "display 0.2s ease-in-out"}}>
                    <span>
                        {count}
                    </span>
                </div>
                <div>
                    <ButtonSmall onClick={incrementCount} text={"+"} />
                </div>
            </div>
            <ButtonSmall onClick={handleAddToCart} disabled={count === 0} className="p-5" text={'Add Cart'}/>
        </div>
        <div style={{width:"16rem", height: "4rem"}}>
            <h1>
                Total: {count * product.price}$
            </h1>
        </div>
    </div>
  );
};

export default ControllerProduct;
