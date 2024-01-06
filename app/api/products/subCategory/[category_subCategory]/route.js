import { NextResponse } from "next/server";
import { db } from "@/firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

function getCategoryAndSubcategory(word) {
    const _ = word.indexOf("-");
    const category = word.substring(0, _ );
    const subCategory = word.substring( _ + 1);
    return [category, subCategory];
}

export async function GET(_, {params}) {

    const {category_subCategory} = await params  
    const [category, subCategory] = getCategoryAndSubcategory(category_subCategory);
    console.log(category, subCategory)
    
    if(subCategory === 'all') {
    
        const productsRef = collection(db, "products")
        const q = query(productsRef, where('category', '==', category))
        const querySnapshot = await getDocs(q)
        const docs = querySnapshot.docs.map(doc => doc.data())
        
        return NextResponse.json(docs);
    }
    
    const productsRef = collection(db, "products")
    const q = query(productsRef, where('category', '==', category), where('subCategory', '==', subCategory))
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map(doc => doc.data())
    
    return NextResponse.json(docs);
}   