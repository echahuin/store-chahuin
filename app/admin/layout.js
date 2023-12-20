"use client"
import { useAuthContext } from "@context/AuthContext"

const AdminLayout = ({ children, login }) => {
    
    const {user} = useAuthContext()
    console.log(user)

    return <> { user.logged && (user.rol === "admin") ? children : login} </>

}

export default AdminLayout