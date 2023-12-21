"use client"
import React,{ useEffect } from 'react'
import { useCartContext } from '@/app/context/CartContext';
import { usePaymentContext } from '../context/PaymentContext';
import { useAuthContext } from '../context/AuthContext';
import style from './styles.module.scss'
import ButtonSmall from '../components/UI/ButtonSmall';
import { useRouter } from 'next/navigation'
import { Timestamp, doc, getDoc, setDoc, writeBatch } from 'firebase/firestore';
import { db } from "@/firebase/config";


const OrderPage = () => {

    const router = useRouter()
    const { payment, clearPayment } = usePaymentContext()
    const { cart, clearCart } = useCartContext()
    const { user } = useAuthContext()
    
    console.log(payment)
    
    useEffect(() => {
        if(payment.name === ''){
            router.push('/')
        }
    }, [ payment, router]);
    
    
    const createOrder = async (values, items) => {
      const docsPromises = items.map((item) => {
        const docRef = doc(db, "products", item.slug)
        return getDoc(docRef)
      })
      
      const docs = await Promise.all(docsPromises)
      const batch = writeBatch(db)
      const outOfStock = []
      
      docs.forEach(doc => {
        
        const { stock } = doc.data()
        const itemInCart = items.find(item => item.slug === doc.id)
        console.log(stock, itemInCart.quantity)
        console.log('this items', stock - itemInCart.quantity)
        if (itemInCart.quantity > stock) {
          outOfStock.push(itemInCart)
        } else {
          batch.update(doc.ref, { stock: stock - itemInCart.quantity })
      }
  
    });
  
    if(outOfStock.length > 0) return outOfStock
  
    const order = {
      client: values,
      items: items.map(item => ({
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        slug: item.slug
      })),
      date: new Date().toISOString(),
    }
  
    const docId = Timestamp.fromDate(new Date()).toMillis()
    const orderRef = doc(db, "orders", String(docId))
    await batch.commit()
    await setDoc(orderRef, order)
  
    return docId
    
  }
  
  const handleFinalOrder = async() => {
  
    const ret = await createOrder(user, cart)
      if(typeof ret === 'number'){
        clearPayment()
        clearCart()
        router.push('/')
      }
      if(Array.isArray(ret)){
        console.log('out of stock')
      }
    }
    
  return (
    <div  className={style.orderPage}>
        <h1> Detalles de la tarjeta</h1>
        <div className={style.simulCard} >
            <div>{payment.name}</div>
            <div>{payment.numberCard}</div>
            <div>{payment.month}/{payment.year}</div>
        </div>
        <h1>Detalles de la orden</h1>
        <ul>
            {   cart.map((item, index)=>{
                
                return (<li key={index} >
                        {item.quantity} - {item.category}: {item.title} - - - - - <strong>{item.price}$</strong> 
                    </li>)
                })
            }
        </ul>
        <div className={style.contButtonSmall}>
            <ButtonSmall disabled={!(cart.length > 0)} onClick={handleFinalOrder} text={'finalizar compra'} />
        </div>
    </div>
  )
}

export default OrderPage