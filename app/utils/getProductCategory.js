
const getProductCategory = async (category) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products/${category}`, {
        method: "GET",
        // body: JSON.stringify(value),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
    if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
    }
    
    return response.json();
}
export default getProductCategory;