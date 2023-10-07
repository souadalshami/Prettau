import services_details_img_1 from '../../assets/images/services/services-details-img-1.jpg';
import services_details_img_2 from '../../assets/images/services/services-details-img-2.jpg';

function Details(){

    return( 
        <section class="services-details">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4">
                        <div class="services-details__left">
                            <div class="services-details__services-box">
                                <ul class="services-details__services-list list-unstyled">
                                    <li class="active">
                                        <a href="business-audit.html"> Audit<span class="icon-right-arrow1"></span></a>
                                    </li>
                                    <li>
                                        <a href="business-planning.html">Business Planning<span
                                                class="icon-right-arrow1"></span></a>
                                    </li>
                                    <li>
                                        <a href="financial-advices.html">Financial Advices<span
                                                class="icon-right-arrow1"></span></a>
                                    </li>
                                    <li>
                                        <a href="tax-strategy.html">Tax Strategy<span
                                                class="icon-right-arrow1"></span></a>
                                    </li>
                                    <li>
                                        <a href="insurance-strategy.html">Insurance Strategy<span
                                                class="icon-right-arrow1"></span></a>
                                    </li>
                                    <li>
                                        <a href="start-ups.html">Start Ups<span class="icon-right-arrow1"></span></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="services-details__contact">
                                <h3 class="services-details__contact-title">Contact us</h3>
                                <ul class="services-details__contact-list list-unstyled">
                                    <li>
                                        <div class="icon">
                                            <span class="icon-location-1"></span>
                                        </div>
                                        <p>60 th St, Sulimaniyah. Iraq</p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-phone"></span>
                                        </div>
                                        <p><a href="tel:+9647700372464">+964 (770) 037-2464</a></p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-envelope"></span>
                                        </div>
                                        <p><a href="Prettau.ptrettau@gmail.com">Prettau.ptrettau@gmail.com</a></p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-time"></span>
                                        </div>
                                        <p>Always Open</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-8">
                        <div class="services-details__right">
                            <div class="services-details__img">
                                <img src={services_details_img_1}  alt=""/>
                            </div>
                            <h3 class="services-details__title-1">Prettau V-MAX Veneer </h3>
                            <p class="services-details__text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.</p>
                            <div class="services-details__img-and-feature">
                                <div class="services-details__feature-img">
                                    <img src={services_details_img_2}  alt=""/>
                                    <div class="services-details__video-link">
                                        <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" class="video-popup">
                                            <div class="services-details__video-icon">
                                                <span class="fa fa-play"></span>
                                                <i class="ripple"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="services-details__feature">
                                    <h3 class="services-details__feature-title">Our Features:</h3>
                                    <p class="services-details__feature-text">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor.</p>
                                    <ul class="services-details__feature-points list-unstyled">
                                        <li>
                                            <div class="icon">
                                                <span class="icon-icon-business-consulting"></span>
                                            </div>
                                            <div class="content">
                                                <h3>Best Business consulting</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <span class="icon-icon-customer-support"></span>
                                            </div>
                                            <div class="content">
                                                <h3>24/7 customer support</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 class="services-details__title-2">Benefits With Our Service:</h3>
                            <p class="services-details__text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            <ul class="services-details__points list-unstyled">
                                <li>
                                    <p>1. Save Valuable Time</p>
                                </li>
                                <li>
                                    <p>2. Offer an Outsider’s Perspective</p>
                                </li>
                                <li>
                                    <p>3. Fill in Gaps in Your Knowledge</p>
                                </li>
                                <li>
                                    <p>4. Save Money</p>
                                </li>
                                <li>
                                    <p>5. Achieve Goals</p>
                                </li>
                                <li>
                                    <p>6. Offer Expertise</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )

}
export default Details;