import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css"
import team_2_1 from '../../assets/images/team/team-2-1.jpg';
import portfolio_1_2 from '../../assets/images/project/portfolio-1-2.jpg';
import portfolio_one_shape_1 from '../../assets/images/shapes/portfolio-one-shape-1.png'
import portfolio_one_shape_2 from '../../assets/images/shapes/portfolio-one-shape-2.png'
import portfolio_1_3 from '../../assets/images/project/portfolio-1-3.jpg'
import {initLightboxJS} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox} from 'lightbox.js-react'
import { useEffect, useState } from "react";



const options = {
  "loop": true,
  "autoplay": true,
  "margin": 30,
  "nav": true,
  "dots": false,
  "smartSpeed": 500,
  "autoplayTimeout": 10000,
  "navText": ["<span class=\"icon-right-arrow\"></span>","<span class=\"icon-right-arrow1\"></span>"],
  "responsive": {
      "0": {
          "items": 1
      },
      "768": {
          "items": 2
      },
      "992": {
          "items": 3
      },
      "1200": {
          "items": 3
      }
  }
}


function Certification(){
    useEffect(() => {
        initLightboxJS("Insert your License Key here", "Insert plan type here");
      }, []);
      let [isOpen, setIsOpen] = useState(false);  
      const images = [
        {
          src: 'https://source.unsplash.com/sQZ_A17cufs/549x711',
        },
    ]
    return(
      <section class="team-two">
        <div class="container">
            <div class="row">
                <div class="col-xl-4">
                    <div class="team-two__left">
                        <h3 class="section__title-two">Meet our team of creative experts</h3>
                        <p class="team-two__text">
                          Lorem ipsum dolor sit amet labore et consectetuer adipiscing elit
                            sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="team-two__right">
                          <OwlCarousel class="team-two__carousel owl-carousel owl-theme thm-owl__carousel" {...options}>
                            <div class="item">
                                <div class="team-two__single">
                                    <div class="team-two__img-box">
                                        <div class="team-two__img">
                                            <img src={team_2_1} alt=""/>
                                        </div>
                                    </div>
                                    <div class="team-two__content">
                                        <div class="team-two__name-box">
                                            <h3 class="team-two__name"><a href="team-details.html">Choi Ming Suk</a>
                                            </h3>
                                            <p class="team-two__sub-title">Co-Founder</p>
                                        </div>
                                        <div class="team-two__social">
                                            <a href="team-details.html"><span class="fab fa-facebook"></span></a>
                                            <a href="team-details.html"><span class="fab fa-instagram"></span></a>
                                            <a href="team-details.html"><span class="fab fa-linkedin"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="team-two__single">
                                    <div class="team-two__img-box">
                                        <div class="team-two__img">
                                            <img src={team_2_1} alt=""/>
                                        </div>
                                    </div>
                                    <div class="team-two__content">
                                        <div class="team-two__name-box">
                                            <h3 class="team-two__name"><a href="team-details.html">Abral Asha</a>
                                            </h3>
                                            <p class="team-two__sub-title">Co-Founder</p>
                                        </div>
                                        <div class="team-two__social">
                                            <a href="team-details.html"><span class="fab fa-facebook"></span></a>
                                            <a href="team-details.html"><span class="fab fa-instagram"></span></a>
                                            <a href="team-details.html"><span class="fab fa-linkedin"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="team-two__single">
                                    <div class="team-two__img-box">
                                        <div class="team-two__img">
                                            <img src={team_2_1} alt=""/>
                                        </div>
                                    </div>
                                    <div class="team-two__content">
                                        <div class="team-two__name-box">
                                            <h3 class="team-two__name"><a href="team-details.html">Alisha Martin</a>
                                            </h3>
                                            <p class="team-two__sub-title">Co-Founder</p>
                                        </div>
                                        <div class="team-two__social">
                                            <a href="team-details.html"><span class="fab fa-facebook"></span></a>
                                            <a href="team-details.html"><span class="fab fa-instagram"></span></a>
                                            <a href="team-details.html"><span class="fab fa-linkedin"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="team-two__single">
                                    <div class="team-two__img-box">
                                        <div class="team-two__img">
                                            <img src={team_2_1} alt=""/>
                                        </div>
                                    </div>
                                    <div class="team-two__content">
                                        <div class="team-two__name-box">
                                            <h3 class="team-two__name"><a href="team-details.html">Choi Ming Suk</a>
                                            </h3>
                                            <p class="team-two__sub-title">Co-Founder</p>
                                        </div>
                                        <div class="team-two__social">
                                            <a href="team-details.html"><span class="fab fa-facebook"></span></a>
                                            <a href="team-details.html"><span class="fab fa-instagram"></span></a>
                                            <a href="team-details.html"><span class="fab fa-linkedin"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="team-two__single">
                                    <div class="team-two__img-box">
                                        <div class="team-two__img">
                                            <img src={team_2_1} alt=""/>
                                        </div>
                                    </div>
                                    <div class="team-two__content">
                                        <div class="team-two__name-box">
                                            <h3 class="team-two__name"><a href="team-details.html">Abral Asha</a>
                                            </h3>
                                            <p class="team-two__sub-title">Co-Founder</p>
                                        </div>
                                        <div class="team-two__social">
                                            <a href="team-details.html"><span class="fab fa-facebook"></span></a>
                                            <a href="team-details.html"><span class="fab fa-instagram"></span></a>
                                            <a href="team-details.html"><span class="fab fa-linkedin"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="team-two__single">
                                    <div class="team-two__img-box">
                                        <div class="team-two__img">
                                            <img src={team_2_1} alt=""/>
                                        </div>
                                    </div>
                                    <div class="team-two__content">
                                        <div class="team-two__name-box">
                                            <h3 class="team-two__name"><a href="team-details.html">Alisha Martin</a>
                                            </h3>
                                            <p class="team-two__sub-title">Co-Founder</p>
                                        </div>
                                        <div class="team-two__social">
                                            <a href="team-details.html"><span class="fab fa-facebook"></span></a>
                                            <a href="team-details.html"><span class="fab fa-instagram"></span></a>
                                            <a href="team-details.html"><span class="fab fa-linkedin"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
}
export default Certification;