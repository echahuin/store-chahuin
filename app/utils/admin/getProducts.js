
const getProducts = async () => {

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products/all`, {
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
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return error;
    }
  };
  
  export default getProducts;
  