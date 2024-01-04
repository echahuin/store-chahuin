const addProduct = async (values) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/addProduct`,{
        method: "POST",
        body: JSON.stringify({values}),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
    }

  }
  
  export default addProduct;