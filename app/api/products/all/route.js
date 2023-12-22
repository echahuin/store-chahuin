import { NextResponse } from "next/server";
import { db } from "@/firebase/config"
import { collection, getDocs, query } from "firebase/firestore"

export async function GET(_, ) {
    
    const productsRef = collection(db, "products")
    const q = query(productsRef)
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map(doc => doc.data())

    
    return NextResponse.json(docs);

}   