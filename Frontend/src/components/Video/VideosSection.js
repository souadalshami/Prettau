import Fancybox from "../Fancybox.js"; 
 import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function VideosSection() { 

    const options = {
    "loop": true,
    "autoplay": true,
    "margin": 30,
    "nav": true,
    "dots": false,
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
                        <div class="">
                            <div class="">
                                <Fancybox>
                                <a data-fancybox href="https://www.youtube.com/watch?v=5iTqUp6Vuds"> 
        <img class="card-img-top img-fluid" src="https://img.youtube.com/vi/PcqquLJSneU/mqdefault.jpg" /> 
      </a>                            
                                </Fancybox>
                            </div>
                            <div class="team-one__content">
                            <h3 class="team-one__name">
                                <a href="team-details.html">one Khanom</a>
                            
                            </h3>
                            <p class="team-one__sub-title">Founder and CEO</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    </section>

); 
}