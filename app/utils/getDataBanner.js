const getDataBanner = async (typeBanner) => {

    const response = await fetch(`http://localhost:3000/api/typeBanners/${typeBanner}`, {cache: "no-store"});
    if (!response.ok) {
      console.error(`Failed to fetch data: ${response.status}`);
      return [];
    }
    return response.json();
};

export default getDataBanner;