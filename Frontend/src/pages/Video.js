import PageHeader from "../components/Video/PageHeader";
import VideosSection from "../components/Video/VideosSection";
import Header from "../components/layout/Header";
import PageFooter from "../components/layout/PageFooter";
import { useDocumentTitle } from "../setDocumentTitle";

function Video() {
  useDocumentTitle("Videos || Prettau Dental Lab");
  return (
    <div>
      <Header />
      <PageHeader />
      <VideosSection/>
      <PageFooter />
    </div>
  );
}

export default Video;
