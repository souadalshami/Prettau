
import { Link } from 'react-router-dom'
import background   from '../../assets/images/backgrounds/page-header-bg.jpg'
import page_header_shape_1   from '../../assets/images/shapes/page-header-shape-1.png'
import page_header_shape_2   from '../../assets/images/shapes/page-header-shape-2.png'
import page_header_shape_3   from '../../assets/images/shapes/page-header-shape-3.png'
import page_header_shape_4   from '../../assets/images/shapes/page-header-shape-4.png'
import { t } from "i18next";

function PageHeader(){

    return(
        <section class="page-header">
            <div class="page-header__bg" style={{ backgroundImage: `url(${background})` }}>
            </div>
            <div class="page-header__shape-1 float-bob-y">
                <img src={page_header_shape_1} alt=""/>
            </div>
            <div class="page-header__shape-2 float-bob-x">
                <img src={page_header_shape_2} alt=""/>
            </div>
            <div class="page-header__shape-3 float-bob-y">
                <img src={page_header_shape_3} alt=""/>
            </div>
            <div class="page-header__shape-4 float-bob-x">
                <img src={page_header_shape_4} alt=""/>
            </div>
            <div class="container">
                <div class="page-header__inner">
                    <h2>{t('products')}</h2>
                    <ul class="thm-breadcrumb list-unstyled">
                        <li><Link to="/">{t('home')}</Link></li>
                        <li><span class="icon-down-arrow"></span></li>
                        <li>{t('products')}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}


export default PageHeader;