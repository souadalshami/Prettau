


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
                            <p className="information__text">Live Chat</p>
                            <p className="information__number">Available 24/7</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="information__single">
                            <div className="information__icon">
                                <span className="icon-phone-call"></span>
                            </div>
                            <p className="information__text">Call Us</p>
                            <p className="information__number"><a href="tel:+12011234468">+964 (770) 037 2464</a></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="information__single">
                            <div className="information__icon">
                                <span className="icon-gmail"></span>
                            </div>
                            <p className="information__text">Mail Us</p>
                            <p className="information__number"><a href="mailto:Prettau.ptrettau@gmail.com">Prettau.ptrettau@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="information__single">
                            <div className="information__icon">
                                <span className="icon-location-2"></span>
                            </div>
                            <p className="information__text">Office Address</p>
                            <p className="information__number">60 th St, Sulimaniyah. Iraq</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )


}

export default Information;