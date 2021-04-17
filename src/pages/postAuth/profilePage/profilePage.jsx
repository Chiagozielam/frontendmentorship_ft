import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'antd'
import { withRouter } from 'react-router'
import './styles.scss'
import { profileData } from './data'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faCog } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import CustomModal from '../../../components/customModal/CustomModal';
import NormalInput from '../../../components/form/normalInput/normalInput';

const ProfilePage = () => {
  const [showEditProfileModal, setShowEditProfileModal] = useState(false)
  const [profileImage, setProfileimage] = useState('')
  const [bio, setBio] = useState('')
  const [githubUrl, setGithubUrl] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')

  useEffect(() => {
    setProfileimage(profileData.imageUrl)
    setBio(profileData.bio)
    setGithubUrl(profileData.githubUrl)
    setTwitterUrl(profileData.twitterUrl)
    setLinkedinUrl(profileData.linkedInUrl)
  }, [profileImage])

  const onShowOrHideEditProfileModal = () => {
    setShowEditProfileModal(!showEditProfileModal)
  }
  return (
    <div className="profile-page-container">
      <CustomModal
        showModal={showEditProfileModal}
        onShowOrHide={onShowOrHideEditProfileModal}
      >
        <div className="edit-profile-modal">
          <div className="button-container">
            <Button onClick={onShowOrHideEditProfileModal} style={{ color: "#061088"}} type="text">
              Cancel
            </Button>
            <Button type="primary" style={{ backgroundColor: '#061088', border: 'none'}}>Save</Button>
          </div>
          <div style={{ height: '50px' }} />
          <div className="scrollable">
            <div className="change-img-container">
              <div className="image-url-container" style={{backgroundImage: `url(${profileImage})`}}></div>
              <label className="change-image-round-btn" for="change-image">
                <FontAwesomeIcon icon={faCameraRetro} />
                <input type="file" name="" id="change-image" style={{ display: 'none' }} onChange={ event => console.log(URL.createObjectURL(event.target.files[0].blob))} accept="image/*"/>
              </label>
            </div>

            <div className="input-fields-container">
              <div className="inputs">
                <NormalInput
                  label="Bio Data"
                  iconName="mail"
                  type="email"
                  inputColor="#5A5656"
                  value={bio}
                  labelPadding=".5% 3%"
                  onChange={(event) => {
                  setBio(event.target.value)
                  }}
                />
              </div>
              <div style={{ height: '20px' }} />
              <NormalInput
                label="Github URL"
                iconName="mail"
                type="email"
                inputColor="#5A5656"
                labelPadding=".5% 3%"
                value={githubUrl}
                onChange={(event) => {
                setGithubUrl(event.target.value)
                }}
              />
              <div style={{ height: '20px' }} />
              <NormalInput
                label="Twitter URL"
                iconName="mail"
                type="email"
                inputColor="#5A5656"
                labelPadding=".5% 3%"
                value={twitterUrl}
                onChange={(event) => {
                setTwitterUrl(event.target.value)
                }}
              />
              <div style={{ height: '20px' }} />
              <NormalInput
                label="LinkedIn URL"
                iconName="mail"
                type="email"
                inputColor="#5A5656"
                labelPadding=".5% 3%"
                value={linkedinUrl}
                onChange={(event) => {
                setLinkedinUrl(event.target.value)
                }}
              />
            </div>
          </div>
        </div>
      </CustomModal>
      <div className="profile-page">
        <div className="inner-profile">
          <div className="image-url-container" style={{backgroundImage: `url(${profileData.imageUrl})`}}></div>
          <p className="name">{profileData.fullname}</p>
          <p className="bio">{profileData.bio}</p>

          <button onClick={onShowOrHideEditProfileModal}>Edit</button>
          <div className="social-media-links">
            <div className="link-container">
              <div className="inner-link-container">
                <FontAwesomeIcon icon={faGithub} className="link-icon" />
                <p>{profileData.githubUrl}</p>
              </div>
              <FontAwesomeIcon icon={faCog} size={20} className="link-icon" />
            </div>

            <div className="link-container">
              <div className="inner-link-container">
                <FontAwesomeIcon icon={faTwitter} className="link-icon" />
                <p>{profileData.twitterUrl}</p>
              </div>
              <FontAwesomeIcon icon={faCog} size={20} className="link-icon" />
            </div>

            <div className="link-container">
              <div className="inner-link-container">
                <FontAwesomeIcon icon={faLinkedin} className="link-icon" />
                <p>{profileData.linkedInUrl}</p>
              </div>
              <FontAwesomeIcon icon={faCog} size={20} className="link-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ProfilePage)
