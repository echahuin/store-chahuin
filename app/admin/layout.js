"use client"
import { useAuthContext } from "@context/AuthContext"

const AdminLayout = ({ children, login }) => {
    
    const {user} = useAuthContext()
    console.log(user.logged)

    return <> { user.logged ? children : login} </>

}

export default AdminLayout