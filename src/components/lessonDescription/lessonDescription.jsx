import './styles.scss'

const LessonDescription = ({description}) => {
  return (
    <span>
      <h1 className="lesson-description-header">Lesson Description</h1>
      <p className="lesson-description">{ description }</p>
    </span>
   );
}
 
export default LessonDescription;