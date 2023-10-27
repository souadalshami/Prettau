
import services_one_shape_3 from '../../assets/images/shapes/services-one-shape-3.png'
import services_one_shape_4 from '../../assets/images/shapes/services-one-shape-4.png'
import services_one_shape_1 from '../../assets/images/shapes/services-one-shape-1.png'
import services_one_shape_2 from '../../assets/images/shapes/services-one-shape-2.png'
import background from '../../assets/images/services/services-one-hover-img-black.png'
import Titanium from '../../assets/images/services/Titanium.png'
import implant from '../../assets/images/services/implant.png'
import polymer from '../../assets/images/services/polymer.png'
import other from '../../assets/images/services/other.png'
import WOW from 'wowjs';
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { t } from "i18next";
import { Trans } from 'react-i18next';

function Products(){
    useEffect(() => { 
        new WOW.WOW({ live: false
        }).init(); }, [])

    return(
        <section class="services-one">
            <div class="services-one__shape-3 zoominout">
                <img src={services_one_shape_3} alt=""/>
            </div>
            <div class="services-one__shape-4 shape-mover">
                <img src={services_one_shape_4} alt=""/>
            </div>
            <div class="container">
                <div class="section-title text-center">
                    <div class="section-title__tagline-box">
                        <p class="section-title__tagline"> {t('home-Products-section-name')}</p>
                    </div>
                    <h2 class="section-title__title"> 
                    <Trans i18nKey="home-Products-title"></Trans>
                    </h2>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div class="services-one__single">
                            <div class="services-one__single-hover-bg"
                                style={{ backgroundImage: `url(${background})`}}></div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><Link to="/premium">Premium</Link></h3>
                                <p class="services-one__text">{t('home-Products-Premium')}</p>
                                <div class="services-one__read-more">
                                    <Link to="/premium">{t('home-Products-button')}<span class="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div class="services-one__single">
                            <div class="services-one__single-hover-bg"
                            style={{ backgroundImage: `url(${Titanium})` }}></div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><Link to="/premium">Titanium</Link></h3>
                                <p class="services-one__text">{t('home-Products-Titanium')}</p>
                                <div class="services-one__read-more">
                                    <Link to="/premium">{t('home-Products-button')}<span class="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                        <div class="services-one__single">
                            <div class="services-one__single-hover-bg"
                                style={{ backgroundImage: `url(${other})` }}></div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><Link to="/premium">Zircon</Link>
                                </h3>
                                <p class="services-one__text">{t('home-Products-Zircon')}</p>
                                <div class="services-one__read-more">
                                    <Link to="/premium">{t('home-Products-button')}<span
                                            class="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                        <div class="services-one__single">
                            <div class="services-one__single-hover-bg"
                                style={{ backgroundImage: `url(${implant})` }}></div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><Link to="/premium">Laser Implant</Link>
                                </h3>
                                <p class="services-one__text">{t('home-Products-Laser-Implant')}</p>
                                <div class="services-one__read-more">
                                    <Link to="/premium">{t('home-Products-button')}<span
                                            class="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div class="services-one__single">
                            <div class="services-one__single-hover-bg"
                            style={{ backgroundImage: `url(${polymer})` }}></div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><Link to="/premium">Peek Polymer</Link></h3>
                                <p class="services-one__text">{t('home-Products-Peek-Polymer')}</p>
                                <div class="services-one__read-more">
                                    <Link to="/premium">{t('home-Products-button')}<span class="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div class="services-one__single">
                            <div class="services-one__single-hover-bg"
                                style={{ backgroundImage: `url(${other})` }}></div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><Link to="/premium">Acrylic</Link>
                                </h3>
                                <p class="services-one__text">{t('home-Products-Acrylic')}</p>
                                <div class="services-one__read-more">
                                    <Link to="/premium">{t('home-Products-button')}<span class="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Products;