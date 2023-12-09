
const getProductCategory = async (category) => {

    // const url = process.env.VERCEL_URL ? `http://${process.env.VERCEL_URL}` : 'http://localhost:3000'

    const response = await fetch(`https://${process.env.VERCEL_URL}/api/products/${category}`);
    if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
    }
    
    return response.json();
}
export default getProductCategory;