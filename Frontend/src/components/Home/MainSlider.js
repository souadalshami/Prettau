
import slider_2 from '../../assets/images/shapes/main-slider-shape-2.png'
import background   from '../../assets/images/backgrounds/slider-1-1.jpg'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from 'react-router-dom';
import Fancybox from "../Fancybox.js"; 
import { t } from "i18next";
import { Trans } from 'react-i18next';

function MainSlider(){

    return(
        <section className="main-slider">
            <OwlCarousel className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel"
                items={1}
                
                dots
                margin={0}
                nav={false}
                autoplay
                autoplayTimeout={7000}
                smartSpeed= {1000}
                
                animateOut="slideOutDown"
                animateIn="fadeIn"
                >
                <div className="item main-slider__slide-1">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: `url(${background})` }}>
                    </div>
                    <div className="main-slider__shape-2 float-bob-x">
                        <img src={slider_2} alt=""/>
                    </div>
                    <div className="container">
                        <div className="main-slider__content">
                            <h2 className="main-slider__title">{t('home-mainSlider-title-row-one')} <br/>{t('home-mainSlider-title-row-two')}</h2>
                            <p className="main-slider__text"><Trans i18nKey="home-mainSlider-description"></Trans></p>
                            <div className="main-slider__btn-and-video-box">
                                <div className="main-slider__btn-box">
                                    <Link to="/contact" className="thm-btn main-slider__btn">{t('home-mainSlider-button')}</Link>
                                </div>
                                <div className="main-slider__video-link">
                              <Fancybox>
                                <a data-fancybox href="https://youtu.be/tiSiJ-8y6J8?si=CShpxEGefi84qJ-U" className="video-popup">
                                        <div className="main-slider__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                 </a>
                                    <h4 className="main-slider__video-text">{t('home-mainSlider-video-button')}</h4>
                                </Fancybox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </OwlCarousel>
        </section>
        
    )
}


export default MainSlider;