const getDataBanner = async (typeBanner) => {

  try {
  
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/typeBanners/${typeBanner}`, {
      // cache: "no-store",
      next: {
        revalidate: 0,
       },
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching banner data:', error);
    return error;
  }
};

export default getDataBanner;
