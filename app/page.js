import Banner from './components/Banner';
import PrincipalBanner from './components/PrincipalBanner';
import SectionBanner from './components/SectionBanner';
import Footer from './components/UI/Footer';
import { Suspense } from 'react';

const getDataBanner = async (typeBanner) => {

  try {
  
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/typeBanners/${typeBanner}`, {
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

const Home = async() => {
  
  const big1 = await getDataBanner('big-1')
  const big2 = await getDataBanner('big-2')
  const small1 = await getDataBanner('small-1')
  const small2 = await getDataBanner('small-2')

  return (
    <div style={{ background: '#F1F1F1' }}>
      <PrincipalBanner />
       <Suspense fallback={<>loading</>}>
          <SectionBanner products={small1} />
          <Banner products={big1} />
          <SectionBanner products={small2} /> 
          <Banner products={big2} />
        </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
