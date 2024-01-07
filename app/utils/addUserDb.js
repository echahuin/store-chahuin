

const addUserDb = async (value) => {

  // {
  //   displayName: 'rafa',
  //   email: 'rafa@gmail.com',
  //   password: 'admin1234',
  //   photoURL: 
  //     'https://firebasestorage.googleapis.com/v0/b/store-chahuin.appspot.com/o/rafa%40gmail.com?alt=media&token=0229b2c7-c3fc-4550-a3d2-d0cb53a13e92',
  //   phoneNumber: '1234123'
  // }

console.log(value)

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