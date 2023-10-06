import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
function Testimonial(){

    return(
        <section className="testimonial-two testimonial-four">
            <div className="container">
                <h3 className="section__title-two">People talking about us</h3>
                <div className="testimonial-two__bottom">
                    <OwlCarousel classNameName="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel" {...options}>
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__client-img">
                                <img src="assets/images/testimonial/testimonial-2-1.jpg" alt=""/>
                            </div>
                            <div className="testimonial-two__client-info">
                                <h3>Jacob Jones</h3>
                                <p>certificate of compliance</p>
                            </div>
                            <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry."</p>
                            <div className="testimonial-two__ratting">
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                            </div>
                        </div>
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__client-img">
                                <img src="assets/images/testimonial/testimonial-2-1.jpg" alt=""/>
                            </div>
                            <div className="testimonial-two__client-info">
                                <h3>Jacob Jones</h3>
                                <p>CEO & Co-Founder</p>
                            </div>
                            <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry."</p>
                            <div className="testimonial-two__ratting">
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>

    )

}
export default Testimonial;