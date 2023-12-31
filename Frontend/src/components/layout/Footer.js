

import site_footer_shape_1   from '../../assets/images/shapes/site-footer-shape-1.png'
import site_footer_shape_2   from '../../assets/images/shapes/site-footer-shape-2.png'
import footer_logo from  '../../assets/images/logo/black.png'
import { Link } from 'react-router-dom';

import WOW from 'wowjs';
import { useEffect } from 'react'
import { t } from "i18next";
import { Trans } from 'react-i18next';

function Footer(){
    useEffect(() => { 
        new WOW.WOW({ live: false
        }).init(); }, [])
    return(
        <footer className="site-footer">
            <div className="site-footer__shape-1 img-bounce">
                <img src={site_footer_shape_1} alt=""/>
            </div>
            <div className="site-footer__shape-2 float-bob-y">
                <img src={site_footer_shape_2} alt=""/>
            </div>
            <div className="container">
                <div className="site-footer__top">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__logo">
                                    <Link to="/"><img src={footer_logo} alt=""/></Link>
                                </div> 
                                <p className="footer-widget__about-text"><Trans i18nKey="footer-description"></Trans></p>
                                <div className="site-footer__social">
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__column footer-widget__company">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">{t('footer-products')}</h3>
                                </div>
                                <ul className="footer-widget__company-list list-unstyled">
                                    <li><Link to="/premium">Premium</Link></li>
                                    <li><a href="tax-strategy.html">Titanium
                                        </a></li>
                                        <li><a href="tax-strategy.html">Zircon
                                        </a></li>
                                    <li><a href="financial-advices.html">Laser Implant
                                        </a></li>
                                    <li><a href="insurance-strategy.html">Peek Polymer</a></li>
                                    <li><a href="insurance-strategy.html">Acrylic</a></li>
                                    <li><a href="insurance-strategy.html">Ortho</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__column footer-widget__newsletter">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">{t('footer-latest-blog')}</h3>
                                </div>
                                <ul className="footer-widget__company-list list-unstyled">
                                    <li><Link to="/productdetails">V_max Multilayered 4D Case 1</Link></li>
                                    <li><Link to="/productdetails">Porcelain Fusedto 4D Case 1
                                        </Link></li>
                                        <li><Link to="/productdetails">E_max Multilayered 4D Case 1
                                        </Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__column footer-widget__contact">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">{t('footer-questions')}</h3>
                                </div>
                                <ul className="footer-widget__contact-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location-1"></span>
                                        </div>
                                        <div className="content">
                                            <h3>{t('footer-questions-location')}</h3>
                                            <p>{t('location')}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-phone"></span>
                                        </div>
                                        <div className="content">
                                            <h3>{t('footer-questions-number')}</h3>
                                            <p><a dir='ltr' href="tel:+9647702464">+964 (770) 037-2464</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-envelope"></span>
                                        </div>
                                        <div className="content">
                                            <h3>{t('footer-questions-mail')}</h3>
                                            <p><a href="mailto:Prettau.ptrettau@gmail.com">Prettau.ptrettau@gmail.com</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">{t('footer-Copyright')}</p>
                    </div>
                </div>
            </div>
        </footer>
    )

}   
export default Footer;