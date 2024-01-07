import Banner from './components/Banner';
import PrincipalBanner from './components/PrincipalBanner';
import SectionBanner from './components/SectionBanner';
import Footer from './components/UI/Footer';
import { Suspense } from 'react';
import getDataBanner from './utils/getDataBanner';
import Loading from './components/UI/Loading';

const Home = async() => {
  
  const big1 = await getDataBanner('big-1')
  const big2 = await getDataBanner('big-2')
  const small1 = await getDataBanner('small-1')
  const small2 = await getDataBanner('small-2')

  return (
    <div style={{ background: '#F1F1F1' }}>
        <PrincipalBanner />
         <Suspense fallback={<Loading />}>
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
