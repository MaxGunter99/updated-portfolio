

// CSS
import '../css/summary.css'

import config from "../config.js";
// import avatar from "../images/Avatar1.jpeg";
import avatar from "../images/Avatar3.PNG";

export default function Summary() {

    return (

        <div className="summary-container">


            <img className="avatar-image" src={avatar} alt="Profile"/> 

            <br /> 

            <div className='summary-content'>
                <h2 className="main-font">About Me</h2>
                <p>{config["JOB_TITLE"]} educated by a hands-on experience through Lambda School's Full-Stack Web Development track. Strong collaborator, works well in cross-functional teams to achieve the project or task at hand. Enjoys creating efficient ways to improve user interfaces.</p>
            </div>
            
        </div>

    )
}