import {deleteDoc, doc, getDoc} from "firebase/firestore"
import { db } from "@/firebase/config"
import { redirect } from 'next/navigation'
import { ref, deleteObject } from "firebase/storage";
import { storage } from '@/firebase/config';

const Delete = async({params}) => {

    const docRef = doc(db, "products", params.slug);
    const docSnap = await getDoc(docRef);
    // const storage = getStorage();
    const desertRef = ref(storage, docSnap.data().img);
    await deleteObject(desertRef).then(() => console.log("delete img"));
    await deleteDoc(doc(db, "products", params.slug)).then(() => console.log("delete products"));
    
    return redirect('/admin')
}

export default Delete