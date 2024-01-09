"use client"
import React, {useState} from 'react'
import ButtonSmall from '@/app/components/UI/ButtonSmall'
import { CATEGORIES } from '@/app/const/optionsCategory'
import { useRouter } from 'next/navigation';
import addProduct from '@/app/utils/admin/addProduct';
import uploadImage from '@/app/utils/admin/image/uploadImage';
import styles from './styles.module.scss'


const Select = ({ id, name, value, onChange }) => {
  return (
    <select  
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
      id={id} 
      name={name} 
      value={value}
      required
      onChange={onChange}>
      {CATEGORIES.map((option, index) => (
        <option key={index} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

const CreateForm = ({data, editForm = false}) => {

const router = useRouter()

  const [file, setFile] = useState(null)
  const [values, setValues] = useState({
    slug: data?.slug ? data?.slug : '',
    title: data?.title ? data?.title : '',
    price: data?.price ? data?.price : 0,
    stock: data?.stock ? data?.stock : 0,
    category: data?.category ? data?.category : '',
    subCategory: data?.subCategory ? data?.subCategory : '',
    description: data?.description ? data?.description : '',
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
    if (!editForm) {
      const urlImg = await uploadImage(file, values.slug).then((urlImg) => urlImg) 
      if( urlImg){
        await addProduct({...values, img: urlImg}, file).then(() => router.push('/admin'))
      }
    }
    if(editForm){
      if(file === null){
        await addProduct({...values, img: data.img}, file).then(() => router.push('/admin'))
      }else{
        const urlImg = await uploadImage(file, values.slug).then((urlImg) => urlImg) 
        if( urlImg){
          await addProduct({...values, img: urlImg}, file).then(() => router.push('/admin'))
        } 
      }
    } 
    
  }

  return (

    <form onSubmit={handleSubmit}>
    <div>
      <div className="border-b border-gray-900/10  p-5 pb-8 pt-11">
      <h2 className="text-center font-semibold leading-7 text-gray-900 pb-5">Datos - producto</h2>
      <div className="mt-19 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label for="slug" className="block text-sm font-medium leading-6 text-gray-900">Slug</label>
              <div className="mt-2">
                <input 
                    type='text'
                    placeholder='Categoy-subcategory-product-id'
                    value={values.slug}
                    required 
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name='slug' 
                    onChange={handleChange} 
                />              
              </div>
            </div>
            <div className="sm:col-span-3">
               <label for="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
               <div className="mt-2">
                 <input 
                    type='text'
                    placeholder='Titulo producto'
                    value={values.title}
                    required 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    name='title' 
                    onChange={handleChange} 
                />              
              </div>
            </div>

            <div className="sm:col-span-3">
              <label for="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
              <div className="mt-2">
                <input 
                    type='number'
                    value={values.price}
                    required 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    name='price' 
                    onChange={handleChange} 
                />              
              </div>
            </div>

            <div className="sm:col-span-3">
              <label for="stock" className="block text-sm font-medium leading-6 text-gray-900">Stock</label>
              <div className="mt-2">
                <input 
                    type='number'
                    required 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name='stock' 
                    value={values.stock}
                    onChange={handleChange} 
                />              
              </div>
            </div>
            <div className="sm:col-span-4">
              <label for="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
              <div className="mt-2">
              <Select  
                  id="category" 
                  name="category" 
                  value={values.category} 
                  onChange={handleChange} />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label for="subCategory" className="block text-sm font-medium leading-6 text-gray-900">subCategory</label>
              <div className="mt-2">
                <input 
                    type='text'
                    placeholder='dama, hombre, nene, nena'
                    value={values.subCategory}
                    required 
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name='subCategory' 
                    onChange={handleChange} 
                />              
              </div>
            </div>
            <div className="sm:col-span-4">
              <label for="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
              <div className="mt-2">
                <textarea 
                    type='text'
                    placeholder='Este producto es una opción más abrigada que es perfecta para el cl... '
                    value={values.description}
                    required 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                    name='description' 
                    onChange={handleChange} 
                />              
              </div>
            </div>
            <div className="sm:col-span-4">
               <label for="file" className="block text-sm font-medium leading-6 text-gray-900">image</label>
               <div className="mt-2">
                 <input 
                  type="file" 
                  accept="image/*" 
                  allowMultiple={false}
                  required={editForm ? false : true}
                  className={styles.fotoPerfilInput}
                  onChange={(e) => setFile(e.target.files[0])}
                />               
              </div>
            </div>
      </div>
    </div>
  </div>
  <div className={styles.alignButton} >
    <div className={styles.widthButton}>
      <ButtonSmall type="submit" text={editForm ? "Edit":"Create"} />
    </div>
  </div>
</form>
  )
}

export default CreateForm



