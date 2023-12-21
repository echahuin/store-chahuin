import { db } from "@/firebase/config"
import { collection,  getDocs } from "firebase/firestore"


const getOrders = async () => {
    
    const ordersRef = collection(db, "orders")
    const querySnapshot = await getDocs(ordersRef)
    const docs = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
    
    return docs
}

const Orders = async () => {
    const orders = await getOrders()
    
    return (
    <div className="flex justify-center align-items-center" >
        <h1>Orders</h1>
        <ul>
            {orders.map((order, index)=>{
                    return (
                        <li key={index}>
                            <p>Comprador: {order.client.nombre}</p>
                            <p>Fecha: {new Date(`${order.client.dat}`)}</p>
                        </li>
                    )    
            })}
        </ul>
    </div>
    )
}

export default Orders