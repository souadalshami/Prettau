
import ContactForm from "../components/Contact/ContactForm";
import ContactHeader from "../components/Contact/ContactHeader";
import Information from "../components/Contact/Information";
import Header from "../components/layout/Header";
import PageFooter from "../components/layout/PageFooter";
import { useDocumentTitle } from "../setDocumentTitle";


function Contact (){
  useDocumentTitle("Contact || Prettau Dental Lab");

    return(
        <div>
            <Header/>
            <ContactHeader/>
            <Information/>
            <ContactForm/>
            <PageFooter/>
        </div>
    )
}

export default Contact ;