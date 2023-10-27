import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import emax from '../../assets/images/brand/emax.png' ; 
import juvora from '../../assets/images/brand/juvora.png' ; 
import vita from '../../assets/images/brand/vita.png' ; 
import viv from '../../assets/images/brand/viv.png' ; 
 

const options = {
    "items": 5,
    "margin": 30,
    "smartSpeed": 700,
    "loop":true,
    "autoplay": 6000,
    "nav":false,
    "dots":false,
    "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
    "responsive":{
        "0":{
            "items":1
        },
        "768":{
            "items":3
        },
        "992":{
            "items": 4
        },
        "1200":{
            "items": 5
        }
    }
}

function Brand(){

    return(
        <section className="brand-one"  >
            <div className="container">
                <div className="brand-one__inner">
                    <OwlCarousel  className="brand-one__carousel thm-owl__carousel owl-theme owl-carousel " {...options}>
                        <div className="brand-one__single">
                            <div className="brand-one__img">
                                <a href="https://www.ivoclarvivadent.co.uk/en-uk/" target="_blank">
                                    <img src={emax} alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="brand-one__single">
                            <div className="brand-one__img">
                                <a href="https://juvoradental.com/en/" target="_blank">
                                    <img src={juvora} alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="brand-one__single">
                            <div className="brand-one__img">
                                <a href="https://www.vita-zahnfabrik.com/" target="_blank">
                                    <img src={vita} alt=""/>                                
                                </a>
                            </div>
                        </div>
                        <div className="brand-one__single">
                            <div className="brand-one__img">
                                <a href="https://www.ivoclarvivadent.co.uk/en-uk/" target="_blank">
                                    <img src={viv} alt=""/>
                                </a>
                            </div>
                        </div>
                    </OwlCarousel>

                </div>
            </div>
        </section>
    )

}

export default Brand;