import { doc,  setDoc,  } from "firebase/firestore";
import { db } from '@/firebase/config';
import { NextResponse } from "next/server";

export async function POST(req) {

    const { values } = await req.json()

    try {
        const docRef = doc(db, "products", values.slug)
        setDoc(docRef, {
            ...values
        })
        return NextResponse.json({data: 'ok'}, {status: 200});
    } catch (error) {
        return NextResponse.json({dataError: error}, {status: 500});
    }
}