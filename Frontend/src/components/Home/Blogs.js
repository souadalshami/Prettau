import news_one_shape_1 from '../../assets/images/shapes/news-one-shape-1.png'
import news_one_shape_2 from '../../assets/images/shapes/news-one-shape-2.png'
import news_one_shape_3 from '../../assets/images/shapes/news-one-shape-3.png'
import news_1_1 from '../../assets/images/blog/news-1-1.jpg';
import news_one_person_img from '../../assets/images/blog/news-one-person-img.jpg'

import news_1_2 from '../../assets/images/blog/news-1-2.jpg'






function Blogs(){

    return(
        <section className="news-one">
            <div className="news-one__shape-1 img-bounce">
                <img src={news_one_shape_1} alt=""/>
            </div>
            <div className="news-one__shape-2 float-bob-y">
                <img src={news_one_shape_2} alt=""/>
            </div>
            <div className="news-one__shape-3 rotate-me">
                <img src={news_one_shape_3} alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">Latest Blog</p>
                    </div>
                    <h2 className="section-title__title">Learn about our latest <br/> news from blog.</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="news-one__single">
                            <div className="news-one__img-box">
                                <div className="news-one__img">
                                    <img src={news_1_1} alt=""/>
                                </div>
                            </div>
                            <div className="news-one__content">
                                <div className="news-one__content-top">
                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                    <h3 className="news-one__title"><a href="news-details.html">We would love to share a
                                            similar
                                            experience</a></h3>
                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry...</p>
                                </div>
                                <div className="news-one__person-and-date">
                                    <div className="news-one__person">
                                        <div className="news-one__person-img">
                                            <img src={news_one_person_img} alt=""/>
                                        </div>
                                        <div className="news-one__person-text">
                                            <p>by John Carry on</p>
                                        </div>
                                    </div>
                                    <div className="news-one__date">
                                        <p><span className="icon-icon-calendar"></span>Oct 01, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="news-one__single">
                            <div className="news-one__img-box">
                                <div className="news-one__img">
                                    <img src={news_1_2} alt=""/>
                                </div>
                            </div>
                            <div className="news-one__content">
                                <div className="news-one__content-top">
                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                    <h3 className="news-one__title"><a href="news-details.html">What activities are done in
                                            the development?</a></h3>
                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry...</p>
                                </div>
                                <div className="news-one__person-and-date">
                                    <div className="news-one__person">
                                        <div className="news-one__person-img">
                                            <img src="assets/images/blog/news-one-person-img-2.jpg" alt=""/>
                                        </div>
                                        <div className="news-one__person-text">
                                            <p>by John Carry on</p>
                                        </div>
                                    </div>
                                    <div className="news-one__date">
                                        <p><span className="icon-icon-calendar"></span>Oct 01, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="news-one__single">
                            <div className="news-one__img-box">
                                <div className="news-one__img">
                                    <img src="assets/images/blog/news-1-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="news-one__content">
                                <div className="news-one__content-top">
                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                    <h3 className="news-one__title"><a href="news-details.html">What is the most important
                                            thing in a designing?</a></h3>
                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry...</p>
                                </div>
                                <div className="news-one__person-and-date">
                                    <div className="news-one__person">
                                        <div className="news-one__person-img">
                                            <img src="assets/images/blog/news-one-person-img-3.jpg" alt=""/>
                                        </div>
                                        <div className="news-one__person-text">
                                            <p>by John Carry on</p>
                                        </div>
                                    </div>
                                    <div className="news-one__date">
                                        <p><span className="icon-icon-calendar"></span>Oct 01, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Blogs;