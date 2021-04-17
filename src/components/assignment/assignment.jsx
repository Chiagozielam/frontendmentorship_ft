import './styles.scss'
import { Link } from 'react-router-dom'
const Assignment = () => {
  return (
    <div className="assignment-container">
      <h3>Assignment</h3>
      <Link to="#" className="assignment-link">Click here to view assignment</Link>
    </div>
   );
}
 
export default Assignment;