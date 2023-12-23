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
        <div className="pt-5 container mx-auto flex justify-center items-center sm:flex-col">
        <ul className="list-disc space-y-4">
          {orders.map((order, index) => (
            <li className="p-1" key={index}>
              <p>{index + 1}.-Comprador: {order.client.displayName} - Fecha: {new Date(order.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Orders