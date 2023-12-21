"use client"
import { createContext, useContext, useState } from "react";

const PaymentContext = createContext();
export const usePaymentContext = () => useContext(PaymentContext);

export const PaymentProvider = ({ children }) => {

    const [payment, setPayment] = useState({
        name: '',
        numberCard: '',
        month: '',
        year:'',
        cvv: ''
    });

    const addToPayment = (product) => {
        setPayment({
            name: product.name,
            numberCard: product.numberCard,
            month: product.month,
            year: product.year,
            cvv: product.cvv
        });
        
    }
    const clearPayment = () => {
        setPayment({
            name: '',
            numberCard: '',
            month: '',
            year:'',
            cvv: ''
        });
    }

    return (
        <PaymentContext.Provider value={{payment, addToPayment, clearPayment}}>
            {children}
        </PaymentContext.Provider>
    )
}