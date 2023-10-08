import about_two_shape_2 from '../../assets/images/shapes/about-two-shape-2.png'
import about_two_shape_3 from '../../assets/images/shapes/about-two-shape-3.png'
import about_two_img_1 from '../../assets/images/resources/about-two-img-1.jpg'
import about_two_img_2 from '../../assets/images/resources/about-two-img-2.jpg'
import about_two_img_3 from '../../assets/images/resources/about-two-img-3.jpg'
import CountUp from "react-countup";
import Fancybox from "../Fancybox"; 

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
                            <h3 className="about-two__title">Prettau Dental Lab</h3>
                            <p className="about-two__text">Provides the integrated solutions for all Dental Prosthetics in parallel with the high technology around the world. with directly attached to the specialized international companies. in addition to our contributions to the field by our experiences that cover the need of the dentists clinics.</p>
                            <ul className="about-two__points list-unstyled">
                                <li>
                                    <div className="about-two__count count-box">
                                        <h3 className="count-text" data-stop="10" data-speed="1500">
                                            <CountUp
                                                end={7}
                                                duration={7}
                                                enableScrollSpy
                                                scrollSpyOnce
                                               
                                            /></h3>
                                    </div>
                                    <p>Years Of <br/> Experience</p>
                                </li>
                                <li>
                                    <div className="about-two__count count-box">
                                        <h3 className="count-text" data-stop="8" data-speed="1500">
                                             <CountUp
                                                end={11}
                                                duration={8}
                                                enableScrollSpy
                                                scrollSpyOnce
                                            />
                                        </h3>
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
                                   <Fancybox>
                                       <a data-fancybox href="https://www.youtube.com/watch?v=tiSiJ-8y6J8" class="video-popup">
                                        <div class="services-details__video-icon">
                                            <span class="fa fa-play"></span>
                                            <i class="ripple"></i>
                                        </div>
                                    </a>
                                    </Fancybox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <h3 class="services-details__title-1">Business Audit</h3>
                        <p class="services-details__text-1">
                            We have many dealers working with us around the world in many cities. in the Europe and Arabic countries. and that s help us to improve our experiences through the communication with international experiences and using of different techniques that deals with many complicated cases in this filed. We understand that switching to a new. unfamiliar. far away eastern-country lab like us can be quite risky.
But all we will like to ask from you now is not to risk. but just to TRY first. Our clients always sent the cases more and more when they got the sample from us.
We have built strong trust and confidence with every customer we serve. We will let you see that we can do all what we said we can. Quality is always #1
                        </p>
                        <div class="services-details__img-and-feature">
                            <div class="services-details__feature-img">
                                <img src={about_two_img_2} alt=""/>
                                <div class="services-details__video-link">
                                     
                                       {/* <a  href="https://www.youtube.com/watch?v=PA0gubGyzfY" class="video-popup">
                                        <div class="services-details__video-icon">
                                            <span class="fa fa-play"></span>
                                            <i class="ripple"></i>
                                        </div>
                                    </a>
                                    */}
                                   
                                </div>
                            </div>
                            <div class="services-details__feature">
                                <h3 class="services-details__feature-title">Our Features:</h3>
                                <p class="services-details__feature-text">
                                   Was founded in 2000. and today is one of the oldest and leading dental laboratories in Dental Prosthetics. While serving dental clinics and hospitals locally. we have also been exporting our prosthesis products to overseas markets since 2005.
<br></br>
<br></br>
                                   Our network of clients spans across, Europe and Asia. Our aim has always been to provide the finest quality restorations and reliable services for the global dental community. and to deliver confident smiles to people from all corners of the world. Our foundation is built on quality. Trust. customer service and warranty. We offer a full range of dental restorations including fixed prostheses. Removable prostheses. and orthodontic appliances. And CAD/CAM products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                             <p class="services-details__text-1">
                         
We can fabricate from the most traditional work of porcelain-metal crown to the complex ones like custom abutment. screw-retained bridge. and implant bar. Or to the newest innovations like. Dynamic Abutment. e-max zero preparation (v-max Prettau). And we can provide a full digital work flow from A-Z such as Digital Smile Design DSD. 3D printing. Intra and Extra oral scan. soft tissue gingival guide and surgical guide.x
                        </p>
                        <div class="services-details__img-and-feature">
                            <div class="services-details__feature_two">
                                <h3 class="services-details__feature-title">Our Features:</h3>
                                <p class="services-details__feature-text">
                               Our highly skilled supervisors. Technicians and well-trained representatives combined with world-class materials and state of the art equipment will ensure exceptional quality restorations that always meet your expectations. Prior to shipping. Every single case is subject to rigorous quality control measures to ensure esthetics. Function. and fit. Therefore. adjustments and remakes are kept minimal. With over 19 years experience in Prosthodontics, your complete satisfaction is guaranteed. We look forward to establish a long term cooperation with dentists, dental labs. brokers/agents and other dental practitioners from around the world.
                                </p>
                            </div>
                            <div class="services-details__feature-img">
                                <img src={about_two_img_3} alt=""/>
                                <div class="services-details__video-link">
                                    {/* <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" class="video-popup">
                                        <div class="services-details__video-icon">
                                            <span class="fa fa-play"></span>
                                            <i class="ripple"></i>
                                        </div>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


    
       


        </section>
    )

}

export default Solution;