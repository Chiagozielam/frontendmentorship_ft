import React from 'react'
import LessonFolder from '../../../../components/lessonFolder/LessonFolder'
import { lessonFoldersArray } from '../data'

const LessonFolders = () => {
  return (
    <div>
      {
        lessonFoldersArray.map( lessonFolder => (
          <LessonFolder lessonFolder={lessonFolder} />
        ))
      }
    </div>
  )
}

export default LessonFolders
