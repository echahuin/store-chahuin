"use client"
import { useAuthContext } from "@context/AuthContext"
import styles from './adminStyle.module.scss'
import Link from 'next/link'

const AdminLayout = ({ children, login }) => {
    
    const {user} = useAuthContext()

    return <div className={styles.contPanelAdmin}>
        {user.logged && (user.rol === "admin") && 
        <div className={styles.contMenuAdmin} > 
            <Link className="hover:text-blue-500" href={'/admin'}>Table</Link>
            <Link className="hover:text-blue-500" href={'/admin/create'}>Add Product</Link>
            <Link className="hover:text-blue-500" href={'/admin/orders'}>orders</Link>
        </div>}
        { user.logged && (user.rol === "admin") ? children : login}
    
    </div>

}

export default AdminLayout