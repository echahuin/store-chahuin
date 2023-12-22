
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { NextResponse } from "next/server";

export async  function POST( req ){

    
    const { displayName, 
        email, 
        password, 
        photoURL,  
        phoneNumber,
    } = await req.json()
    try {

        const docRef = doc(db, "users", email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // return error, user already exists
            return NextResponse.json({data: 'user already exists'}, {status: 500});

        } else {
            const usersRef = doc(db, 'users', email);
            setDoc(usersRef, {
                name: displayName,
                displayName: displayName,
                email: email,
                password: password,
                photoURL: photoURL,
                phoneNumber: phoneNumber,
                rol: "client"
             }).then(() => console.log("create users"));
        }
        return NextResponse.json({data: 'get data ok'}, {status: 200});
    } catch (error) {
        return NextResponse.json({data: 'post data error'}, {status: 500});
    }
}