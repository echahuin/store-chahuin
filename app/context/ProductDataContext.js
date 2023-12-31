"use client"
import { createContext, useContext, useState } from "react";

const ProductDataContext = createContext();
export const useProductDataContext = () => useContext(ProductDataContext);

export const ProductDataProvider = ({ children }) => {

    const [products, setProductsData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    const setProducts = (products) => {
        
    }
    const handleFilterData = (value) => {
        
        setFilterData(value) }
    const clearProducts = () => {
    
        setProductsData([]);
    
    }

    return (
        <ProductDataContext.Provider value={{products, filterData, clearProducts, setProducts, handleFilterData}}>
            {children}
        </ProductDataContext.Provider>
    )
}