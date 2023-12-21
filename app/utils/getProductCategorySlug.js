
const getProductCategorySlug = async (params) => {

    const { slug } = params

    const response = await fetch(`http://localhost:3000/api/products/description/${slug}`, {cache: "no-store"});
    if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
    }

    return response.json();
}
export default getProductCategorySlug