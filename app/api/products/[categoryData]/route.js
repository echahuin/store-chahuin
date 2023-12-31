import { NextResponse } from "next/server";
import { db } from "@/firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

export async function GET(_, {params}) {

    const {categoryData} = await params
    
    const productsRef = collection(db, "products")
    const q = query(productsRef, where('category', '==', categoryData))
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map(doc => doc.data())
    
    return NextResponse.json(docs);

}   