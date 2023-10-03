
import  site_footer_two_shape_1  from '../../assets/images/shapes/site-footer-two-shape-1.png'
import  footer_logo_2  from '../../assets/images/resources/footer-logo-2.png'
import site_footer_two_shape_2 from '../../assets/images/shapes/site-footer-two-shape-2.png'
import    footer_widget_two_portfolio_img_1  from '../../assets/images/project/footer-widget-two-portfolio-img-1.jpg';
import logo from '../../assets/images/logo/white.svg'



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
                                    <Link to="/"><img src={logo} alt=""  width={160}  /></Link>
                                </div>
                                <p className="footer-widget-two__about-text">Provides the integrated solutions for all Dental<br/> Prosthetics in parallel with the high <br/> technology around the world</p>
                                <div className="site-footer-two__social">
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget-two__column footer-widget-two__company">
                                <div className="footer-widget-two__title-box">
                                    <h3 className="footer-widget-two__title">Products</h3>
                                </div>
                                <ul className="footer-widget-two__company-list list-unstyled">
                                    <li><a href="business-planning.html">Premium</a></li>
                                    <li><a href="tax-strategy.html">Laser Implant
                                        </a></li>
                                    <li><a href="financial-advices.html">Peek Polymer
                                        </a></li>
                                    <li><a href="insurance-strategy.html">Acrylic</a></li>
                                    <li><a href="insurance-strategy.html">Ortho</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget-two__column footer-widget-two__contact">
                                <div className="footer-widget-two__title-box">
                                    <h3 className="footer-widget-two__title">Contact info</h3>
                                </div>
                                <ul className="footer-widget-two__contact-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location-1"></span>
                                        </div>
                                        <p> 60 th St, Sulimaniyah. Iraq</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-phone"></span>
                                        </div>
                                        <p><a href="tel:+9647700372464">+964 (770) 037-2464</a></p>
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
                                        <h3 className="footer-widget-two__title">Working Time</h3>
                                    </div>
                                    <p className="footer-widget-two__work-time-text">Always Open </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget-two__column footer-widget-two__portfolio">
                                <div className="footer-widget-two__title-box">
                                    <h3 className="footer-widget-two__title">Latest Blog</h3>
                                </div>
                                <ul className="footer-widget-two__portfolio-list list-unstyled clearfix">
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src={footer_widget_two_portfolio_img_1}
                                                alt=""/>
                                            <a href="#"><span className="fab fa-instagram"></span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src={footer_widget_two_portfolio_img_1}
                                                alt=""/>
                                            <a href="#"><span className="fab fa-instagram"></span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src={footer_widget_two_portfolio_img_1}
                                                alt=""/>
                                            <a href="#"><span className="fab fa-instagram"></span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src={footer_widget_two_portfolio_img_1}
                                                alt=""/>
                                            <a href="#"><span className="fab fa-instagram"></span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src={footer_widget_two_portfolio_img_1}
                                                alt=""/>
                                            <a href="#"><span className="fab fa-instagram"></span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src={footer_widget_two_portfolio_img_1}
                                                alt=""/>
                                            <a href="#"><span className="fab fa-instagram"></span></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer-two__bottom">
                <div className="container">
                    <div className="site-footer-two__bottom-inner">
                        <p className="site-footer__bottom-text">© Copyright bixola 2023. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
     
}

export default PageFooter;