
const getProductCategory = async (category) => {

    const response = await fetch(`http://localhost:3000/api/products/${category}`);
    if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
    }
    return response.json();
}
export default getProductCategory;