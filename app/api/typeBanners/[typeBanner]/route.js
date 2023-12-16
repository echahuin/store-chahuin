import { NextResponse } from "next/server";
import { db } from "@/firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"


export async function GET(_, {params}) {
  
  const { typeBanner} = params

  const productsRef = collection(db, "products")
  const q = query(productsRef, where('banner', '==', true))
  const querySnapshot = await getDocs(q)
  const docs = querySnapshot.docs.map(doc => doc.data())
  const data = docs.filter(doc => doc.dataBanner.typeBanner === typeBanner)

  console.log(data)

  return NextResponse.json({data});
}