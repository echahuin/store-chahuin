
const getProductCategory = async (params) => {

    const {category, id} = params

    const response = await fetch(`http://${process.env.VERCEL_URL}/api/products/${category}/description/${id}`);
    if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
    }
    return response.json();
}
export default getProductCategory;