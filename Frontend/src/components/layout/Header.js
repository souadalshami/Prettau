
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom"
import gold_logo from '../../assets/images/logo/gold.png';

const locales = {
    en: { title: 'English' },
    ar: { title: 'Arabic' },
  }; 


function Header(){
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { t, i18n } = useTranslation();

    function refreshPage(locale){
        window.location.reload()
        i18n.changeLanguage(locale)
    }

    const [color,setColor] = useState(false);
    const changeColor = ()=>{
        if(window.scrollY >= 1){
            setColor(true)

        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor)
return(
    <>
        <header className="main-header">
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
                                        <p>{t('open_time')}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="text">
                                        <p><a href="mailto:Prettau.ptrettau@gmail.com">Prettau.ptrettau@gmail.com</a>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-map-marker"></i>
                                    </div>
                                    <div className="text">
                                        <p>{t('location')} </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="main-header__top-right">
                            <div className="main-header__social">
                                <a href="https://www.youtube.com/channel/UCfTmPFfWHlAIOwnlLMa7igw" target="_blank"><i className="fab fa-youtube"></i></a>
                                <a href="https://www.facebook.com/Prettau-Lumineer-127597173974796/" target="_blank"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/prettau_dental_lab/?fbclid=IwAR21GZnx1SyeCBB14au0or9daS772BiSPfdqHsNPun8sCEiqqu_U9G54wwg" target="_blank"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={color ? "header-bg main-menu": "header main-menu" }>
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__logo">
                                <Link to="/"><img src={gold_logo} alt="" /></Link>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <a href="#" className="mobile-nav__toggler"  onClick={() => setNavbarOpen((prev) => !prev)}><i className="fa fa-bars"></i></a>
                                <ul className="main-menu__list" >
                                    <li> 
                                        <NavLink exact="true" to="/">{t('home')}</NavLink>    
                                    </li> 
                                    <li>
                                        <NavLink  exact="true" to="/about">{t('about')}</NavLink>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">{t('products')}</a>
                                        <ul className="sub-menu">
                                            <li><Link to="/premium">Premium</Link></li>
                                            <li><Link to="/premium">Titanium</Link></li>
                                            <li><Link to="/premium">Zircon</Link></li>
                                            <li><Link to="/premium">Laser Implant</Link></li>
                                            <li><Link to="/premium">Peek Polymer</Link></li>
                                            <li><Link to="/premium">Acrylic</Link></li>
                                            <li><Link to="/premium">Ortho</Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <NavLink exact="true" to="/evants">{t('events')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact="true" to="/certificates">{t('Certificates')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact="true" to="/video">{t('Videos')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact="true" to="/contact">{t('contact')}</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-menu__right">
                                <div className="language">
                                    <ul className="main-menu__list">
                                        <li>
                                            <a href="#">{i18n.resolvedLanguage.toUpperCase()}</a>
                                            <ul className="sub-menu">
                                                {Object.keys(locales).map((locale) => (
                                                    <li key={locale}><a style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }} type="submit" 
                                                    onClick={  () =>  refreshPage(locale) }>
                                                    {locales[locale].title}
                                            </a>
                                            </li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="main-menu__call">
                                    <div className="main-menu__call-icon">
                                        <span className="icon-phone"></span>
                                    </div>
                                    <div className="main-menu__call-content">
                                        <p className="main-menu__call-sub-title">{t('need_help')}</p>
                                        <h5 dir='ltr' className="main-menu__call-number"><a dir="ltr" href="tel:+9647700372464">+964 770 037 2464 </a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content"></div>
        </div>

        <div className={`mobile-nav__wrapper${navbarOpen ? ' expanded' : ''}`}>
            <div class="mobile-nav__overlay mobile-nav__toggler"></div>
            <div class="mobile-nav__content">
                <span class="mobile-nav__close mobile-nav__toggler"  onClick={() => setNavbarOpen(false)}><i class="fa fa-times"></i></span>
                <div class="logo-box">
                    <a href="/" aria-label="logo image"><img src={gold_logo} alt="" /></a>
                </div>
                <div class="mobile-nav__container">
                    <ul className="main-menu__list">
                        <li class="dropdown current megamenu">
                            <Link to="/">{t('home')}</Link>
                        </li>
                        <li class="dropdown current megamenu">
                            <Link to="/about">{t('about')} </Link>
                        </li>
                        <li class="dropdown current megamenu">
                            <a href="#">{t('Products')}
                                <button aria-label="dropdown toggler"><i class="fa fa-angle-down"></i></button>
                             </a>
                             <ul class="sub-menu d-none">
                                <li><a href="services.html">Services</a></li>
                                <li><a href="services-carousel.html">Services Carousel</a></li>
                                <li><a href="business-audit.html">Business Audit</a></li>
                            </ul>
                        </li> 
                        <li class="dropdown current megamenu">
                            <Link to="/events">{t('events')}</Link>
                        </li>
                        <li class="dropdown current megamenu">
                            <Link to="/certificates">{t('Certificates')} </Link>
                        </li>    
                        <li class="dropdown current megamenu">
                            <Link to="/video">{t('Videos')}</Link>
                        </li>    
                        <li class="dropdown current megamenu">
                            <Link to="/contact">{t('contact')}</Link>
                        </li>    
                    </ul>
                </div>

                <ul class="mobile-nav__contact list-unstyled">
                    <li>
                        <i class="fa fa-envelope"></i>
                        <a dir="ltr" href="mailto:Prettau.ptrettau@gmail.com">Prettau.ptrettau@gmail.com</a>
                    </li>
                    <li>
                        <i class="fa fa-phone-alt"></i>
                        <a dir="ltr" href="tel:666-888-0000">+964 770 037 2464</a>
                    </li>
                </ul>
                <div class="mobile-nav__top">
                    <div class="mobile-nav__social">
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-facebook-square"></a>
                        <a href="#" class="fab fa-pinterest-p"></a>
                        <a href="#" class="fab fa-instagram"></a>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default Header;