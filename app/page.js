import Banner from './components/Banner'
import PrincipalBanner from './components/PrincipalBanner'
import Footer from './components/UI/Footer'
import SectionBanner from './components/SectionBanner'
import getDataBanner from './utils/getDataBanner'

const Home = async() => {
  
  const smallsBannerData = await getDataBanner('big-1');
  const bigBannerData = await getDataBanner('small-1');
  const smallsBannerData2 = await getDataBanner('small-2');
  const bigBannerData2 = await getDataBanner('big-2');

  return (
      <div style={{ background: '#F1F1F1' }}>
        <PrincipalBanner />  
        
          <SectionBanner products={smallsBannerData} />
          <Banner products={bigBannerData} />
          <SectionBanner products={smallsBannerData2} />
          <Banner products={bigBannerData2} />
        
        <Footer /> 
      </div>
  );
};
export  default Home