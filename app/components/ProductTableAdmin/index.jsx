import React from 'react'
import style from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const ProductTableAdmin = async() => {

    const items = await fetch(`http://${process.env.VERCEL_URL}/api/products/all`, {cache: 'no-store' }).then(res => res.json()) 

    return (
    <>
    <div className={style.contTable}>
        <div className={style.tables}>
         <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Slug</th>
              <th>Stock</th>
              <th>Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          
          <tbody>
            {items.map((item, index)=>{
              return (
                <tr key={index}>
                    <td><Image src={item.img} width={50} height={50} alt=''/></td>
                    <td>{item.category}</td>
                    <td>{item.description.substring(0, 30) + '...'}</td>
                    <td>{item.price}</td>
                    <td>{item.slug}</td>
                    <td>{item.stock}</td>
                    <td>{item.title}</td>
                    { item.dataBanner.typeBanner ? <td><span className='text-gray-300'>disable</span></td> : <td className='cursor-pointer' ><Link href={`/admin/edit/${item.slug}`} className="text-blue-500">Edit...</Link></td> } 
                    { item.dataBanner.typeBanner ? <td><span className='text-gray-300'>disable</span></td> : <td className='cursor-pointer' ><Link href={`/admin/delete/${item.slug}`} className='text-red-300' >Delete...</Link></td>}
                    </tr>
                )
              })}
            </tbody>
            </table>
        </div>
      </div>
  </>
  )
}

export default ProductTableAdmin