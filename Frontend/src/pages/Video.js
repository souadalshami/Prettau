import PageHeader from "../components/Video/PageHeader";
import VideosSection from "../components/Video/VideosSection";
import Header from "../components/layout/Header";
import PageFooter from "../components/layout/PageFooter";

function Video() {
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
