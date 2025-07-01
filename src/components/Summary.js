

// CSS
import '../css/summary.css'

import config from "../config.js";
// import avatar from "../images/Avatar1.jpeg";
// import avatar from "../images/Avatar2.jpeg";
import avatar from "../images/Avatar3.PNG";

export default function Summary() {

    return (

        <div className="summary-container">


            <img className="avatar-image" src={avatar} /> 

            <br /> 

            <div className='summary-content'>
                <h2 className="main-font">About Me</h2>
                <p>{config["JOB_TITLE"]} with 3+ years of experience building apps in React and Django. Bootcamp-trained with industry experience. Passionate about performance, resilience, and systems that work. Outside of coding, I enjoy flying a custom-built drone and discovering new music.</p>
            </div>
            
        </div>

    )
}