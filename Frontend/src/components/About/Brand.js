import zirkon from '../../assets/images/brand/zirkon.jpg'
import emax from '../../assets/images/brand/emax.jpg'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Brand(){

    return(
        <section class="brand-one brand-three">
            <div class="container">
                <div class="brand-one__inner">
                    <OwlCarousel className="brand-one__carousel thm-owl__carousel owl-theme owl-carousel"
                        items={3}
                        loop
                        dots={false}
                        margin={30}
                        nav={false}
                        // autoplay
                        autoplayTimeout={6000}
                        smartSpeed= {700}
                        
                        animateOut="slideOutDown"
                        animateIn="fadeIn"
                        >
                        <div class="brand-one__single">
                            <div class="brand-one__img">
                                <img src={zirkon} alt=""/>
                            </div>
                        </div>
                        <div class="brand-one__single">
                            <div class="brand-one__img">
                                <img src={emax} alt=""/>
                            </div>
                        </div>
                        <div class="brand-one__single">
                            <div class="brand-one__img">
                                <img src={zirkon} alt=""/>
                            </div>
                        </div>
                        <div class="brand-one__single">
                            <div class="brand-one__img">
                                <img src={zirkon} alt=""/>
                            </div>
                        </div>
                        <div class="brand-one__single">
                            <div class="brand-one__img">
                                <img src={zirkon} alt=""/>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )



}
export default Brand;