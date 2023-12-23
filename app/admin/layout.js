"use client"
import { useAuthContext } from "@context/AuthContext"
import styles from './adminStyle.module.scss'
import Link from 'next/link'
import { Suspense } from 'react'


const AdminLayout = ({ children }) => {
    
    const {user} = useAuthContext()

    return <div className={styles.contPanelAdmin}>
        {user.logged && (user.rol === "admin") && 
        <div className={styles.contMenuAdmin} > 
            <Link className="hover:text-blue-500" href={'/admin/create'}>Add Product</Link>
            <Link className="hover:text-blue-500" href={'/admin'}>Table</Link>
            <Link className="hover:text-blue-500" href={'/admin/orders'}>orders</Link>
        </div>}
        <Suspense fallback={<>Loagin table...</>}>
        { user.logged && (user.rol === "admin") ? children : <>hi</>}
        </Suspense>
    
    </div>

}

export default AdminLayout