"use client"
import { createContext, useContext, useState } from "react";

const ProductDataContext = createContext();
export const useProductDataContext = () => useContext(ProductDataContext);

export const ProductDataProvider = ({ children }) => {

    const [products, setProductsData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    const setProducts = (products) => {
    
        // setProductsData(products)
        // setFilterData(products)
        
    }
    const handleFilterData = (value) => {
        
        setFilterData(value)
        // value?.priceMax && setFilterData(products.filter((item) => item.price <= value?.priceMax));
        // value?.search && setFilterData(products.filter((item) => item.title.toLowerCase().includes(value?.search.toLowerCase())));
    }
    const clearProducts = () => {
    
        setProductsData([]);
    
    }

    return (
        <ProductDataContext.Provider value={{products, filterData, clearProducts, setProducts, handleFilterData}}>
            {children}
        </ProductDataContext.Provider>
    )
}