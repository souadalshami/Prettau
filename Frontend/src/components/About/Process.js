
import process_one_shape_1 from '../../assets/images/shapes/process-one-shape-1.png';


function Process(){

    return(
        <section className="process-one process-two">
        <div className="container">
            <h3 className="section__title-two">Our Work process</h3>
            <div className="process-one__inner">
                <div className="process-one__shape-1">
                    <img src={process_one_shape_1 } alt=""/>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="process-one__single">
                            <div className="process-one__count"></div>
                            <h3 className="process-one__title">Identifying Problems</h3>
                            <p className="process-one__text">Lorem ipsum dolor sit amet,<br/> adipiscing elit, sed do
                                eiusmod
                                ut<br/>
                                dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="process-one__single">
                            <div className="process-one__count"></div>
                            <h3 className="process-one__title">Research Your Problem</h3>
                            <p className="process-one__text">Lorem ipsum dolor sit amet,<br/> adipiscing elit, sed do
                                eiusmod
                                ut<br/>
                                dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="process-one__single">
                            <div className="process-one__count"></div>
                            <h3 className="process-one__title">Solutions Your Problem</h3>
                            <p className="process-one__text">Lorem ipsum dolor sit amet,<br/> adipiscing elit, sed do
                                eiusmod
                                ut<br/>
                                dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="process-one__single">
                            <div className="process-one__count"></div>
                            <h3 className="process-one__title">Consultation With Experts</h3>
                            <p className="process-one__text">Lorem ipsum dolor sit amet,<br/> adipiscing elit, sed do
                                eiusmod
                                ut<br/>
                                dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )

}

export default Process;