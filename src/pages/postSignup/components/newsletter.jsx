import NewsletterSvg from '../svgfiles/newsletter';
import HeaderText from '../../../components/headerText/headerText';
import NormalText from '../../../components/normalText/normalText';
import GeneralButton from '../../../components/GeneralButton';
import './styles.scss';
const Newsletter = () => {
  return (
    <div className='section_container'>
      <NewsletterSvg />
      <HeaderText
        text='Sign up for our newsletter'
        className='subHeader newsletter_header'
      />
      <NormalText
        text='We promise not to span you :)'
        className='subText newsletter_subtext'
      />

      <div className='input_form_container'>
        <input
          className='newsletter-input'
          type='email'
          name='email'
          placeholder='your email address'
        />
        <GeneralButton
          buttonText='Submit'
          borderRadius='8px'
          fontSize='16px'
          fontWeight='600'
          className='submit'
        />
      </div>
    </div>
  );
};

export default Newsletter;
