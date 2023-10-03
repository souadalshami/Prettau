
import slider_1 from '../../assets/images/shapes/main-slider-shape-1.png'
import slider_2 from '../../assets/images/shapes/main-slider-shape-2.png'
import background   from '../../assets/images/backgrounds/slider-1-1.jpg'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function MainSlider(){

    return(
        <section className="main-slider">
            <OwlCarousel className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel"
                items={1}
                loop
                dots
                margin={0}
                nav={false}
                // autoplay
                autoplayTimeout={7000}
                smartSpeed= {1000}
                
                animateOut="slideOutDown"
                animateIn="fadeIn"
                >
                <div className="item main-slider__slide-1">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: `url(${background})` }}>
                    </div>
                    <div className="main-slider__shape-1 rotate-me">
                        <img src={slider_1} alt=""/>
                    </div>
                    <div className="main-slider__shape-2 float-bob-x">
                        <img src={slider_2} alt=""/>
                    </div>
                    <div className="container">
                        <div className="main-slider__content">
                            <p className="main-slider__sub-title">WE CREAT DIGITAL PRODUCT</p>
                            <h2 className="main-slider__title">Get more of what <br/> you want from your <br/> business</h2>
                            <p className="main-slider__text">Lorem Ipsum is simply dummy text of the printing and <br/>
                                typesetting industry. Lorem Ipsum has been.</p>
                            <div className="main-slider__btn-and-video-box">
                                <div className="main-slider__btn-box">
                                    <a href="contact.html" className="thm-btn main-slider__btn">Get Consulting</a>
                                </div>
                                <div className="main-slider__video-link">
                                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                        <div className="main-slider__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                    <h4 className="main-slider__video-text">Watch Video</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            


                <div className="item main-slider__slide-1">
                    <div className="main-slider__bg" style={{ backgroundImage: `url(${background})` }}>
                    </div>
                    <div className="main-slider__shape-1 rotate-me">
                        <img src={slider_1} alt=""/>
                    </div>
                    <div className="main-slider__shape-2 float-bob-x">
                        <img src={slider_2} alt=""/>
                    </div>
                    <div className="container">
                        <div className="main-slider__content">
                            <p className="main-slider__sub-title">WE CREAT DIGITAL PRODUCT</p>
                            <h2 className="main-slider__title">Get more of what <br/> you want from your <br/> business</h2>
                            <p className="main-slider__text">Lorem Ipsum is simply dummy text of the printing and <br/>
                                typesetting industry. Lorem Ipsum has been.</p>
                            <div className="main-slider__btn-and-video-box">
                                <div className="main-slider__btn-box">
                                    <a href="contact.html" className="thm-btn main-slider__btn">Get Consulting</a>
                                </div>
                                <div className="main-slider__video-link">
                                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                        <div className="main-slider__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                    <h4 className="main-slider__video-text">Watch Video</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="item main-slider__slide-1">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: `url(${background})` }}>
                    </div>
                    <div className="main-slider__shape-1 rotate-me">
                        <img src={slider_1} alt=""/>
                    </div>
                    <div className="main-slider__shape-2 float-bob-x">
                        <img src={slider_2} alt=""/>
                    </div>
                    <div className="container">
                        <div className="main-slider__content">
                            <p className="main-slider__sub-title">WE CREAT DIGITAL PRODUCT</p>
                            <h2 className="main-slider__title">Get more of what <br/> you want from your <br/> business</h2>
                            <p className="main-slider__text">Lorem Ipsum is simply dummy text of the printing and <br/>
                                typesetting industry. Lorem Ipsum has been.</p>
                            <div className="main-slider__btn-and-video-box">
                                <div className="main-slider__btn-box">
                                    <a href="contact.html" className="thm-btn main-slider__btn">Get Consulting</a>
                                </div>
                                <div className="main-slider__video-link">
                                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                        <div className="main-slider__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                    <h4 className="main-slider__video-text">Watch Video</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </OwlCarousel>
        </section>
        
    )
}


export default MainSlider;