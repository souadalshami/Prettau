import about_two_shape_2 from '../../assets/images/shapes/about-two-shape-2.png'
import about_two_shape_3 from '../../assets/images/shapes/about-two-shape-3.png'
import about_two_img_1 from '../../assets/images/resources/about-two-img-1.jpg'


function Solution(){

    return(
        <section className="about-two">
            <div className="about-two__shape-2 zoominout">
                <img src={about_two_shape_2} alt=""/>
            </div>
            <div className="about-two__shape-3 float-bob-y">
                <img src={about_two_shape_3} alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-two__left">
                            <h3 className="about-two__title">We help to get Solutions!</h3>
                            <p className="about-two__text">Provides the integrated solutions for all Dental Prosthetics in parallel with the high technology around the world. with directly attached to the specialized international companies. in addition to our contributions to the field by
                             our experiences that cover the need of the dentists clinics..</p>
                            <ul className="about-two__points list-unstyled">
                                <li>
                                    <div className="about-two__count count-box">
                                        <h3 className="count-text" data-stop="10" data-speed="1500">00</h3>
                                    </div>
                                    <p>Years Of <br/> Experience</p>
                                </li>
                                <li>
                                    <div className="about-two__count count-box">
                                        <h3 className="count-text" data-stop="8" data-speed="1500">00</h3>
                                        <span>k</span>
                                    </div>
                                    <p>Completed <br/> project</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-two__right">
                            <div className="about-two__img wow slideInRight" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-two__shape-1 img-bounce">
                                    <img src={about_two_shape_2}  alt=""/>
                                </div>
                                <img src={about_two_img_1} alt=""/>
                                <div className="about-two__video-link">
                                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                        <div className="about-two__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <h3 class="services-details__title-1">Business Audit</h3>
                        <p class="services-details__text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.</p>
                        <div class="services-details__img-and-feature">
                            <div class="services-details__feature-img">
                                <img src={about_two_img_1} alt=""/>
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
                                <p class="services-details__feature-text">
                                    Our network of clients spans across, Europe and Asia. Our aim has 
                                    always been to provide the finest quality restorations and reliable 
                                    services for the global dental community. and to deliver confident smiles
                                    to people from all corners of the world. Our foundation is built on quality. Trust. 
                                    customer service and warranty. We offer a full range of dental restorations including 
                                    fixed prostheses. Removable prostheses. and orthodontic appliances. And CAD/CAM products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div class="services-details__img-and-feature">
                            <div class="services-details__feature">
                                <h3 class="services-details__feature-title">Our Features:</h3>
                                <p class="services-details__feature-text">
                                    Our network of clients spans across, Europe and Asia. Our aim has 
                                    always been to provide the finest quality restorations and reliable 
                                    services for the global dental community. and to deliver confident smiles
                                    to people from all corners of the world. Our foundation is built on quality. Trust. 
                                    customer service and warranty. We offer a full range of dental restorations including 
                                    fixed prostheses. Removable prostheses. and orthodontic appliances. And CAD/CAM products.
                                </p>
                            </div>
                            <div class="services-details__feature-img">
                                <img src={about_two_img_1} alt=""/>
                                <div class="services-details__video-link">
                                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" class="video-popup">
                                        <div class="services-details__video-icon">
                                            <span class="fa fa-play"></span>
                                            <i class="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


           
                {/* <div className="col-xl-12 col-md-12">
                    <div className="services-details__right">
                        <h3 class="services-details__title-1">Pretauu Dental Lab </h3>
                        <p class="services-details__text-1">
                        Our network of clients spans across, Europe and Asia. Our aim has always 
                        been to provide the finest quality restorations and reliable services for the global dental community. 
                        and to deliver confident smiles to people from all corners of the world. Our foundation is built on quality. Trust. customer service and warranty. We offer a full range of dental restorations including fixed prostheses. 
                        Removable prostheses. and orthodontic appliances. And CAD/CAM products.
                        </p>
                    </div>
                    
                    <div className="services-details__img-and-feature">
                        <div class="services-details__feature-img">
                            <img src={about_two_img_1} alt=""/>
                        </div>
                    </div>
                </div> */}
       


        </section>
    )

}

export default Solution;