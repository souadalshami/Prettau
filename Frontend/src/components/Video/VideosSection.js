import Fancybox from "../Fancybox.js"; 
 import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Dubai from '../../assets/images/team/Dubai.jpg';
import AEEDC from '../../assets/images/team/AEEDC.jpg';
import New_year from '../../assets/images/team/New_year.jpg';
export default function VideosSection() { 

    const options = {
    "loop": false,
    "autoplay": true,
    "margin": 30,
    "nav": true,
    "dots": true,
    "smartSpeed": 500,
    "autoplayTimeout": 10000,
    "navText": ["<span className=\"icon-right-arrow\"></span>","<span className=\"icon-right-arrow1\"></span>"],
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

return ( 
    <section class="team-carousel-page">
        <div class="container">
            <OwlCarousel class="team-carousel thm-owl__carousel owl-theme owl-carousel carousel-dot-style" {...options}>
                <div class="item">
                    <div class="team-one__single">
                        <Fancybox>
                            <a data-fancybox href="https://www.youtube.com/watch?v=Cr9JyX-Bwlo">
                                <img class="card-img-top img-fluid" src={AEEDC} /> 
                            </a>                            
                        </Fancybox>
                        <div class="team-one__content">
                            <h3 class="team-one__name">
                                <a href="https://www.youtube.com/watch?v=Cr9JyX-Bwlo" target="_blank">AEEDC 2020</a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="team-one__single">
                        <Fancybox>
                            <a data-fancybox href="https://www.youtube.com/watch?v=0slrHvSzt_s">
                                <img class="card-img-top img-fluid" src={New_year} /> 
                            </a>                            
                        </Fancybox>
                        <div class="team-one__content">
                            <h3 class="team-one__name">
                                <a href="https://www.youtube.com/watch?v=0slrHvSzt_s" target="_blank">New year with Prettau</a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="team-one__single">
                        <Fancybox>
                            <a data-fancybox href="https://www.youtube.com/watch?v=5iTqUp6Vuds">
                                <img class="card-img-top img-fluid" src={Dubai} /> 
                            </a>                            
                        </Fancybox>
                        <div class="team-one__content">
                            <h3 class="team-one__name">
                                <a href="https://www.youtube.com/watch?v=5iTqUp6Vuds" target="_blank">E-MAX</a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="team-one__single">
                        <Fancybox>
                            <a data-fancybox href="https://www.youtube.com/watch?v=cxjBtN7uC-g">
                                <img class="card-img-top img-fluid" src={Dubai} /> 
                            </a>                            
                        </Fancybox>
                        <div class="team-one__content">
                            <h3 class="team-one__name">
                                <a href="https://www.youtube.com/watch?v=cxjBtN7uC-g" target="_blank">Zircon</a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="team-one__single">
                        <Fancybox>
                            <a data-fancybox href="https://www.youtube.com/watch?v=cxjBtN7uC-g">
                                <img class="card-img-top img-fluid" src={Dubai} /> 
                            </a>                            
                        </Fancybox>
                        <div class="team-one__content">
                            <h3 class="team-one__name">
                                <a href="https://www.youtube.com/watch?v=cxjBtN7uC-g" target="_blank">Zircon</a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="team-one__single">
                        <Fancybox>
                            <a data-fancybox href="https://www.youtube.com/watch?v=d9fh2NhFF_Y&t=7s">
                                <img class="card-img-top img-fluid" src={Dubai} /> 
                            </a>                            
                        </Fancybox>
                        <div class="team-one__content">
                            <h3 class="team-one__name">
                                <a href="https://www.youtube.com/watch?v=d9fh2NhFF_Y&t=7s" target="_blank">Soon in AEEDC</a>
                            </h3>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    </section>

); 
}