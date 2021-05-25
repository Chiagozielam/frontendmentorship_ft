import React, { useState, useRef, useEffect, useContext } from 'react'
import axios from 'axios'
import { Button } from 'antd'
import { withRouter } from 'react-router'
import { useHistory } from 'react-router-dom'
import './styles.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faCog } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import CustomModal from '../../../components/customModal/CustomModal';
import NormalInput from '../../../components/form/normalInput/normalInput';
import ButtonWithIcon from '../../../components/buttonWithIcon/ButtonWithIcon'
import GeneralContext from '../../../context/generalContext/GeneralContext'
import AuthContext from '../../../context/authContext/AuthContext'
import GeneralModal from '../../../components/modals/general-modal/GeneralModal'
import { BASE_URI } from '../../../constants/baseUri'

const ProfilePage = () => {
  const [showEditProfileModal, setShowEditProfileModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [profileImage, setProfileimage] = useState('')
  const [bio, setBio] = useState('')
  const [githubUrl, setGithubUrl] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')

  // This state specifically holds the data for the edit profile image
  const [editProfileImage, setEditProfileImage] = useState(null)

  const { push } = useHistory()

  const { generalState: { user, userToken } } = useContext(GeneralContext)
  const { updateProfileInfo } = useContext(AuthContext)


  useEffect(() => {
    setProfileimage(user.profilePhoto)
     setBio(user.bioData)
    setGithubUrl(user.githubUrl)
    setTwitterUrl(user.twitterUrl)
    setLinkedinUrl(user.linkedinUrl)
  }, [])

  const onShowOrHideEditProfileModal = () => {
    setShowEditProfileModal(!showEditProfileModal)
  }

  const onUpdateProfile = async (e) => {
    setIsLoading(true)
    let data = new FormData();
    data.append('githubUrl', githubUrl);
    data.append('twitterUrl', twitterUrl);
    data.append('linkedinUrl', linkedinUrl);
    data.append('bioData', bio);
    if(editProfileImage !== null){
     data.append('profilePhoto', editProfileImage)
    }
    updateProfileInfo(setIsLoading, data, push, setShowEditProfileModal)
  }

  return (
    <div className="profile-page-container">
      <GeneralModal
        modalOpened={showEditProfileModal}
        setModalOpened={setShowEditProfileModal}
        width="50%"
        height="80%"
      >
        <div className="edit-profile-modal">
          <div className="button-container">
            <Button onClick={onShowOrHideEditProfileModal} style={{ color: "#061088"}} type="text">
              Cancel
            </Button>
            <Button type="primary" onClick={onUpdateProfile} loading={isLoading} style={{ backgroundColor: '#061088', border: 'none'}}>Save</Button>
          </div>

          <div style={{ height: '20px' }} />
            <div
              className="change-img-container"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div
                className="image-url-container"
                style={{
                  backgroundImage: `url(${profileImage})`,
                  width: "100px",
                  height: "100px",
                  backgroundSize: "cover",
                  backgroundPositionX: "center",
                  borderRadius: "60px",
                  margin: "2% auto",
                  marginBottom: 0
                }}
              >
            </div>
            <label
              className="change-image-round-btn"
              htmlFor="change-image"
              style={{
                backgroundColor: "#F14A03",
                width: "37px",
                height: "37px",
                borderRadius: "18.5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "-5%",
                marginLeft: "12%",
                color: "white",
                cursor: "pointer"   
              }}
            >
              <FontAwesomeIcon icon={faCameraRetro} />
              <input type="file" name="profilePhoto" id="change-image" style={{ display: 'none' }}
                onChange={ async (event) => {
                  let imageUrl = event.target.files[0]
                  // imageUrl = imageUrl.split(/:(.+)/)[1]
                    const reader = new FileReader()
                    reader.readAsDataURL(imageUrl);
                    reader.onload = (e) => {
                      setProfileimage(e.target.result)
                    }
                  setEditProfileImage(event.target.files[0])
                }}
                accept="image/*" />
            </label>
          </div>
          <div className="input-fields-container">
            <div className="inputs">
              <NormalInput
                label="Bio Data"
                iconName="mail"
                type="text"
                inputColor="#5A5656"
                inputTextColor="white"
                value={bio}
                labelPadding=".5% 3%"
                name="bioData"
                onChange={(event) => {
                setBio(event.target.value)
                }}
              />
            </div>
            <div style={{ height: '20px' }} />
            <NormalInput
              label="Github URL"
              iconName="mail"
              type="text"
              inputColor="#5A5656"
              inputTextColor="white"
              labelPadding=".5% 3%"
              value={githubUrl}
              name="githubUrl"
              onChange={(event) => {
              setGithubUrl(event.target.value)
              }}
            />
            <div style={{ height: '20px' }} />
            <NormalInput
              label="Twitter URL"
              iconName="mail"
              type="text"
              inputColor="#5A5656"
              inputTextColor="white"
              labelPadding=".5% 3%"
              value={twitterUrl}
              name="twitterUrl"
              onChange={(event) => {
              setTwitterUrl(event.target.value)
              }}
            />
            <div style={{ height: '20px' }} />
            <NormalInput
              label="LinkedIn URL"
              iconName="mail"
              type="text"
              inputColor="#5A5656"
              inputTextColor="white"
              labelPadding=".5% 3%"
              value={linkedinUrl}
              name="linkedinUrl"
              onChange={(event) => {
              setLinkedinUrl(event.target.value)
              }}
            />
          </div>
        </div>
      </GeneralModal>
      
      
      
      
      
      
      
      
      
      <div className="profile-page">
        <div className="inner-profile">
          <div className="image-url-container" style={{backgroundImage: `url(${user.profilePhoto})`}}></div>
          <p className="name">{user.fullname}</p>
          <p className="bio">{user.bioData}</p>
          <div className="edit-button-container">
            <ButtonWithIcon
              buttonText="Edit profile"
              icon={faCog}
              fontSize="12px"
              iconSize="14px"
              bgcolor="rgba(24, 36, 67, 0.67)"
              iconColor="white"
              textColor="white"
              onClick={onShowOrHideEditProfileModal}
            />
          </div>
          <div className="social-media-links">
            <div className="link-container">
              <div className="inner-link-container">
                <FontAwesomeIcon icon={faGithub} className="link-icon" />
                <p>{user.githubUrl}</p>
              </div>
              <FontAwesomeIcon onClick={onShowOrHideEditProfileModal}  icon={faCog} size={20} className="cog-icon" />
            </div>

            <div className="link-container">
              <div className="inner-link-container">
                <FontAwesomeIcon icon={faTwitter} className="link-icon" />
                <p>{user.twitterUrl}</p>
              </div>
              <FontAwesomeIcon  onClick={onShowOrHideEditProfileModal} icon={faCog} size={20} className="cog-icon" />
            </div>

            <div className="link-container">
              <div className="inner-link-container">
                <FontAwesomeIcon icon={faLinkedin} className="link-icon" />
                <p>{user.linkedinUrl}</p>
              </div>
              <FontAwesomeIcon  onClick={onShowOrHideEditProfileModal} icon={faCog} size={20} className="cog-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ProfilePage)
