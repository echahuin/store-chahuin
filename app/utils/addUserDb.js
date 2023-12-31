

const addUserDb = async (value) => {

      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users`, {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
      }
  };
  
  export default addUserDb;