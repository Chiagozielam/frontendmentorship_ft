import "./styles.scss";
import GeneralButton from "../GeneralButton";
const LessonDescription = ({ description }) => {
  return (
    <span>
      <h1 className="lesson-description-header">Lesson Description</h1>
      <p className="lesson-description">{description}</p>
      <span className="access-files-button">
        <GeneralButton
          buttonText="Get Access Files"
          borderRadius="5px"
          width="172px"
          height="39px"
          fontSize="#F14A03"
        />
      </span>
    </span>
  );
};

export default LessonDescription;
