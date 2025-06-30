
// CSS
import '../css/footer.css'

import config from "../config";

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
                    <p className="text-item link" onClick={ toGitHub }>GitHub</p>
                    <p className="text-item link" onClick={ toLinkedIn }>LinkedIn</p>
                    <p className="text-item link" onClick={ toEmail }>Email</p>
                </div>

            </div>
                

        </footer>

    )
}