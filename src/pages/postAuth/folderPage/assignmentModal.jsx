import { faBookReader, faCloudDownloadAlt, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import GeneralModal from '../../../components/modals/general-modal/GeneralModal'
import './styles.scss'

const AssignmentModal = ({ assignmentModalIsVisible, setAssignmentModalIsVisible, instructor, folderAssignment }) => {
  return (
    <GeneralModal
      modalOpened={assignmentModalIsVisible}
      setModalOpened={setAssignmentModalIsVisible}
      width="38%"
      height="80%"
    >
      <div className="assignment-modal-container" style={{ padding: "2% 4%"}}>
        <div className="assignment-modal-section-box">
          <h3>
            <span className="heading-text">Description of The task</span>
            <FontAwesomeIcon color="#F14A03" style={{marginLeft: "10px"}} icon={faBookReader} size={"35%"} />
          </h3>
          <p>
            {folderAssignment}
          </p>
        </div>

        <div className="assignment-modal-section-box">
          <h3>
            <span className="heading-text">How to Submit</span>
            <FontAwesomeIcon color="#A6A6A6" style={{marginLeft: "10px"}} icon={faCloudDownloadAlt} size={"35%"} />
          </h3>
          <p>
            Push your code to GitHub and send an email to me: <b>{instructor?.twitterLink}</b> with a link to your repository
            and name of the task.
          </p>
        </div>

        <div className="warning-container">
          <h4>
            <FontAwesomeIcon color="#DB0000" style={{marginRight: "5px"}} icon={faExclamationCircle} size={"35%"} />
            <span className="warning-heading-text">Note</span>
          </h4>
          <p>
            Submitting the assignments are an important part of your growth. Please reach out to me via the
            email if you’re confused on what to do.
          </p>
        </div>
      </div>
    </GeneralModal>
  )
}

export default AssignmentModal
