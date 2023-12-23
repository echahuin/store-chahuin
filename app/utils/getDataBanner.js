// const getDataBanner = async (typeBanner) => {

//   // const url = process.env.VERCEL_URL || 'localhost:3000'

//     const response = await fetch(`http://localhost:3000/api/typeBanners/${typeBanner}`, {cache: "no-store"});
//     if (!response.ok) {
//       console.error(`Failed to fetch data: ${response.status}`);
//       return [];
//     }
//     return response.json();
// };

// export default getDataBanner;

const getDataBanner = async (typeBanner) => {
  try {
    const url = process.env.VERCEL_URL || 'localhost:3000'

    const response = await fetch(`https://${url}/api/typeBanners/${typeBanner}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching banner data:', error);
    // Implementar estrategia de fallback o mostrar mensaje de error
    return error; // O null, o un mensaje de error, o un placeholder, según tu preferencia
  }
};

export default getDataBanner;
