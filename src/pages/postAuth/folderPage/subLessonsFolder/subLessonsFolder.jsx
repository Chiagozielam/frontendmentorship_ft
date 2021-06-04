import { useEffect, useState, useContext } from "react";
import { Spin } from "antd";
import SubLesson from "../../../../components/subLesson/sublesson";
import GeneralButton from "../../../../components/GeneralButton";
import Assignment from "../../../../components/assignment/assignment";
import "./styles.scss";

const SubLessonsFolders = ({
  lessons,
  folderTitle,
  changeDescription,
  passLessonIdToVideo,
  changeVideo,
  folderIndex,
  unlockTheNextChapter,
  push,
  setAssignmentModalIsVisible
}) => {
  // state for button disabled
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // check if btn disabled is true or false
    btnState();
  }, [lessons]);

  const onUnlockTheNextChapter = () => {
    setIsLoading(true);
    unlockTheNextChapter(folderIndex, push).finally(() => setIsLoading(false));
  };

  //  function on each lesson clicked
  const lessonClick = lesson => {
    // function for changing of description
    changeDescription(lesson?.lessonDetailsArray[0]?.description);

    // function for changing of videolink
    changeVideo(lesson?.lessonDetailsArray[0]?.videoLink);
    // console.log(lesson?.lessonDetailsArray[0]?.videoLink);

    passLessonIdToVideo(lesson._id);

    // check if btn disabled is true or false
    btnState();
  };

  // function for setting lessson active value
  const setLessonActiveValue = lesson => {
    // all sublesson active state set to false
    // subLessons.forEach(e => {
    //   e.active = false;
    // });
    // lesson clicked active state set to true
    // lesson.active = true;
  };

  // function for btn state
  const btnState = () => {
    // using every method to check if all lessons are completed
    let allTrue = lessons.every(e => e.completed);
    if (allTrue) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  return (
    <div className="sub-lessons-folder-wrapper">
      <h1 className="folder-title">{folderTitle}</h1>

      <div className="sub-lesson-wrapper">
        {lessons.map((lesson, index) => (
          <div
            className={`sub-lesson ${lesson.active === true ? "active" : ""}`}
            onClick={() => lessonClick(lesson)}
          >
            <SubLesson subLesson={lesson} index={index} />
          </div>
        ))}

        <Assignment onClick={() => setAssignmentModalIsVisible(true)} />
      </div>

      {isLoading ? (
        <Spin
          tip="Unlocking next folder..."
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-10%",
            marginBottom: "10%",
            padding: "5%"
          }}
        />
      ) : (
        <GeneralButton
          onClick={onUnlockTheNextChapter}
          disabled={btnDisabled}
          buttonText="Next Chapter"
          borderRadius="0px 0px 15px 15px"
          width="100%"
          height="59px"
          fontSize="18px"
        />
      )}
    </div>
  );
};

export default SubLessonsFolders;
