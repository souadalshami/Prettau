import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



import brand from '../../assets/images/brand/brand-1-1.png' ; 


function Brand(){

    return(
        <section className="brand-one">
            <div className="container">
                <div className="brand-one__inner">
                    <OwlCarousel className="brand-one__carousel thm-owl__carousel owl-theme owl-carousel"
                        items={3}
                        loop
                        dots
                        margin={30}
                        nav={false}
                        autoplay={6000}
                        autoplayTimeout={7000}
                        smartSpeed= {700}
                        
                        >
                        <div className="brand-one__single">
                            <div className="brand-one__img">
                                <img src={brand} alt=""/>
                            </div>
                        </div>
                
                    </OwlCarousel>

                </div>
            </div>
        </section>
    )

}

export default Brand;