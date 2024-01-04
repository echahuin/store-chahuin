
const getProductCategorySlug = async (params) => {

    const { slug } = params

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products/description/${slug}`, {
         next: {
          revalidate: 0,
         },
        method: "GET",
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
export default getProductCategorySlug