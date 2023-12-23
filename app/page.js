// import Banner from './components/Banner'
// import PrincipalBanner from './components/PrincipalBanner'
// import Footer from './components/UI/Footer'
// import SectionBanner from './components/SectionBanner'
// import getDataBanner from './utils/getDataBanner'


// const getServerSideProps = async () => {
//   const data = await getDataBanner('big-1');
//   return {
//     props: {
//       data,
//     },
//   };
// };

// const Home = async({data}) => {

//   return (
//       <div style={{ background: '#F1F1F1' }}>
//         <PrincipalBanner />  
//           <SectionBanner products={data} />
//           {/* <Banner products={bigBannerData} />
//           <SectionBanner products={smallsBannerData2} />
//           <Banner products={bigBannerData2} /> */}
//         <Footer /> 
//       </div>
//   );
// };

// export  default Home


import Banner from './components/Banner';
import PrincipalBanner from './components/PrincipalBanner';
import Footer from './components/UI/Footer';
import SectionBanner from './components/SectionBanner';
import { Suspense } from 'react';
// import getDataBanner from './utils/getDataBanner';

// export async function getData() {
//   const [data, error] = await Promise.all([
//     // getDataBanner('big-1'),
//     getDataBanner('small-1'),
//     // getDataBanner('small-2'),
//     // getDataBanner('big-2'),
//   ]);
  
//   console.log(data)
//   console.log(error)

//   if (error) {
//     // Manejar el error de forma adecuada, por ejemplo, mostrando un mensaje de error
//     return {
//       props: {
//         error: true,
//       },
//     };
//   }

//   return {
//        data
//       }
// }
const getDataBanner = async (typeBanner) => {
  try {
    // const url =   || 'localhost:3000'
    const VERCEL_URL = process.env.VERCEL_URL;
console.log('VERCEL_URL', VERCEL_URL)

    const response = await fetch(`http://${process.env.VERCEL_URL}/api/typeBanners/${typeBanner}`, {
      cache: "no-store",
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
