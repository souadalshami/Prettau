import React, {useState} from "react";

const MobileNav = ()=>{
    const [isExpanded,setIsExpanded]=useState(false);
    const toggleNav =() =>{
        setIsExpanded(!isExpanded);
        document.body.classList.toggle('locked');
    };
    
return(

    <div className={`mobile-nav_wrapper  ${isExpanded ? 'expanded' :''}`}>
        <div class="mobile-nav__overlay mobile-nav__toggler" onClick={toggleNav}></div>
        <div class="mobile-nav__content">
            <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>

            <div class="logo-box">
                <a href="index.html" aria-label="logo image"><img src="assets/images/resources/logo-1.png" width="145"
                        alt="" /></a>
            </div>
            <div class="mobile-nav__container"></div>
            <ul class="mobile-nav__contact list-unstyled">
                <li>
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:needhelp@packageName__.com">needhelp@bixola.com</a>
                </li>
                <li>
                    <i class="fa fa-phone-alt"></i>
                    <a href="tel:666-888-0000">666 888 0000</a>
                </li>
            </ul>
            <div class="mobile-nav__top">
                <div class="mobile-nav__social">
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-facebook-square"></a>
                    <a href="#" class="fab fa-pinterest-p"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div>
            </div>
        </div>
    </div>        
)

}
export default MobileNav;
