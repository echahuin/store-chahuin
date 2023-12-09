import { NextResponse } from "next/server";
import { db } from "@/firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

export async function GET(_, {params}) {
    
    const category = params.category
    const productsRef = collection(db, "products")
    const q = query(productsRef, where('category', '==', category))
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map(doc => doc.data())
    console.log('this docs',docs)
    
    return NextResponse.json(docs);

}   