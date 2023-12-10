
const getProductCategory = async (category) => {

    const url = process.env.VERCEL_URL || 'localhost:3000'

    const response = await fetch(`https://${url}/api/products/${category}`);
    if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
    }
    
    return response.json();
}
export default getProductCategory;