import React, { useState, useContext, useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import "./styles.scss";
import { Row, Col } from "antd";
import BackButton from "../../../components/buttonWithIcon/ButtonWithIcon";
import Video from "../../../components/lessonVideoPlay/lessonVideoPlay";
import Description from "../../../components/lessonDescription/lessonDescription";
import Instructor from "../../../components/cards/instructorCard/instructorCard";
import SubLessonsFolders from "./subLessonsFolder/subLessonsFolder";
import { lessonFoldersArray } from "../../postAuth/lessonsPage/data";
import CourseContext from "../../../context/course-context/CourseContext";

import {
  faArrowCircleRight,
  faArrowCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import TabsComponent from "../../../components/tabs/Tabs";
import { POST_AUTH_ROUTES } from "../../../routes";
import GeneralModal from "../../../components/modals/general-modal/GeneralModal";
import AssignmentModal from "./assignmentModal";

const FolderPageComponent = () => {
  const { id: lessonFolderId } = useParams();
  const {
    state: { lessonFolder }
  } = useLocation();
  const { push } = useHistory();

  const { getUserLessonsForALessonFolder, unlockTheNextChapter } =
    useContext(CourseContext);

  // Store the lessons array in this state
  const [lessonsArray, setLessonsArray] = useState([]);
  const [assignmentModalIsVisible, setAssignmentModalIsVisible] =
    useState(false);

  const onGetLessons = async () => {
    const userLessons = await getUserLessonsForALessonFolder(lessonFolderId);
    setLessonsArray(userLessons);
    setVideolink(userLessons[0].lessonDetailsArray[0].videoLink);
    console.log(lessonsArray);
    console.log(
      "user lessons ",
      userLessons[0].lessonDetailsArray[0].videoLink
    );
  };
  useEffect(() => {
    onGetLessons().finally(() => {
      console.log(lessonsArray);
      console.log("Here is the lessonFolder: ", lessonFolder.folderDetails[0]);
    });
  }, []);

  // stroe lesson description in a state (passed as prop to lesson description component)
  const [description, setDescription] = useState();

  // stroe video link in a state (passed as prop to lesson video component)
  const [videolink, setVideolink] = useState(null);

  // fuction called when description changes
  const descriptionChanged = e => {
    setDescription(e);
  };

  // fuction called whwn video link changes
  const onVideoChange = e => {
    setVideolink(e);
  };

  const folderPageTabs = [
    {
      tabName: "Lessons",
      tabContent: (
        <SubLessonsFolders
          setAssignmentModalIsVisible={setAssignmentModalIsVisible}
          push={push}
          unlockTheNextChapter={unlockTheNextChapter}
          folderTitle={lessonFolder.folderDetails[0]?.folderTitle}
          folderIndex={lessonFolder?.folderDetails[0]?.lessonFolderIndex}
          lessons={lessonsArray}
          changeDescription={descriptionChanged}
          changeVideo={onVideoChange}
        />
      ),
      tabIndex: 1
    },
    {
      tabName: "Description",
      tabContent: (
        <div style={{ marginLeft: "25px" }}>
          <Description description={description} />
        </div>
      ),
      tabIndex: 2
    },
    {
      tabName: "Instructor",
      tabContent: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="instructor-mobile-card-wrapper">
            <Instructor
              cardColor="rgba(255, 255, 255, 0.47)"
              instructor={lessonFolder.folderDetails[0]?.instructor}
            />
          </div>
        </div>
      ),
      tabIndex: 3
    }
  ];

  return (
    <div className="folder-page-container">
      <AssignmentModal
        setAssignmentModalIsVisible={setAssignmentModalIsVisible}
        assignmentModalIsVisible={assignmentModalIsVisible}
        instructor={lessonFolder.folderDetails[0].instructor}
        folderAssignment={lessonFolder.folderDetails[0].milestoneAssignment}
      />
      <div className="folder-page-mobile">
        <div style={{ padding: "34px 14px" }}>
          <Video link={videolink} />
        </div>
        <TabsComponent
          tabBarColor="transparent"
          tabItems={folderPageTabs}
          marginLeft="auto"
          marginRight="auto"
        />
      </div>

      <div className="folder-page-desktop">
        <BackButton
          onClick={() => push(POST_AUTH_ROUTES)}
          buttonText="back to home"
          bgcolor="white"
          textColor="black"
          icon={faArrowCircleLeft}
          iconColor="#F14A03"
        />
        <Row className="content">
          <Col span={14} className="video-lesson-details">
            {/* video component  */}
            <Video link={videolink} />

            {/* Lesson description  */}
            <div className="lesson-description-wrapper">
              <Description description={description} />
            </div>

            {/* instructor card */}
            <div className="insructor-card-wrapper">
              <Instructor
                instructor={lessonFolder.folderDetails[0]?.instructor}
              />
            </div>
          </Col>

          <Col offset={1} span={8}>
            {/* sub lesson folder component  */}
            <SubLessonsFolders
              folderTitle={lessonFolder.folderDetails[0]?.folderTitle}
              folderIndex={lessonFolder?.folderDetails[0]?.lessonFolderIndex}
              lessons={lessonsArray}
              changeDescription={descriptionChanged}
              changeVideo={onVideoChange}
              unlockTheNextChapter={unlockTheNextChapter}
              push={push}
              setAssignmentModalIsVisible={setAssignmentModalIsVisible}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FolderPageComponent;
