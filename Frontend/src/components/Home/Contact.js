import { Link } from 'react-router-dom'
import cta_one_shape_1 from '../../assets/images/shapes/cta-one-shape-1.png'
import cta_one_shape_2 from '../../assets/images/shapes/cta-one-shape-2.png'
import cta_one_shape_3 from '../../assets/images/shapes/cta-one-shape-3.png'
import cta_one_shape_4 from '../../assets/images/shapes/cta-one-shape-4.png'
import { t } from "i18next";
import { Trans } from 'react-i18next';


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
                        <h3 class="cta-one__title"><Trans i18nKey="home-Contact-title"></Trans></h3>
                        <p class="cta-one__text"><Trans i18nKey="home-Contact-description"></Trans></p>
                </div>
                    <div class="cta-one__btn-box">
                        <Link to="/contact" class="cta-one__btn thm-btn">{t('home-Contact-button')}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;