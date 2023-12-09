const getDataBanner = async (typeBanner) => {

    const response = await fetch(`http://${process.env.VERCEL_URL}/api/typeBanners/${typeBanner}`);
    if (!response.ok) {
      console.error(`Failed to fetch data: ${response.status}`);
      return [];
    }
    return response.json();
};

export default getDataBanner;