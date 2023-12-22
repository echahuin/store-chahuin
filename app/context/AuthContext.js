"use client"
import React, { createContext, useState, useContext, useEffect } from "react"
import { auth, googleAuthProvider } from "@/firebase/config"
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut,
         updateProfile,
         signInWithPopup,
         } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "@/firebase/config"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
        
        const registerUser = async (value, file) => {
            try {
            
                const storageRef = ref(storage, value.email)
                const fileSnapshot = await uploadBytes(storageRef, file)
                const fileURL = await getDownloadURL( fileSnapshot.ref )
                
                await createUserWithEmailAndPassword(auth, value.email, value.password)
                await updateProfile(auth.currentUser, { 
                    displayName: value.displayName,
                    rol: 'client',
                    photoURL: fileURL,
                    phoneNumber: parseInt(value.phoneNumber)}).then(() => {})
                await addUserDb({...value, photoURL: fileURL})

                return { ok: true , error:  null }
              
              } catch (error) {
                return { ok: false , error:  error }
              }
        
        }
        
        const loginUser = async (values) => {
           await signInWithEmailAndPassword(auth, values.email, values.password)
        }

        const logoutUser = async () => {
            await signOut(auth)
        }
        
        const loginGoogle = async () => {
        
            await signInWithPopup(auth, googleAuthProvider).then((result) => {
                if(result?.operationType === 'signIn'){
                    setUser({
                        logged: true,
                        email: result.user.providerData[0].email,
                        uid: result.user.providerData[0].uid,
                        displayName: result.user.providerData[0].displayName,
                        photoURL: result.user.providerData[0].photoURL,
                        phoneNumber: result.user.providerData[0].phoneNumber,
                        rol: "client"
                    })
                }
                })

        }

        useEffect(() => {
            onAuthStateChanged(auth, async (user) => {                
                if (user) {
                    const docRef = doc(db, "users", user.email);
                    const userDoc = await getDoc(docRef);
                    if (userDoc.data()?.rol === 'admin' || userDoc.data()?.rol === 'client') {
                        
                        setUser({
                            logged: true,
                            email: user.email,
                            uid: user.uid,
                            displayName: user.displayName,
                            photoURL:user.photoURL,
                            phoneNumber: user?.phoneNumber,
                            rol: userDoc.data()?.rol
                        })
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
                
                // if (user) {
                //         setUser({
                //             logged: true,
                //             email: user.email,
                //             uid: user.uid,
                //             displayName: user.displayName,
                //             photoURL: user.photoURL,
                //             phoneNumber: user.phoneNumber,
                //             rol: user.rol
                //         })
                //     }
            })
        }, []);
   

    const value = { user, registerUser, loginUser, logoutUser, loginGoogle }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

 }