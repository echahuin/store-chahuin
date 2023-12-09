const getDataBanner = async (typeBanner) => {

  
  const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${url}/api/typeBanners/${typeBanner}`);
    if (!response.ok) {
      console.error(`Failed to fetch data: ${response.status}`);
      return [];
    }
    return response.json();
};

export default getDataBanner;