import Brand from "../components/About/Brand";
import Counter from "../components/About/Counter";
import PageHeader from "../components/About/PageHeader";
import Process from "../components/About/Process";
import Solution from "../components/About/Solution";
import Testimonial from "../components/About/Testimonial";
import Header from "../components/layout/Header";
import PageFooter from "../components/layout/PageFooter";
import { useDocumentTitle } from "../setDocumentTitle";



function About(){
  useDocumentTitle("About || Prettau Dental Lab");

    return(
        <div>
            <Header/>
            <PageHeader/>
            <Solution/>
            <Process/>
            <Counter/>
            <Testimonial/>
            <Brand/>
            <PageFooter/>
        </div>
    )

}

export default About;