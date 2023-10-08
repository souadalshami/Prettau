import news_one_shape_1 from '../../assets/images/shapes/news-one-shape-1.png'
import news_one_shape_2 from '../../assets/images/shapes/news-one-shape-2.png'
import news_one_shape_3 from '../../assets/images/shapes/news-one-shape-3.png'
import news_1_1 from '../../assets/images/blog/news-1-1.jpg';
import news_one_person_img from '../../assets/images/blog/news-one-person-img.jpg'

import news_1_2 from '../../assets/images/blog/news-1-2.jpg'
import { Link } from 'react-router-dom';






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
                                    <p className="news-one__sub-title">V_MAX</p>
                                    <h3 className="news-one__title"><Link to="/ProductDetails">V_max Multilayered 4D Case 1</Link></h3>
                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="news-one__single">
                            <div className="news-one__img-box">
                                <div className="news-one__img">
                                    <img src={news_1_1} alt=""/>
                                </div>
                            </div>
                            <div className="news-one__content">
                                <div className="news-one__content-top">
                                    <p className="news-one__sub-title">Porcelain Fusedto Metal (PFM)</p>
                                    <h3 className="news-one__title"><a href="news-details.html">Porcelain Fusedto 4D Case 1</a></h3>
                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="news-one__single">
                            <div className="news-one__img-box">
                                <div className="news-one__img">
                                    <img src={news_1_1} alt=""/>
                                </div>
                            </div>
                            <div className="news-one__content">
                                <div className="news-one__content-top">
                                    <p className="news-one__sub-title">E_MAX PREMIUM</p>
                                    <h3 className="news-one__title"><a href="news-details.html">E_max Multilayered 4D Case 1</a></h3>
                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry...</p>
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