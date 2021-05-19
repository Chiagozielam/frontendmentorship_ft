import React, { useContext, useEffect } from 'react'
import { Spin } from 'antd'
import LessonFolder from '../../../../components/lessonFolder/LessonFolder'
import { lessonFoldersArray } from '../data'
import CourseContext from "../../../../context/course-context/CourseContext"
import GeneralContext from "../../../../context/generalContext/GeneralContext"

import './styles.scss'

const LessonFolders = () => {

  const { userLessonFolders, isLoading } = useContext(CourseContext)
  const { generalState: { user } } = useContext(GeneralContext) 
  return (
    <div className="lesson-folders-component">
      <div className="lesson-folders-container">
        {
          isLoading ? (
            <Spin size="large" />
          ) : (
            <div>
              {
                userLessonFolders?.map( lessonFolder => (
                  <LessonFolder lessonFolder={lessonFolder} />
                ))
              }
              {
                !user?.paid ? (
                  <div>
                    {
                      lessonFoldersArray.map( lessonFolder => (
                        <LessonFolder lessonFolder={lessonFolder} />
                      ))
                    }
                  </div>
                ) : ""
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default LessonFolders
