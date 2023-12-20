"use client"
import React, {useState} from 'react'
import ButtonSmall from '@/app/components/UI/ButtonSmall'
import styles from './styles.module.scss'
// import { Switch } from "@tailwindcss/forms";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { CATEGORIES } from '@/app/const/optionsCategory'
import { doc, getDoc, setDoc, writeBatch } from "firebase/firestore";
import { db, storage } from '@/firebase/config'


// const createOrder = async (values, items) => {

//   const docsPromises = items.map((slug) => {
//     const docRef = doc(db, "products", slug)
//     return getDoc(docRef)
//   })

//   const docs = await Promise.all(docsPromises)
//   const batch = writeBatch(db)
//   const outOfStock = []

//   docs.forEach(doc => {
    
//     const { inStock } = doc.data()
//     const itemInCart = items.find(item => item.slug === doc.id)
//     if (itemInCart.quantity >= inStock) {
//       batch.update(doc.ref, { inStock: inStock - itemInCart.quantity })
//     } else {
//       outOfStock.push(itemInCart)
//     }

//   });

//   if(outOfStock.length > 0) return outOfStock

//   const order = {
//     client: values,
//     items: items.map(item => ({
//       title: item.title,
//       price: item.price,
//       quantity: item.quantity,
//       slug: item.slug
//     })),
//     date: new Date().toISOString(),
//   }

//   const docId = Timestamp.fromDate(new Date()).toMillis()
//   const orderRef = doc(db, "orders", String(docId))
//   await batch.commit()
//   await setDoc(orderRef, order)

//   return docId
  
// }

const createProduct = async (values, file) => {

  const storageRef = ref(storage, values.slug)
  const fileSnapshot = await uploadBytes(storageRef, file)
  const fileURL = await getDownloadURL( fileSnapshot.ref )

  const docRef = doc(db, "products", values.slug)
  
  return setDoc(docRef, {
      ...values,
      img: fileURL
  }).then(() => console.log("Producto creado exitosamente"))
}

const CreateForm = () => {

  const [file, setFile] = useState(null)
  const [values, setValues] = useState({
    slug: '',
    title: '',
    price: 0,
    stock: 0,
    category: '',
    description: '',
    banner: false,
    dataBanner: {}
  })


  const handleChange = (e) => {
    setValues({ 
      ...values, 
      [e.target.name]: e.target.value 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createProduct(values, file)
  }

  return (
    <div className={styles.contFormCreate}>
    <form onSubmit={handleSubmit}>
      <div className="pt-40">
        <div className="border-b border-gray-900/10 pb-8 pt-11">
          <h2 class="text-center font-semibold leading-7 text-gray-900 pb-5">Form add product</h2>
          <div class="mt-19 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="slug" class="block text-sm font-medium leading-6 text-gray-900">Slug</label>
              <div class="mt-2">
                <input 
                    type='text'
                    value={values.slug}
                    required 
                    className='block w-full border p-2 my-2' 
                    name='slug' 
                    onChange={handleChange} 
                />              
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
              <div class="mt-2">
                <input 
                    type='text'
                    value={values.title}
                    required 
                    className='block w-full border p-2 my-2' 
                    name='title' 
                    onChange={handleChange} 
                />              
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
              <div class="mt-2">
                <input 
                    type='number'
                    value={values.price}
                    required 
                    className='block w-full border p-2 my-2' 
                    name='price' 
                    onChange={handleChange} 
                />              
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="stock" class="block text-sm font-medium leading-6 text-gray-900">Stock</label>
              <div class="mt-2">
                <input 
                    type='number'
                    required 
                    className='block w-full border p-2 my-2' 
                    name='stock' 
                    value={values.stock}
                    onChange={handleChange} 
                />              
              </div>
            </div>
            <div class="sm:col-span-4">
              <label for="category" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
              <div className="mt-2">
                <select 
                  id="category" 
                  name="category"
                  autocomplete="category-name" 
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={handleChange}
                >
                  {CATEGORIES.map((item, index)=>{
                    return <option key={index}>{item.value}</option>
                  })}
                </select>
              </div>
            </div>
            <div class="sm:col-span-4">
              <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
              <div class="mt-2">
                <textarea 
                    type='text'
                    value={values.description}
                    required 
                    className='block w-full border p-2 my-2' 
                    name='description' 
                    onChange={handleChange} 
                />              
              </div>
            </div>
            <div class="sm:col-span-4">
              <label for="file" class="block text-sm font-medium leading-6 text-gray-900">image</label>
              <div class="mt-2">
                <input 
                  type="file" 
                  accept="image/*" 
                  allowMultiple={false}
                  required 
                  className='block w-full border p-2 my-2' 
                  onChange={(e) => setFile(e.target.files[0])}
                />               
              </div>
            </div>
          </div>
        </div>
      </div>
      <ButtonSmall type="submit" text="Add product" />
    </form>
    </div>
  )
}

export default CreateForm



