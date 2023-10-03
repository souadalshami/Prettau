
import background   from '../../assets/images/backgrounds/page-header-bg.jpg'


function PageHeader(){
    return(
        <section class="page-header">
        <div class="page-header__bg"  style={{ backgroundImage: `url(${background})` }}>
        </div>
        <div class="page-header__shape-1 float-bob-y">
            <img src="assets/images/shapes/page-header-shape-1.png" alt=""/>
        </div>
        <div class="page-header__shape-2 float-bob-x">
            <img src="assets/images/shapes/page-header-shape-2.png" alt=""/>
        </div>
        <div class="page-header__shape-3 float-bob-y">
            <img src="assets/images/shapes/page-header-shape-3.png" alt=""/>
        </div>
        <div class="page-header__shape-4 float-bob-x">
            <img src="assets/images/shapes/page-header-shape-4.png" alt=""/>
        </div>
        <div class="container">
            <div class="page-header__inner">
                <h2>Certificates</h2>
                <ul class="thm-breadcrumb list-unstyled">
                    <li><a href="index.html">Home</a></li>
                    <li><span class="icon-down-arrow"></span></li>
                    <li>Certificates</li>
                </ul>
            </div>
        </div>
    </section>
    )
}
export default PageHeader;