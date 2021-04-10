import React from 'react'
import LessonFolder from '../../../../components/lessonFolder/LessonFolder'
import { lessonFoldersArray } from '../data'
import './styles.scss'

const LessonFolders = () => {
  return (
    <div className="lesson-folders-container">
      <div>
        {
          lessonFoldersArray.map( lessonFolder => (
            <LessonFolder lessonFolder={lessonFolder} />
          ))
        }
      </div>
    </div>
  )
}

export default LessonFolders
