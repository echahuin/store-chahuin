
const getProductCategory = async (params) => {

    const {category, id} = params

    // const url = process.env.VERCEL_URL ? `http://${process.env.VERCEL_URL}` : 'http://localhost:3000'

    const response = await fetch(`https://${process.env.VERCEL_URL}/api/products/${category}/description/${id}`);
    if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
    }
    return response.json();
}
export default getProductCategory;