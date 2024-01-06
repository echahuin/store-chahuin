import Link from "next/link"
import styles from "./stylesProduct.module.scss"
import getProductCategory from "@/app/utils/getProductCategory"

const ProductsLayout = async ({children, params}) => {

    const { category } = params
    const dataResponse = await getProductCategory(category)
    
    const subCategoriesFilter = [];
    dataResponse?.forEach((item) => {
      const { subCategory } = item
      if (!subCategoriesFilter.includes(subCategory)) {
        subCategoriesFilter.push(subCategory);
      }
    });


    return (
        <div className={`${styles.contDetail}`}>
          <div className={styles.listMenu}>
            <ul>
              <li>
                <Link  href={`/product/${category}/all`}>
                  Todos
                </Link>
              </li>
              {subCategoriesFilter?.map((item, index) =>{
                return (
                  <li key={index}>
                    <Link  href={`/product/${category}/${item}`}>
                      {item}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            {children}
          </div>
        </div>
    )
}

export default ProductsLayout