"use client"
import { useAuthContext } from "@context/AuthContext"

const LoginOrRegisterLayout = ({ children, payment }) => {
    
    const {user} = useAuthContext()
    console.log(user)

    if(user.logged && payment ){
        return <> {payment} </>
    }

    return <> {children} </>

}

export default LoginOrRegisterLayout