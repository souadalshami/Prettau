import about_shape1 from '../../assets/images/shapes/about-one-shape-1.png'
import about_shape2 from '../../assets/images/shapes/about-one-shape-2.png'

import about_shape3 from '../../assets/images/shapes/about-one-shape-3.png'
import about_shape4 from '../../assets/images/shapes/about-one-shape-4.png'
import about_one from '../../assets/images/resources/about-one-img-1.jpg'
import about_two from '../../assets/images/resources/about-one-img-2.jpg'
import { Link } from 'react-router-dom'





function AboutUs(){

    return(
        <section className="about-one">
            <div className="about-one__shape-3 float-bob-y">
                <img src={about_shape3} alt=""/>
            </div>
            <div className="about-one__shape-4 img-bounce">
                <img src={about_shape4} alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-one__img">
                                    <img src={about_one} alt=""/>
                                </div>
                                <div className="about-one__img-2">
                                    <img src={about_two} alt=""/>
                                </div>
                                <div className="about-one__shape-1 float-bob-x">
                                    <img src={about_shape1} alt=""/>
                                </div>
                                <div className="about-one__shape-2 float-bob-y">
                                    <img src={about_shape2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">ABOUT US</p>
                                </div>
                                <h2 className="section-title__title">We are the best agency <br/> to improve your deals.</h2>
                            </div>
                            <p className="about-one__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                                <br/> industry. Lorem Ipsum has been the industry's standard dummy <br/> text ever since
                                the 1500s,
                                when an unknown printer.</p>
                            <ul className="about-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <div className="text">
                                        <p>Business And Consulting Agency</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <div className="text">
                                        <p>Awards Winning Business Comapny</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="about-one__btn-box">
                                <Link to="/about" className="about-one__btn thm-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default AboutUs;