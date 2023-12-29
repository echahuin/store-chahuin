import Banner from './components/Banner';
import PrincipalBanner from './components/PrincipalBanner';
import Footer from './components/UI/Footer';
import { Suspense } from 'react';

const getDataBanner = async (typeBanner) => {

  try {
  
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/typeBanners/${typeBanner}`, {
      method: "GET",
      // body: JSON.stringify(value),
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

const Home = async() => {
  
  const data = await getDataBanner('big-1')
  console.log(data)

  return (
    <div style={{ background: '#F1F1F1' }}>
      <PrincipalBanner />
        {/* <SectionBanner products={data.smallsBannerData} /> */}
        <Suspense fallback={<>loading</>}>
          <Banner products={data} />
        </Suspense>
        {/* <SectionBanner products={data.smallsBannerData2} />
        <Banner products={data.bigBannerData2} /> */}
      <Footer />
    </div>
  );
};

export default Home;
