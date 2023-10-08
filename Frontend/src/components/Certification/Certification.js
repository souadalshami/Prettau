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
import Fancybox from "../Fancybox"; 


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
                                 
                                    <Fancybox>
                                        <a data-fancybox href={team_2_1} class="img-popup" >
                                          <div   class="team-two__img-box">
                                           <div class="team-two__img">
                                                   <img data-fancybox  src={team_2_1} alt=""/>
                                           </div>
                                           </div>
                                          </a>
                                    </Fancybox>
                                           
                                    
                                          
                                    
                                    <div class="team-two__content">
                                        <div class="team-two__name-box">
                                            <h3 class="team-two__name">Abral Asha
                                            </h3>
                                            <p class="team-two__sub-title">Co-Founder</p>
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