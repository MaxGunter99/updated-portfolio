

// CSS
import '../css/summary.css'

import config from "../config.js";
import avatar from "../images/Avatar.jpeg";

export default function Summary() {

    return (

        <div className="summary-container">


            <img className="avatar-image" src={avatar} />  

            <div className='summary-content'>
                <h3>About Me</h3>
                <p>{config["JOB_TITLE"]} with 3+ years of experience building apps in React and Django. Bootcamp-trained with industry experience. Passionate about performance, resilience, and systems that work. Outside of coding, I enjoy flying a custom-built drone and discovering new music.</p>
            </div>
            
        </div>

    )
}