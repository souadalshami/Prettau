import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import testimonial_1 from '../../assets/images/testimonial/testimonial-1-1.jpg'
import { t } from "i18next";
import { Trans } from 'react-i18next';

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
            "items": 3
        }
    }
}
function Testimonial(){

    return(
        <section className="testimonial-two testimonial-four">
            <div className="container">
                <h3 className="section__title-two">{t('about-testimonial-title')}</h3>
                <div className="testimonial-two__bottom">
                    <OwlCarousel classNameName="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel " {...options}>
                        <div className="hight">
                         <div className="testimonial-two__single">
                          <div className="testimonial-two__client-img">
                                
                                <img src={testimonial_1} alt=""/>
                            </div>
                            <div className="testimonial-two__client-info">
                                <h3>{t('about-testimonial-name')}</h3>
                                <p>{t('about-testimonial-name-description')}</p>
                            </div>
                            <p className="testimonial-two__text">{t('about-testimonial-description')}</p>
                            <div className="testimonial-two__ratting">
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                            </div>
                        </div>
                    </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>

    )

}
export default Testimonial;