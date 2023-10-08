import Fancybox from "../Fancybox.js"; 
 import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import portfolio_1_1 from '../../assets/images/project/portfolio-1-1.jpg'
import shapeone from "../../assets/images/shapes/portfolio-one-shape-1.png"
import shapetwo from "../../assets/images/shapes/portfolio-one-shape-2.png"
    const options = {
    "loop": true,
    "autoplay": true,
    "margin": 30,
    "nav": true,
    "dots": false,
    "smartSpeed": 500,
    "autoplayTimeout": 10000,
    "navText": ["<span className=\"icon-right-arrow\"></span>","<span className=\"icon-right-arrow1\"></span>"],
    "responsive": {
        "0": {
            "items": 1
        },
        "768": {
            "items": 2
        },
        "992": {
            "items": 3
        },
        "1200": {
            "items": 4
        }
    }
}


function EvantsSection(){

    return(
        <section class="portfolio-one" >
            <div class="portfolio-one__shape-1 float-bob-x">
                <img src={shapeone} alt="" />
            </div>
            <div class="portfolio-one__shape-2 rotate-me">
                <img src={shapetwo } alt="" />
            </div>
            <div class="container">
                <div className="row">
                    <div class="" data-wow-delay="100ms">
                        <OwlCarousel class="team-carousel thm-owl__carousel owl-theme owl-carousel carousel-dot-style" {...options}>
                            <div class="portfolio-one__single">
                                <div class="portfolio-one__img-box">
                                    <div class="portfolio-one__img">
                                        <img src={portfolio_1_1} alt="" />
                                    </div>
                                    <div class="portfolio-one__content">
                                        <p class="portfolio-one__sub-title">Business Audit</p>
                                        <h3 class="portfolio-one__title">
                                        <a href="portfolio-details.html">Printing And Industry</a>
                                        </h3>
                                    </div>
                                    <div class="portfolio-one__arrow">
                                         <Fancybox>
                                            <a  data-fancybox="gallery" href={portfolio_1_1} class="img-popup" ><span class="icon-top-right-1"></span></a>
                                         </Fancybox>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )



}
export default EvantsSection;
