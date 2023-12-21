"use client"
import React, { useState } from 'react';
import ButtonSmall from '../UI/ButtonSmall';
import { useCartContext } from '@/app/context/CartContext';
import style from './style.module.scss';

const ControllerProduct = ({ data}) => {

    const { addToCart } = useCartContext()
    
    const [count, setCount] = useState(0);
    const [product] = useState(data);

    const incrementCount = () => {
       if(data.stock !== count) setCount(count + 1);
    };

    const decrementCount = () => {
        if (count <= 0) return;
        setCount(count - 1);
    };

    const handleAddToCart = () => {
        addToCart({
            ...product,
            quantity: count
        })
        setCount(0)
    }

  return (
    <div className={style.contController}>
        <div className={style.contCounter}>
            <div style={{display: "flex", justifyContent: "space-between", paddingBottom: "10px"}}>
                <div>
                    <ButtonSmall onClick={decrementCount} text={"-"} />
                </div>
                <div className={style.count} >
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
        <div className={style.contTotal}>
            <h1>
                Total: {count * product.price}$
            </h1>
        </div>
    </div>
  );
};

export default ControllerProduct;
