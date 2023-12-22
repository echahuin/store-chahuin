

const deleteProduct = async (value) => {
console.log(value)

    const response = await fetch('http://localhost:3000/api/products/delete', {
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

