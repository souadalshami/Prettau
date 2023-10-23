
import process_one_shape_1 from '../../assets/images/shapes/process-one-shape-1.png';
import { t } from "i18next";
import { Trans } from 'react-i18next';

function Process(){

    return(
    <section className="process-one process-two">
        <div className="container">
            <h3 className="section__title-two">
                {t('about-process-title')}</h3>
            <div className="process-one__inner">
                <div className="process-one__shape-1">
                    <img src={process_one_shape_1 } alt=""/>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="process-one__single">
                            <div className="process-one__count"></div>
                            <h3 className="process-one__title">{t('about-Process-one-title')}</h3>
                            <p className="process-one__text">
                                <Trans i18nKey="about-Process-one-description"></Trans>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="process-one__single">
                            <div className="process-one__count"></div>
                            <h3 className="process-one__title">{t('about-Process-two-title')}</h3>
                            <p className="process-one__text">
                                <Trans i18nKey="about-Process-two-description"></Trans>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="process-one__single">
                            <div className="process-one__count"></div>
                            <h3 className="process-one__title">{t('about-Process-three-title')}</h3>
                            <p className="process-one__text">
                                <Trans i18nKey="about-Process-three-description"></Trans>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="process-one__single">
                            <div className="process-one__count"></div>
                            <h3 className="process-one__title">{t('about-Process-four-title')}</h3>
                            <p className="process-one__text">
                                <Trans i18nKey="about-Process-four-description"></Trans>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )

}

export default Process;