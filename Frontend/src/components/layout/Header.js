
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const locales = {
    en: { title: 'English' },
    ar: { title: 'Arabic' },
  }; 


function Header(){
    const { t, i18n } = useTranslation();

return(
    
    <header className="main-header">
        <ul>

      </ul>
        <div className="main-header__top">
            <div className="container">
                <div className="main-header__top-inner">
                    <div className="main-header__top-left">
                        <ul className="list-unstyled main-header__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="text">
                                    <p>Mon to Fri: 9:00am to 6:00pm</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="text">
                                    <p><a href="mailto:help@company.com">Prettau.ptrettau@gmail.com</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-map-marker"></i>
                                </div>
                                <div className="text">
                                    <p>60 th St, Sulimaniyah. Iraq </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="main-header__top-right">
                        <div className="main-header__social">
                            <a href="https://www.youtube.com/channel/UCfTmPFfWHlAIOwnlLMa7igw"><i className="fab fa-youtube"></i></a>
                            <a href="https://www.facebook.com/Prettau-Lumineer-127597173974796/"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/prettau_dental_lab/?fbclid=IwAR21GZnx1SyeCBB14au0or9daS772BiSPfdqHsNPun8sCEiqqu_U9G54wwg"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav className="main-menu">
            <div className="main-menu__wrapper">
                <div className="container">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-menu__logo">
                            <a href="index.html"><img src="assets/images/resources/logo-1.png" alt=""/></a>
                        </div>
                        <div className="main-menu__main-menu-box">
                            <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                            <ul className="main-menu__list">
                                <li>
                                    <Link to="/">Home </Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Products</a>
                                    <ul className="sub-menu">
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="services-carousel.html">Services Carousel</a></li>
                                        <li><a href="business-audit.html">Business Audit</a></li>
                                        <li><a href="business-planning.html">Business Planning</a></li>
                                        <li><a href="financial-advices.html">Financial Advices</a></li>
                                        <li><a href="tax-strategy.html">Tax Strategy</a></li>
                                        <li><a href="insurance-strategy.html">Insurance Strategy</a></li>
                                        <li><a href="start-ups.html">Start Ups</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <Link to="/contact">News & Evants</Link>
                                </li>
                                <li>
                                    <Link to="/certificates">Certificates</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Video</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="main-menu__right">
                            <div className="main-menu__call">
                                <div className="main-menu__call-icon">
                                    <span className="icon-phone"></span>
                                </div>
                                <div className="main-menu__call-content">
                                    <p className="main-menu__call-sub-title">Need help?</p>
                                    <h5 className="main-menu__call-number"><a href="tel:+9647700372464">+964 770 037 2464 </a>
                                    </h5>
                                </div>
                            </div>
                            {/* <div className="main-menu__btn-box">
                                <Link to="/contact" className="main-menu__btn thm-btn">Get Consulting</Link>
                            </div> */}
                            <ul className="main-menu__list">
                                <li className="dropdown">
                                    <a href="#">English</a>
                                    <ul className="sub-menu">
                                        {Object.keys(locales).map((locale) => (
                                            <li key={locale}><a style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(locale)}>
                                                {locales[locale].title}
                                            </a></li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)
}
export default Header;