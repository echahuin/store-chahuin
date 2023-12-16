import { NextResponse } from "next/server";
import { db } from "@/firebase/config"
import { collection, doc, getDoc, query, where } from "firebase/firestore"

export async function GET(_, {params}) {
    
    const { slug } = params
    
    console.log(slug)

    // const productsRef = collection(db, "products")
    // const q = query(productsRef, where('slug', '==', slug))
    // const querySnapshot = await getDocs(q)
    // const docs = querySnapshot.docs.map(doc => doc.data())


    const docRef = doc(db, "products", slug);
    const docSnap = await getDoc(docRef);

    // const docSnapshot = await getDocs(docRef)
    // console.log(docRef)

    // console.log(docs)

    // const q = query(productsRef, where('category', '==', category))
    // const docs = querySnapshot.docs.map(doc => doc.data())
    // const product = docs[0].products.find(item => item.id === id);
    // console.log(docs)
    
    return NextResponse.json(docSnap.data());

}   