import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Table = ({data}) => {

  return (
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
            {data.products.map((item, index)=>{
                console.log(item)
                return (
                    <tr key={index}>
                    <td><Image src={item.img} width={50} heigth={50} alt=''/></td>
                    <td>{item.category}</td>
                    <td>{item.description.substring(0, 30) + '...'}</td>
                    <td>{item.price}</td>
                    <td>{item.slug}</td>
                    <td>{item.stock}</td>
                    <td>{item.title}</td>
                    <td className='cursor-pointer' ><Link href={'/admin/edit'}>Edit...</Link></td>
                    <td className='cursor-pointer' ><Link href={'/admin/edit'}>Delete...</Link></td>
                    </tr>
                )
            })}
            </tbody>
    </table>
  )
}

export default Table