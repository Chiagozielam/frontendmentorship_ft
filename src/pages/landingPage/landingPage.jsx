import GeneralButton from "../../components/GeneralButton";
import TopSection from "../../sections/landingPage/topSection/topSection";
import PaymentPlan from "../../sections/landingPage/paymentPlan/paymentPlan";
import "./landingPage.scss";
import VideoContent from "../../sections/landingPage/videoContent/VideoContent";
import Curriculum from "../../sections/landingPage/curriculum/Curriculum";
import Testimonies from "../../sections/landingPage/testimonies/testimonies";
import Newsletter from "../../sections/landingPage/newsletter/Newsletter";
import AboutMe from "../../sections/landingPage/aboutMe/AboutMe";
import Footer from "../../sections/footer/Footer";
import { AlignRightOutlined } from "@ant-design/icons";

const LandingPage = () => {
  return (
    <div className="wrapper">
      <TopSection />

      <PaymentPlan />
      <div className="video_and_curriculum_container">
        <VideoContent />
        <Curriculum />
      </div>

      <Testimonies />

      <Newsletter />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default LandingPage;
