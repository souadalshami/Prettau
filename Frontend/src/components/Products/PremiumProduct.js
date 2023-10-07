
import news_lp_1 from '../../assets/images/blog/news-lp-1.jpg'
import news_1_1 from '../../assets/images/blog/news-1-1.jpg'
import { Link } from 'react-router-dom';


function Premium(){

    return(
        <section class="news-left">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-5">
                        <div class="sidebar sidebar--two">
                            <div class="sidebar__single sidebar__category">
                                <div class="sidebar__title-box">
                                    <h3 class="sidebar__title">Products</h3>
                                </div>
                                <ul class="sidebar__category-list list-unstyled">
                                    <li>
                                        <a href="news-details.html">Titanium<span
                                                class="icon-right-arrow1"></span></a>
                                    </li>
                                    <li>
                                        <a href="news-details.html">Zircon<span
                                                class="icon-right-arrow1"></span></a>
                                    </li>
                                    <li>
                                        <a href="news-details.html">Laser Implant<span
                                                class="icon-right-arrow1"></span></a>
                                    </li>
                                    <li>
                                        <a href="news-details.html">Peek Polymer<span
                                                class="icon-right-arrow1"></span></a>
                                    </li>
                                    <li>
                                        <a href="news-details.html">Acrylic<span
                                                class="icon-right-arrow1"></span></a>
                                    </li>
                                    <li>
                                        <a href="news-details.html">Ortho<span
                                                class="icon-right-arrow1"></span></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="sidebar__single sidebar__post">
                                <div class="sidebar__title-box">
                                    <h3 class="sidebar__title">Recent Post</h3>
                                </div>
                                <ul class="sidebar__post-list list-unstyled">
                                    <li>
                                        <div class="sidebar__post-image">
                                            <img src={news_lp_1} alt=""/>
                                        </div>
                                        <div class="sidebar__post-content">
                                            <h3 class="sidebar__post-title"><a href="news-details.html">We would love to
                                                    share a similar experience</a></h3>
                                            <p class="sidebar__post-date"><span class="icon-time"></span>10 Oct, 2022
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sidebar__post-image">
                                            <img src={news_lp_1} alt=""/>
                                        </div>
                                        <div class="sidebar__post-content">
                                            <h3 class="sidebar__post-title"><a href="news-details.html">We would love to
                                                    share a similar experience</a></h3>
                                            <p class="sidebar__post-date"><span class="icon-time"></span>10 Oct, 2022
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sidebar__post-image">
                                            <img src={"assets/images/blog/news-lp-3.jpg"} alt=""/>
                                        </div>
                                        <div class="sidebar__post-content">
                                            <h3 class="sidebar__post-title"><a href="news-details.html">We would love to
                                                    share a similar experience</a></h3>
                                            <p class="sidebar__post-date"><span class="icon-time"></span>10 Oct, 2022
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sidebar__post-image">
                                            <img src="assets/images/blog/news-lp-4.jpg" alt=""/>
                                        </div>
                                        <div class="sidebar__post-content">
                                            <h3 class="sidebar__post-title"><a href="news-details.html">We would love to
                                                    share a similar experience</a></h3>
                                            <p class="sidebar__post-date"><span class="icon-time"></span>10 Oct, 2022
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-7">
                        <div class="row">
                            <div class="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
                                <div class="news-one__single">
                                    <div class="news-one__img-box">
                                        <div class="news-one__img">
                                            <img src={news_1_1} alt=""/>
                                        </div>
                                    </div>
                                    <div class="news-one__content">
                                        <div class="news-one__content-top">
                                            <p class="news-one__sub-title">V_max</p>
                                            <h3 class="news-one__title"><Link to="/ProductDetails">V_max Multilayered 4D Case 1</Link></h3>
                                            <p class="news-one__text">Lorem Ipsum is simply dummy text of the printing
                                                and
                                                typesetting industry...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
                                <div class="news-one__single">
                                    <div class="news-one__img-box">
                                        <div class="news-one__img">
                                            <img src={news_1_1} alt=""/>
                                        </div>
                                    </div>
                                    <div class="news-one__content">
                                        <div class="news-one__content-top">
                                            <p class="news-one__sub-title">E_max Premium</p>
                                            <h3 class="news-one__title"><a href="news-details.html">E_max Multilayered 4D Case 1</a></h3>
                                            <p class="news-one__text">Lorem Ipsum is simply dummy text of the printing
                                                and
                                                typesetting industry...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
                                <div class="news-one__single">
                                    <div class="news-one__img-box">
                                        <div class="news-one__img">
                                            <img src={news_1_1} alt=""/>
                                        </div>
                                    </div>
                                    <div class="news-one__content">
                                        <div class="news-one__content-top">
                                            <p class="news-one__sub-title">Zircon Premium</p>
                                            <h3 class="news-one__title"><a href="news-details.html">Zircon Pemium Multilayered 4D Case 1</a></h3>
                                            <p class="news-one__text">Lorem Ipsum is simply dummy text of the printing
                                                and
                                                typesetting industry...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
                                <div class="news-one__single">
                                    <div class="news-one__img-box">
                                        <div class="news-one__img">
                                            <img src={news_1_1} alt=""/>
                                        </div>
                                    </div>
                                    <div class="news-one__content">
                                        <div class="news-one__content-top">
                                            <p class="news-one__sub-title">Ceramic Premium</p>
                                            <h3 class="news-one__title"><a href="news-details.html">Ceramic Pemium Multilayered 4D Case 1</a></h3>
                                            <p class="news-one__text">Lorem Ipsum is simply dummy text of the printing
                                                and
                                                typesetting industry...</p>
                                        </div>
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


export default Premium;