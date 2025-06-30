
// CSS
import '../css/header.css'

import config from "../config.js";

export default function Header() {

    return (

        <div className="header-container">

            <div className="header-title-container">
                <h1>{config["NAME"]}</h1>
                <p>{config["JOB_TITLE"]}</p>
                <br />
                {/* <div className="header-subsection">
                </div> */}

                <div className="header-subsection">
                    <p className="item start">Fredericksburg, TX</p>
                    <p className="item middle">Michael.Alex.Gunter@gmail.com</p>
                    <p className="item end">830.9989.770</p>
                </div>
            </div>         
            
        </div>

    )
}