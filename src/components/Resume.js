
import "../css/resume.css"

import ResumePDF from "../resumes/Michael_Gunter_Resume.pdf"
import { 
    Download
} from "react-feather"

export default function Resume({ returnButton }) {

    const downloadResumeButton = (
        <a 
            href={ResumePDF} 
            download="Michael_Gunter_Resume.pdf"
            class="resume-button"
        >
            <strong>Download Resume</strong>
            <Download className="download-icon"/>
        </a>
    )

    if ( returnButton === true ) {
        return downloadResumeButton
    }

    return (
        <div className="resume-container">

            <h2 className="main-font">Resume</h2>

            <div className="resume-pdf-container">
                {/* <iframe 
                    src={ResumePDF} 
                    type="application/pdf" 
                    className="resume"
                    name="resume"
                    width="100%"
                    height="100%"
                /> */}

                {downloadResumeButton}

            </div>

        </div>
    )
    
}