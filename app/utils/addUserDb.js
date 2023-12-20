

const addUserDb = async (value) => {

      const response = await fetch(`http://localhost:3000/api/users`, {
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