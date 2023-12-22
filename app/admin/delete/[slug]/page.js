import {deleteDoc, doc} from "firebase/firestore"
import { db } from "@/firebase/config"
import { redirect } from 'next/navigation'

const Delete = async({params}) => {
    await deleteDoc(doc(db, "products", params.slug)).then(() => console.log("delete products"));
    return redirect('/admin')
}

export default Delete