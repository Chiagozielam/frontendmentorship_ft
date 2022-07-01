import './styles.scss';
import HeaderText from '../../../components/headerText/headerText';
import NormalText from '../../../components/normalText/normalText';
import GeneralButton from '../../../components/GeneralButton';
import { Avatar } from 'antd';
const Community = () => {
  return (
    <div className='section_container community_section'>
      <HeaderText
        text='Join our community'
        className='subHeader join_our_community_header'
      />

      <Avatar.Group size={40}>
        <Avatar src='https://res.cloudinary.com/dmrdnero7/image/upload/v1656593732/frontendMentorship/avatar1_vv9v7d.png' />
        <Avatar src='https://res.cloudinary.com/dmrdnero7/image/upload/v1656593732/frontendMentorship/avatar2_bq5ypl.png' />
        <Avatar src='https://res.cloudinary.com/dmrdnero7/image/upload/v1656593732/frontendMentorship/avatar3_urrupk.png' />
        <Avatar src='https://res.cloudinary.com/dmrdnero7/image/upload/v1656593732/frontendMentorship/avatar4_puqc81.png' />
        <Avatar src='https://res.cloudinary.com/dmrdnero7/image/upload/v1656593732/frontendMentorship/avatar5_lu7imo.png' />
        <Avatar src='https://res.cloudinary.com/dmrdnero7/image/upload/v1656593732/frontendMentorship/avatar1_vv9v7d.png' />
        <Avatar src='https://res.cloudinary.com/dmrdnero7/image/upload/v1656593732/frontendMentorship/avatar2_bq5ypl.png' />
        <Avatar src='https://res.cloudinary.com/dmrdnero7/image/upload/v1656593732/frontendMentorship/avatar3_urrupk.png' />
        <Avatar src='https://res.cloudinary.com/dmrdnero7/image/upload/v1656593732/frontendMentorship/avatar4_puqc81.png' />
        <Avatar src='https://res.cloudinary.com/dmrdnero7/image/upload/v1656593732/frontendMentorship/avatar5_lu7imo.png' />
      </Avatar.Group>

      <NormalText
        text='Join these and 10,000 others in the frontend community'
        className='subText join_these_and_others'
      />

      <NormalText
        text='Important resources and informations are shared here. You can also get help from othersImportant resources and informations are shared here. You can also get help from others'
        className='subText important_resource'
      />

      <GeneralButton buttonText='Join now' className='join_now_btn' />
    </div>
  );
};

export default Community;
