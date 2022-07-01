import './styles.scss';
import ThinkingImage from '../svgfiles/questionaireSvg';
import HeaderText from '../../../components/headerText/headerText';
import NormalText from '../../../components/normalText/normalText';
import GeneralButton from '../../../components/GeneralButton';
const Questionaire = () => {
  return (
    <div className='section_container'>
      <ThinkingImage />
      <HeaderText text='Take Questionaire' className='subHeader' />
      <NormalText
        text='To claime scholarship and recieve the promo code, you have to complete this questionnaire'
        className='subText'
      />
      <GeneralButton buttonText='Take questionaire' className='btn' />
    </div>
  );
};

export default Questionaire;
