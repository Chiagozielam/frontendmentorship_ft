import React from 'react';
import Footer from '../../sections/footer/Footer';
import AboutMe from '../../sections/landingPage/aboutMe/AboutMe';
import CurriculumAndTestimonialsContainer from '../../sections/landingPage/curriculumAndTestimonials/CurriculumAndTextimonials';
import DisclaimerSection from '../../sections/landingPage/disclaimerSection/disclaimerSection';
import Faq from '../../sections/landingPage/faq/Faq';
import Newsletter from '../../sections/landingPage/newsletter/Newsletter';
import TopSection from '../../sections/landingPage/topSection/topSection'
import VideoContent from '../../sections/landingPage/videoContent/VideoContent';

const LandingPage = () => {
  return (
    <div>
      <TopSection />
      <VideoContent />
      <DisclaimerSection />
      <CurriculumAndTestimonialsContainer />
      <AboutMe />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default LandingPage
