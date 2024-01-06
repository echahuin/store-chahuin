
const getProductCategory = async (category_subCategory) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products/subCategory/${category_subCategory}`, {
      next: {
       revalidate: 0,
      }
      });
    if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
    }
    
    return response.json();
}
export default getProductCategory;