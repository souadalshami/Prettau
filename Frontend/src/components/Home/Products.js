
import portfolio_one_shape_1 from '../../assets/images/shapes/portfolio-one-shape-1.png'
import portfolio_one_shape_2 from '../../assets/images/shapes/portfolio-one-shape-2.png'
// import portfolio_1_1 from '../../assets/images/shapes/portfolio-1-1.jpg'

function Products(){


    <section className="portfolio-one">
        <div className="portfolio-one__shape-1 float-bob-x">
            <img src={portfolio_one_shape_1} alt=""/>
        </div>
        <div className="portfolio-one__shape-2 rotate-me">
            <img src={portfolio_one_shape_2} alt=""/>
        </div>
        <div className="container">
            <div className="section-title text-center">
                <div className="section-title__tagline-box">
                    <p className="section-title__tagline">Latest CASE STUDIES</p>
                </div>
                <h2 className="section-title__title">We Are Specialist For Many <br/> Consulting Cases</h2>
            </div>
            <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                    <div className="portfolio-one__single">
                        <div className="portfolio-one__img-box">
                            <div className="portfolio-one__img">
                                {/* <img src={portfolio_1_1} alt=""/> */}
                            </div>
                            <div className="portfolio-one__content">
                                <p className="portfolio-one__sub-title">Business Audit</p>
                                <h3 className="portfolio-one__title"><a href="portfolio-details.html">Printing And
                                        Industry</a></h3>
                            </div>
                            <div className="portfolio-one__arrow">
                                <a href="assets/images/project/portfolio-1-1.jpg" className="img-popup"><span
                                        className="icon-top-right-1"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay="200ms">
                    <div className="portfolio-one__single">
                        <div className="portfolio-one__img-box">
                            <div className="portfolio-one__img">
                                <img src="assets/images/project/portfolio-1-2.jpg" alt=""/>
                            </div>
                            <div className="portfolio-one__content">
                                <p className="portfolio-one__sub-title">Business Audit</p>
                                <h3 className="portfolio-one__title"><a href="portfolio-details.html">Our Business
                                        Growth</a></h3>
                            </div>
                            <div className="portfolio-one__arrow">
                                <a href="assets/images/project/portfolio-1-2.jpg" className="img-popup"><span
                                        className="icon-top-right-1"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                    <div className="portfolio-one__single">
                        <div className="portfolio-one__img-box">
                            <div className="portfolio-one__img">
                                <img src="assets/images/project/portfolio-1-3.jpg" alt=""/>
                            </div>
                            <div className="portfolio-one__content">
                                <p className="portfolio-one__sub-title">Business Audit</p>
                                <h3 className="portfolio-one__title"><a href="portfolio-details.html">Industry's
                                        Standard</a></h3>
                            </div>
                            <div className="portfolio-one__arrow">
                                <a href="assets/images/project/portfolio-1-3.jpg" className="img-popup"><span
                                        className="icon-top-right-1"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay="400ms">
                    <div className="portfolio-one__single">
                        <div className="portfolio-one__img-box">
                            <div className="portfolio-one__img">
                                <img src="assets/images/project/portfolio-1-4.jpg" alt=""/>
                            </div>
                            <div className="portfolio-one__content">
                                <p className="portfolio-one__sub-title">Business Audit</p>
                                <h3 className="portfolio-one__title"><a href="portfolio-details.html">Business
                                        Consulting</a></h3>
                            </div>
                            <div className="portfolio-one__arrow">
                                <a href="assets/images/project/portfolio-1-4.jpg" className="img-popup"><span
                                        className="icon-top-right-1"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-one__btn-box">
                <a href="portfolio.html" className="portfolio-one__btn thm-btn">See All Project</a>
            </div>
        </div>
    </section>



}

export default Products;