
// CSS
import '../css/footer.css'

import config from "../config";
import { GitHub, Linkedin, Mail } from 'react-feather';

// IMAGES
import LambdaStamp from '../images/LambdaStamp.png'

export default function Footer() {

    const toGitHub = () => {
        window.location.href = 'https://github.com/MaxGunter99'
    };
  
    const toLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/michael-gunter-5383a0181/'
    };
  
    const toEmail = () => {
        window.location.href = "mailto:Michael.Alex.Gunter@gmail.com";
    };

    return (

        <footer className="footer-container">

            <div className='footer-content'>

                <div className="footer-section left">
                    <h2 className="text-item"><strong>{config["NAME"]}</strong></h2>
                    <p className="text-item"><strong>Full-Stack Web Developer</strong></p>
                    <p className="text-item">Bloom Institute of Technology (Lambda)</p>
                    {/* <p>Austin, TX</p> */}
                </div>

                <div className="footer-section center">
                    <img src={LambdaStamp} alt='LambdaStamp' className='LambdaStamp' />
                </div>

                <div className="footer-section right">
                    <div className="icon-group" onClick={ toGitHub }>
                        <GitHub className="icon"/>
                        <p className="text-item link">GitHub</p>
                    </div>
                    <div className="icon-group" onClick={ toLinkedIn }>
                        <Linkedin className="icon"/>
                        <p className="text-item link">LinkedIn</p>
                    </div>
                    <div className="icon-group" onClick={ toEmail }>
                        <Mail className="icon"/>
                        <p className="text-item link" >Email</p>
                    </div>
                </div>

            </div>
                

        </footer>

    )
}