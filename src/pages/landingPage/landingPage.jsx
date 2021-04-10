import React from 'react';
import TopNavigation from '../../components/topNavigation/topNavigation';
import Footer from '../../sections/footer/Footer';
import AboutMe from '../../sections/landingPage/aboutMe/AboutMe';
import CurriculumAndTestimonialsContainer from '../../sections/landingPage/curriculumAndTestimonials/CurriculumAndTextimonials';
import DisclaimerSection from '../../sections/landingPage/disclaimerSection/disclaimerSection';
import Newsletter from '../../sections/landingPage/newsletter/Newsletter';
import TopSection from '../../sections/landingPage/topSection/topSection'
import VideoContent from '../../sections/landingPage/videoContent/VideoContent';

const LandingPage = () => {
  return (
    <div>
      <TopSection />
      <DisclaimerSection />
      <VideoContent />
      <CurriculumAndTestimonialsContainer />
      <AboutMe />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default LandingPage
