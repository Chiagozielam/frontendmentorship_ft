import React, { useContext, useEffect } from 'react'
import { Spin } from 'antd'
import LessonFolder from '../../../../components/lessonFolder/LessonFolder'
import { lessonFoldersArray } from '../data'
import CourseContext from "../../../../context/course-context/CourseContext"
import GeneralContext from "../../../../context/generalContext/GeneralContext"

import './styles.scss'

const LessonFolders = ({ isLoading }) => {

  const { userLessonFolders } = useContext(CourseContext)
  const { generalState: { user } } = useContext(GeneralContext) 
  return (
    <div className="lesson-folders-component">
      <div className="lesson-folders-container">
        {
          isLoading ? (
            <Spin
              tip="Loading Folders..."
              size="large"
              style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30%"}}
            />
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
