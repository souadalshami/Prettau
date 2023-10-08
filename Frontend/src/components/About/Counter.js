
import background from '../../assets/images/backgrounds/counter-one-bg.png'
import CountUp from "react-countup";

function Counter(){

    return(
        <section className="counter-one">
            <div className="container">
                <div className="counter-one__inner">
                    <div className="counter-one__bg float-bob-y" style={{ backgroundImage: `url(${background})` }} ></div>
                    <ul className="counter-one__count-list list-unstyled">
                        <li>
                            <div className="counter-one__icon">
                                <span className="icon-icon-years-experience"></span>
                            </div>
                            <div className="counter-one__count count-box">
                                <h3 className="count-text" data-stop="10" data-speed="1500">
                                 <CountUp
                                    end={9}
                                    duration={9}
                                    enableScrollSpy
                                    scrollSpyOnce
                                     />
                                </h3>
                            </div>
                            <p className="counter-one__text">Years of Experience</p>
                        </li>
                        <li>
                            <div className="counter-one__icon">
                                <span className="icon-icon-team-members"></span>
                            </div>
                            <div className="counter-one__count count-box">
                                <h3 className="count-text" data-stop="89" data-speed="1500">
                                  <CountUp
                                    end={350}
                                    duration={25}
                                    enableScrollSpy
                                    scrollSpyOnce
                                     />
                                     <span>+</span>
                                </h3>
                            </div>
                            <p className="counter-one__text">Team members</p>
                        </li>
                        <li>
                            <div className="counter-one__icon">
                                <span className="icon-icon-successful-project"></span>
                            </div>
                            <div className="counter-one__count count-box">
                                <h3 className="count-text" data-stop="789" data-speed="1500">
                                <CountUp
                                    end={40}
                                    duration={11}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                                </h3>
                                <span>K</span>
                            </div>
                            <p className="counter-one__text">Successful Projects</p>
                        </li>
                        <li>
                            <div className="counter-one__icon">
                                <span className="icon-icon-satisfied-clients"></span>
                            </div>
                            <div className="counter-one__count count-box">
                                <h3 className="count-text" data-stop="650" data-speed="1500">
                                 <CountUp
                                    end={30}
                                    duration={10}
                                    enableScrollSpy
                                    scrollSpyOnce
                        />
                                </h3>
                                <span>K</span>
                            </div>
                            <p className="counter-one__text">Satisfied Clients</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default Counter;