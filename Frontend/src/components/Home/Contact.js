import { Link } from 'react-router-dom'
import cta_one_shape_1 from '../../assets/images/shapes/cta-one-shape-1.png'
import cta_one_shape_2 from '../../assets/images/shapes/cta-one-shape-2.png'
import cta_one_shape_3 from '../../assets/images/shapes/cta-one-shape-3.png'
import cta_one_shape_4 from '../../assets/images/shapes/cta-one-shape-4.png'



function Contact(){

    return(
        <section class="cta-one">
            <div class="cta-one__shape-1 float-bob-x">
                <img src={cta_one_shape_1} alt=""/>
            </div>
            <div class="cta-one__shape-2 float-bob-y">
                <img src={cta_one_shape_2} alt=""/>
            </div>
            <div class="cta-one__shape-3 shape-mover">
                <img src={cta_one_shape_3} alt=""/>
            </div>
            <div class="cta-one__shape-4 img-bounce">
                <img src={cta_one_shape_4} alt=""/>
            </div>
            <div class="container">
                <div class="cta-one__inner">
                    <div class="cta-one__title-box">
                        <h3 class="cta-one__title">Make an appointment at <br/> Prettau Dental Lab</h3>
                        <p class="cta-one__text">Our care teams are here to make you feel comfortable and accepted in our welcoming, <br/>judgement free space so you can move forward confidently in your own dental care journey.</p>
                    </div>
                    <div class="cta-one__btn-box">
                        <Link to="/contact" class="cta-one__btn thm-btn">Contact Us</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;