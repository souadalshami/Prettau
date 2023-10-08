
import services_one_shape_3 from '../../assets/images/shapes/services-one-shape-3.png'
import services_one_shape_4 from '../../assets/images/shapes/services-one-shape-4.png'
import services_one_shape_1 from '../../assets/images/shapes/services-one-shape-1.png'
import services_one_shape_2 from '../../assets/images/shapes/services-one-shape-2.png'
import background from '../../assets/images/services/services-one-hover-img.jpg'
import WOW from 'wowjs';
import { useEffect } from 'react'

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
                        <p class="section-title__tagline">FEATURED SERVICES</p>
                    </div>
                    <h2 class="section-title__title">What services we provide to our <br/> customers business</h2>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div class="services-one__single">
                            <div class="services-one__single-hover-bg"
                                style={{ backgroundImage: `url(${background})` }}></div>
                            <div class="services-one__icon">
                                <span class="icon-icon-business-audit"></span>
                                <div class="services-one__shape-1">
                                    <img src={services_one_shape_1} alt=""/>
                                </div>
                                <div class="services-one__shape-2">
                                    <img src={services_one_shape_2} alt=""/>
                                </div>
                            </div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><a href="business-audit.html">Premium</a></h3>
                                <p class="services-one__text">Lorem Ipsum is simply dummy text of the printing industry.
                                    The industry's standard dummy</p>
                                <div class="services-one__read-more">
                                    <a href="business-audit.html">Learn More<span class="icon-right-arrow1"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div class="services-one__single">
                            <div class="services-one__single-hover-bg"
                            style={{ backgroundImage: `url(${background})` }}></div>
                            <div class="services-one__icon">
                                <span class="icon-icon-tax-strategy"></span>
                                <div class="services-one__shape-1">
                                    <img src={services_one_shape_1} alt=""/>
                                </div>
                                <div class="services-one__shape-2">
                                    <img src={services_one_shape_2} alt=""/>
                                </div>
                            </div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><a href="tax-strategy.html">Titanium</a></h3>
                                <p class="services-one__text">Lorem Ipsum is simply dummy text of the printing industry.
                                    The industry's standard dummy</p>
                                <div class="services-one__read-more">
                                    <a href="tax-strategy.html">Learn More<span class="icon-right-arrow1"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                        <div class="services-one__single">
                            <div class="services-one__single-hover-bg"
                                style={{ backgroundImage: `url(${background})` }}></div>
                            <div class="services-one__icon">
                                <span class="icon-financial-advice"></span>
                                <div class="services-one__shape-1">
                                    <img src={{services_one_shape_1}} alt=""/>
                                </div>
                                <div class="services-one__shape-2">
                                    <img src={services_one_shape_2} alt=""/>
                                </div>
                            </div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><a href="financial-advices.html">Zircon</a>
                                </h3>
                                <p class="services-one__text">Lorem Ipsum is simply dummy text of the printing industry.
                                    The industry's standard dummy</p>
                                <div class="services-one__read-more">
                                    <a href="financial-advices.html">Learn More<span
                                            class="icon-right-arrow1"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                        <div class="services-one__single">
                            <div class="services-one__single-hover-bg"
                                style={{ backgroundImage: `url(${background})` }}></div>
                            <div class="services-one__icon">
                                <span class="icon-icon-insurance-strategy"></span>
                                <div class="services-one__shape-1">
                                    <img src={{services_one_shape_1}} alt=""/>
                                </div>
                                <div class="services-one__shape-2">
                                    <img src={{services_one_shape_2}} alt=""/>
                                </div>
                            </div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><a href="insurance-strategy.html">Laser Implant</a>
                                </h3>
                                <p class="services-one__text">Lorem Ipsum is simply dummy text of the printing industry.
                                    The industry's standard dummy</p>
                                <div class="services-one__read-more">
                                    <a href="insurance-strategy.html">Learn More<span
                                            class="icon-right-arrow1"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div class="services-one__single">
                            <div class="services-one__single-hover-bg"
                            style={{ backgroundImage: `url(${background})` }}></div>
                            <div class="services-one__icon">
                                <span class="icon-icon-start-ups"></span>
                                <div class="services-one__shape-1">
                                    <img src={{services_one_shape_1}} alt=""/>
                                </div>
                                <div class="services-one__shape-2">
                                    <img src={{services_one_shape_2}} alt=""/>
                                </div>
                            </div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><a href="start-ups.html">Peek Polymer</a></h3>
                                <p class="services-one__text">Lorem Ipsum is simply dummy text of the printing industry.
                                    The industry's standard dummy</p>
                                <div class="services-one__read-more">
                                    <a href="start-ups.html">Learn More<span class="icon-right-arrow1"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div class="services-one__single">
                            <div class="services-one__single-hover-bg"
                                style={{ backgroundImage: `url(${background})` }}></div>
                            <div class="services-one__icon">
                                <span class="icon-icon-manage-investment"></span>
                                <div class="services-one__shape-1">
                                    <img src={{services_one_shape_1}} alt=""/>
                                </div>
                                <div class="services-one__shape-2">
                                    <img src={{services_one_shape_2}} alt=""/>
                                </div>
                            </div>
                            <div class="services-one__content">
                                <h3 class="services-one__title"><a href="tax-strategy.html">Acrylic</a>
                                </h3>
                                <p class="services-one__text">Lorem Ipsum is simply dummy text of the printing industry.
                                    The industry's standard dummy</p>
                                <div class="services-one__read-more">
                                    <a href="tax-strategy.html">Learn More<span class="icon-right-arrow1"></span></a>
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