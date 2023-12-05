
const getProductCategory = async (params) => {

    const {category, id} = params

    const response = await fetch(`http://localhost:3000/api/products/${category}/description/${id}`, {cache: "no-store"});
    if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
    }
    return response.json();
}
export default getProductCategory;