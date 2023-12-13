import { NextResponse } from "next/server";
import { db } from "@/app/firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

export async function GET(_, ) {
    
    // const category = params.category
    const productsRef = collection(db, "products")
    const q = query(productsRef)
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map(doc => doc.data())
    console.log(docs)

    
    return NextResponse.json(docs);

}   