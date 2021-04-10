import React from 'react'
import './styles.scss'

const LessonFolder = ({ lessonFolder }) => {
  return (
    <div>
      <img src={lessonFolder.folderImage} alt=""/>
      <h1>{lessonFolder?.folderTitle}</h1>
    </div>
  )
}

export default LessonFolder
