import './styles.scss'
import { Link } from 'react-router-dom'
const Assignment = ({ onClick }) => {
  return (
    <div className="assignment-container" onClick={onClick}>
      <h3>Assignment</h3>
      <p className="assignment-link">Click here to view assignment</p>
    </div>
   );
}
 
export default Assignment;