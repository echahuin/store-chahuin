"use client"
import { useAuthContext } from "@context/AuthContext"

const LoginOrRegisterLayout = ({ children, payment }) => {
    
    const {user} = useAuthContext()

    if(user.logged && payment ){
        return <> {payment} </>
    }

    return <> {children} </>

}

export default LoginOrRegisterLayout