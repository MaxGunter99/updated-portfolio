
import "../css/resume.css"

import ResumePDF from "../resumes/Michael_Gunter_Resume.pdf"
import { 
    Package,
    FileText,
    Download
} from "react-feather"

export default function Resume() {

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

                <a 
                    href={ResumePDF} 
                    download="Michael_Gunter_Resume.pdf"
                    class="resume-button"
                >
                    <strong>Download Resume</strong> 
                    {/* <Package className="download-icon"/> */}
                    {/* <FileText className="download-icon"/> */}
                    <Download className="download-icon"/>
                </a>

            </div>

        </div>
    )
    
}