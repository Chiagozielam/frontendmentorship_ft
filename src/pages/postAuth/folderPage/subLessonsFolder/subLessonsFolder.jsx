import SubLesson from '../../../../components/subLesson/sublesson'
import GeneralButton from '../../../../components/GeneralButton'
import Assignment from '../../../../components/assignment/assignment'
import './styles.scss'
import { useEffect, useState } from 'react'

const SubLessonsFolders = ({ lessons, folderTitle, changeDescription, changeVideo }) => {

  // state for button disabled
  const [btnDisabled, setBtnDisabled] = useState(true)


  useEffect(() => {
    //rendering the default vaalue for video description
    changeDescription(lessons[0]?.lessonDetailsArray[0]?.description)

    //rendering the default value for video link
    changeVideo(lessons[0]?.lessonDetailsArray[0]?.videoLink)

    // check if btn disabled is true or false
    btnState()
  }, [])


  //  function on each lesson clicked
  const lessonClick = (lesson) => {
    
    // function for changing of description
    changeDescription(lesson?.lessonDetailsArray[0]?.description)

    // function for changing of videolink
    changeVideo(lesson?.lessonDetailsArray[0]?.videoLink)
    console.log(lesson?.lessonDetailsArray[0]?.videoLink)

    // function for setting lesson active state
    setLessonActiveValue(lesson)

    //setting lesson clicked as completde 
    lesson.completed = true

    // check if btn disabled is true or false
    btnState()

  }

  // function for setting lessson active value
  const setLessonActiveValue = (lesson) => {
    
    // all sublesson active state set to false

    // subLessons.forEach(e => {
    //   e.active = false
    // })

    // lesson clicked active state set to true 

    // lesson.active = true
  }

  // function for btn state
  const btnState = () => {

    // using every method to check if all lessons are completed
    // let allTrue = subLessons.every((e) => {
    //   return e.completed
    // })

    // statement when all lessons are completed
    // if (allTrue) {
    //   setBtnDisabled(false)
    // }
    
  }

  return (
    <div className="sub-lessons-folder-wrapper">
      <h1 className="folder-title">{folderTitle}</h1>

      <div className="sub-lesson-wrapper">  
        {
          lessons.map((lesson, index) => (
            <div className={`sub-lesson
            ${lesson.active === true ? 'active' : ''}`}
            onClick={() => lessonClick(lesson) }>
              <SubLesson subLesson={lesson} index={index} />
            </div>
          ))
        }

        <Assignment />
      </div>

      <GeneralButton disabled={btnDisabled} buttonText="Next Chapter" borderRadius="0px 0px 15px 15px" width="100%" height="59px" fontSize="18px" />

    </div>
   );
}
 
export default SubLessonsFolders;