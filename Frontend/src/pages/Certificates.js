import Certification from "../components/Certification/Certification";
import PageHeader from "../components/Certification/PageHeader";
import Header from "../components/layout/Header";
import PageFooter from "../components/layout/PageFooter";
import Contact from "../components/Certification/Contact";



function Certificates(){
    return(
        <div>
            <Header/>
            <PageHeader/>
            <Certification/>
            <Contact/>
            <PageFooter/>
        </div>


    )
}


export default Certificates;