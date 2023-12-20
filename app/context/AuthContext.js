"use client"
import { auth } from "@/firebase/config"
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut } from "firebase/auth"
import React, { createContext, useState, useContext, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config"
import Router from "next/router";
import addUserDb from "@/app/utils/addUserDb"

 const AuthContext = createContext()

 export const useAuthContext = () => useContext(AuthContext)

 
 export const AuthProvider = ({ children }) => {
     
        const [user, setUser] = useState({
            logged: false,
            email: null,
            uid: null,
            displayName: null,
            photoURL: null,
            phoneNumber: null,
            rol:null
        })
        
        const registerUser = async (value) => {
            
        await createUserWithEmailAndPassword(auth, value.email, value.password)
        await addUserDb({...value})
        
        }
        
        const loginUser = async (values) => {
           await signInWithEmailAndPassword(auth, values.email, values.password)
        }

        const logoutUser = async () => {
            await signOut(auth)
        }

        useEffect(() => {
        
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const docRef = doc(db, "users", user.email);
                    const userDoc = await getDoc(docRef);

                    console.log('userDoc', userDoc.data()?.rol)
                    console.log('user', user)
                    
                    if (userDoc.data()?.rol === 'admin' || userDoc.data()?.rol === 'client') {
                        
                        setUser({
                            logged: true,
                            email: user.email,
                            uid: user.uid,
                            displayName: userDoc.data()?.displayName,
                            photoURL: userDoc.data()?.photoURL,
                            phoneNumber: userDoc.data()?.phoneNumber,
                            rol: userDoc.data()?.rol
                        })
                        // }
                    // } else if(userDoc.data()?.rol === 'client'){
                    //     // Router.push('/')
                    //     setUser({
                    //         logged: true,
                    //         email: user.email,
                    //         uid: user.uid,
                    //         displayName: user.displayName,
                    //         photoURL: user.photoURL,
                    //         phoneNumber: user.phoneNumber,
                    //         rol: userDoc.data()?.rol
                    //     })
                    // } else {
                    //     logoutUser()
                    }
                    } else {
                        setUser({
                            logged: false,
                            email: null,
                            uid: null,
                            displayName: null,
                            photoURL: null,
                            phoneNumber: null,
                            rol: null
                        })
                    }
            })
        }, []);
   

    const value = { user, registerUser, loginUser, logoutUser }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

 }