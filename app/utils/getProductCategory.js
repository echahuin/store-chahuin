
const getProductCategory = async (category) => {

    const response = await fetch(`http://${process.env.VERCEL_URL}/api/products/${category}`, {cache: "no-store"});
    if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
    }
    
    return response.json();
}
export default getProductCategory;