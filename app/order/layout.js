"use client"
import { usePaymentContext } from "../context/PaymentContext"

const OrderLayout = ({ children }) => {
    
    const {payment} = usePaymentContext()
    console.log(payment)

    if( payment.name !== ''){
        return <> {children} </>
    }
    return <> Error..! </>
}

export default OrderLayout