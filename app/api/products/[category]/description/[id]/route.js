import { NextResponse } from "next/server";
import data from "@/app/data.json";
import { db } from "@/firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"



export async function GET(_, {params}) {
    
    const id = params.id
    const category = params.category
    

    const productsRef = collection(db, "products")
    const q = query(productsRef, where('category', '==', category))
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map(doc => doc.data())
    // const dt = docs.products.filter((item) => item.id === id)
    const product = docs[0].products.find(item => item.id === id);


    console.log(product)


    return NextResponse.json(product);

}   