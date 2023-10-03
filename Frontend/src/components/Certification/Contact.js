
import background   from '../../assets/images/backgrounds/cta-four-bg.png'


function Contact(){

    return(
        <section class="cta-four">
        <div class="container">
            <div class="cta-four__inner">
                <div class="cta-four__bg float-bob-x"  style={{ backgroundImage: `url(${background})` }}>
                </div>
                <h3 class="cta-four__title">Let's discuss how can we help <br/> make your Business better</h3>
                <div class="cta-four__btn-box">
                    <a href="about.html" class="cta-four__btn thm-btn">Let's Together Quotes</a>
                </div>
            </div>
        </div>
    </section>
    )



}
export default Contact