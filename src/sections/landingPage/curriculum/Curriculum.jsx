import "./styles.scss";
import { curriculumObjectArray } from "./data";
import GeneralButton from "../../../components/GeneralButton";
import HeaderText from "../../../components/headerText/headerText";
import NormalText from "../../../components/normalText/normalText";
import { useState } from "react";

const Curriculum = () => {
  const [seeAll, setSeeAll] = useState(false);
  const [btnText, setBtnText] = useState("See All Curriculums");
  const dropDown = () => {
    setSeeAll(!seeAll);
    if (seeAll == false) {
      setBtnText("See Less Curriculums");
    } else {
      setBtnText("See All Curriculums");
    }
  };
  return (
    <div className="curriculum_container">
      <HeaderText
        text="Mentorship Curriculum"
        fontSize="32px"
        fontWeight="700"
        textAlign="center"
        color="#FFFFFF"
        className="curriculum_header"
      />
      <NormalText
        text="A breakdown the topics covered in the mentorship program"
        width="283px"
        fontSize="16px"
        fontWeight="400"
        textAlign="center"
        color="#D7D7D7"
        margin="auto"
        className="sub_text"
      />

      <div className={seeAll ? "curriculum" : "seeLess"}>
        {curriculumObjectArray.map((datum) => {
          const { icon, title, subText } = datum;
          return (
            <div className="each_curriculum">
              <img src={icon} alt={title} className="lesson_icon" />
              <div className="text">
                <NormalText
                  text={title}
                  fontWeight="700"
                  color="#ffff"
                  className="title"
                />
                <NormalText
                  text={subText}
                  lineHeight="0px"
                  color="#E3E1E1"
                  fontSize="16px"
                  className="subText"
                />
              </div>
            </div>
          );
        })}
      </div>
      <GeneralButton
        buttonText={btnText}
        width="331px"
        height="66px"
        borderRadius="15px"
        className="curriculum_button"
        onClick={() => dropDown()}
      />
    </div>
  );
};

export default Curriculum;
