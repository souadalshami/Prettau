
import { t } from "i18next";

function Information(){


    return(
        <section className="information">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="information__single">
                            <div className="information__icon">
                                <span className="icon-chat-1"></span>
                            </div>
                            <p className="information__text">{t('contact-working-time')}</p>
                            <p className="information__number">24/7</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="information__single">
                            <div className="information__icon">
                                <span className="icon-phone-call"></span>
                            </div>
                            <p className="information__text">{t('contact-call-us')}</p>
                            <p className="information__number"><a dir="ltr"  href="tel:+12011234468">+964 (770) 037 2464</a></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="information__single">
                            <div className="information__icon">
                                <span className="icon-gmail"></span>
                            </div>
                            <p className="information__text">{t('contact-mail-us')}</p>
                            <p className="information__number"><a dir="ltr" href="mailto:Prettau.ptrettau@gmail.com">Prettau.ptrettau@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="information__single">
                            <div className="information__icon">
                                <span className="icon-location-2"></span>
                            </div>
                            <p className="information__text">{t('contact-address')}</p>
                            <p className="information__number">{t('location')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )


}

export default Information;