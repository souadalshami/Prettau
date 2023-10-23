
import  site_footer_two_shape_1  from '../../assets/images/shapes/site-footer-two-shape-1.png'
import site_footer_two_shape_2 from '../../assets/images/shapes/site-footer-two-shape-2.png'
import logo from '../../assets/images/logo/white.png'
import { t } from "i18next";
import { Trans } from 'react-i18next';



import { Link } from 'react-router-dom';

import WOW from 'wowjs';
import { useEffect } from 'react';


function PageFooter(){
      
      useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
  
    return(
        <footer className="site-footer-two site-footer-four">
            <div className="site-footer-two__shape-1 img-bounce">
                <img src={site_footer_two_shape_1} alt=""/>
            </div>
            <div className="site-footer-two__shape-2 zoominout">
                <img src={site_footer_two_shape_2} alt=""/>
            </div>
            <div className="container">
                <div className="site-footer-two__top">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget-two__column footer-widget-two__about">
                                <div className="footer-widget-two__logo">
                                    <Link to="/"><img src={logo} alt=""   /></Link>
                                </div>
                                <p className="footer-widget-two__about-text"><Trans i18nKey="footer-description"></Trans></p>
                                <div className="site-footer-two__social">
                                    <a href="https://www.facebook.com/prettau2011" target='_blank'><i className="fab fa-facebook"></i></a>
                                    <a href="https://www.youtube.com/channel/UCfTmPFfWHlAIOwnlLMa7igw" target='_blank'><i className="fab fa-youtube"></i></a>
                                    <a href="https://www.instagram.com/prettau_dental_lab/" target='_blank'><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget-two__column footer-widget-two__company">
                                <div className="footer-widget-two__title-box">
                                    <h3 className="footer-widget-two__title">{t('products')}</h3>
                                </div>
                                <ul className="footer-widget-two__company-list list-unstyled">
                                    <li><Link to="/premium">Premium</Link></li>
                                    <li><Link to="/premium">Titanium</Link></li>
                                    <li><Link to="/premium">Zircon</Link></li>
                                    <li><Link to="/tax-strategy.html">Laser Implant
                                        </Link></li>
                                    <li><a href="financial-advices.html">Peek Polymer
                                        </a></li>
                                    <li><a href="insurance-strategy.html">Acrylic</a></li>
                                    <li><a href="insurance-strategy.html">Ortho</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget-two__column footer-widget-two__company">
                                <div className="footer-widget-two__title-box">
                                    <h3 className="footer-widget-two__title">{t('footer-latest-blogs')}</h3>
                                </div>
                                <ul className="footer-widget-two__company-list list-unstyled">
                                    <li><Link to="/premium">V_max Multilayered 4D Case 1</Link></li>
                                    <li><Link to="/tax-strategy.html">Porcelain Fusedto 4D Case 1
                                        </Link></li>
                                    <li><a href="financial-advices.html">E_max Multilayered 4D Case 1
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget-two__column footer-widget-two__contact">
                                <div className="footer-widget-two__title-box">
                                    <h3 className="footer-widget-two__title">{t('footer-contact-info')}</h3>
                                </div>
                                <ul className="footer-widget-two__contact-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location-1"></span>
                                        </div>
                                        <p> {t('location')}</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-phone"></span>
                                        </div>
                                        <p><a dir='ltr' href="tel:+9647700372464">+964 (770) 037-2464</a></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-envelope"></span>
                                        </div>
                                        <p><a href="mailto:Prettau.ptrettau@gmail.com">Prettau.ptrettau@gmail.com</a></p>
                                    </li>
                                </ul>
                                <div className="footer-widget-two__work-time">
                                    <div className="footer-widget-two__title-box">
                                        <h3 className="footer-widget-two__title">{t('footer-working-time')}</h3>
                                    </div>
                                    <p className="footer-widget-two__work-time-text">{t('open_time')} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer-two__bottom">
                <div className="container">
                    <div className="site-footer-two__bottom-inner">
                        <p className="site-footer__bottom-text">{t('footer-Copyright')}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
     
}

export default PageFooter;