import Banner from './components/Banner'
import PrincipalBanner from './components/PrincipalBanner'
import Footer from './components/Footer'
import SectionBanner from './components/SectionBanner'
import data from './data.json'

export default function Home() {

  const getDataBanner = (typeBanner) => {
    return data.dt.filter((item) => item.typeBanner === typeBanner)
  }

  return (
    <>
      <div style={{background: "#F1F1F1"}}>
          <PrincipalBanner />

          <SectionBanner products={getDataBanner("small-1")} />
          <Banner products={getDataBanner("big-1")}  />      
          <SectionBanner  products={getDataBanner("small-2")} />
          <Banner products={getDataBanner("big-2")} />

        <Footer/>
      </div>
    </>  
 )
}