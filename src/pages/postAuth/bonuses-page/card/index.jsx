import React from 'react'
import ButtonWithIcon from '../../../../components/buttonWithIcon/ButtonWithIcon'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './styles.scss'

const BonusPageCard = ({title, image, description, onClick}) => {
  return (
    <div className="bonus-page-card-container">
      <div className="bonus-page-card">
        <div className="image-container">
          <LazyLoadImage
            alt="lesson folder"
            className="folder-image"
            src={image} // use normal <img> attributes as props
          />
        </div>
        <div className="rest-of-the-card-body">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <div className="button-container">
            <ButtonWithIcon
              icon={faPlayCircle}
              buttonText="Watch"
              marginTop="6%"
              iconSize="14px"
              buttonHeight="49px"
              fontSize="16px" 
              buttonWidth="90%"
              bgcolor="#F14A03"
              buttonRadius="0"
              boxShadow="0px 5px 15px rgba(241, 74, 3, 0.66)"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BonusPageCard
