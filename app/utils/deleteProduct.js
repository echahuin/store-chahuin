

const deleteProduct = async (value) => {
console.log(value)

    const response = await fetch(`${process.env.VERCEL_URL}/api/products/delete`, {
        method: 'DELETE',
        body: JSON.stringify(value),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    if (!response.ok) {
      console.error(`Failed to fetch data: ${response.status}`);
      return [];
    }
};

export default deleteProduct;

