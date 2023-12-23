

const addUserDb = async (value) => {

      const response = await fetch(`http://${process.env.VERCEL_URL}/api/users`, {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
      }
  };
  
  export default addUserDb;