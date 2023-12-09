// import Banner from './components/Banner'
import PrincipalBanner from './components/PrincipalBanner'
import Footer from './components/UI/Footer'
import SectionBanner from './components/SectionBanner'
import getDataBanner from './utils/getDataBanner'

const Home = async () => { 

  // const bigBannerData = await getDataBanner('small-1');
  // const smallBannerData = await getDataBanner('big-1');
  const big2BannerData = await getDataBanner('small-2');
  // const small2BannerData = await getDataBanner('big-2');

  // console.log(big2BannerData)

  const bigBannerData = await getDataBanner('small-1');


  return (
      <div style={{ background: '#F1F1F1' }}>
        <PrincipalBanner />  
        
        <SectionBanner products={bigBannerData} />
        {/* <Banner products={smallBannerData} /> */}
        <SectionBanner products={big2BannerData} />
        {/* <Banner products={small2BannerData} /> */}
        
        <Footer />
      </div>
  );
};
export  default Home