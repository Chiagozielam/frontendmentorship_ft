import './styles.scss';
import HeaderText from '../../components/headerText/headerText';
import NormalText from '../../components/normalText/normalText';
import DotsSvg from './svgfiles/dots';
import Questionaire from './components/questionaire';
import Community from './components/community';
import Newsletter from './components/newsletter';
import { useState } from 'react';
import GeneralButton from '../../components/GeneralButton';
import { Carousel } from 'antd';

const PostSignup = () => {
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className='carousel_arrow right' onClick={onClick}>
        <GeneralButton
          buttonText='Continue'
          className='slide_btn continue_btn'
        />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className='carousel_arrow left' onClick={onClick}>
        <GeneralButton buttonText='Previous' className='slide_btn' />
      </div>
    );
  };

  const caroselSettings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className='postsignup_container'>
      <h2 className='logo'>FRONTEND MENTORSHIP</h2>
      <DotsSvg className='dots' />
      <HeaderText className='header' text='Congratulations for signing up!' />
      <NormalText
        className='subText'
        text='You will recieve a mail from us when we launch and lessons begins shortly after. While waiting you could:'
      />
      {/* {tabArray[stepNumber].component} */}

      <Carousel arrows={true} {...caroselSettings}>
        <div>
          <Questionaire />
        </div>
        <div>
          <Community />
        </div>
        <div>
          <Newsletter />
        </div>
      </Carousel>

      {/* <div class='footer_btns_div'>
        <GeneralButton buttonText='Previous' className='prev_btn' />
        <GeneralButton buttonText='Continue' className='continue_btn' />
      </div> */}
    </div>
  );
};

export default PostSignup;
