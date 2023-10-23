
import background   from '../../assets/images/backgrounds/cta-four-bg.png'
import { Link } from 'react-router-dom'
import { t } from "i18next";
import { Trans } from 'react-i18next';

function Contact(){

    return(
        <section class="cta-four">
        <div class="container">
            <div class="cta-four__inner">
                <div class="cta-four__bg float-bob-x"  style={{ backgroundImage: `url(${background})` }}>
                </div>
                <h3 class="cta-four__title">
                    <Trans i18nKey="certificates-contact-title"></Trans>
                </h3>
                <div class="cta-four__btn-box">
                    <Link to="/contact" class="cta-four__btn thm-btn">{t('certificates-contact-button')}</Link>
                </div>
            </div>
        </div>
    </section>
    )



}
export default Contact