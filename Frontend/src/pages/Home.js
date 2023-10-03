
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer';
import MainSlider from '../components/Home/MainSlider';
import Features from '../components/Home/Features';
import AboutUs from '../components/Home/AboutUs';
import Blogs from '../components/Home/Blogs';
import { useDocumentTitle } from '../setDocumentTitle';
import Brand from '../components/Home/Brand';
import Products from '../components/Home/Products';

function Home(){
  useDocumentTitle("Home || Prettau Dental Lab");

  return(
    <div>
        <Header/>
        <MainSlider/>
        <Features/>
        <AboutUs/>
        <Blogs/>
        <Brand/>
        {/* <Products/> */}
        <Footer/>
        
    </div>
  )
}
export default Home;