import { NextResponse } from "next/server";
import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore"

export async function GET(_, {params}) {
    
    const { slug } = params

    const docRef = doc(db, "products", slug);
    const docSnap = await getDoc(docRef);
    
    return NextResponse.json(docSnap.data());

}   