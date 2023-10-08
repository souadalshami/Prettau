import PageHeader from "../components/Evants/PageHeader";
import EvantsSection from "../components/Evants/EvantsSection";
import Header from "../components/layout/Header";
import PageFooter from "../components/layout/PageFooter";
import { useDocumentTitle } from "../setDocumentTitle";

function Evants() {
  useDocumentTitle("Events || Prettau Dental Lab");
  return (
    <div>
      <Header />
      <PageHeader />
      <EvantsSection/>
      <PageFooter />
    </div>
  );
}

export default Evants;
