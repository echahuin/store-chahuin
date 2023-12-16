"use client"
import { auth } from "@/firebase/config"
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut } from "firebase/auth"
import React, { createContext, useState, useContext, useEffect } from "react"

 const AuthContext = createContext()

 export const useAuthContext = () => useContext(AuthContext)

 
 export const AuthProvider = ({ children }) => {
     
        const [user, setUser] = useState({
            logged: false,
            email: null,
            uid: null,
        })
        
        const registerUser = async (value) => {
           await createUserWithEmailAndPassword(auth, value.email, value.password)
        }
       
        const loginUser = async (values) => {
           await signInWithEmailAndPassword(auth, values.email, values.password)
        }

        const logoutUser = async () => {
            await signOut(auth)
        }

        useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser({
                        logged: true,
                        email: user.email,
                        uid: user.uid,
                    })
                } else {
                    setUser({
                        logged: false,
                        email: null,
                        uid: null,
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