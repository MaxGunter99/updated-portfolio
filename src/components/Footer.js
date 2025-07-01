// CSS
import '../css/footer.css';

import config from '../config';
import { GitHub, Linkedin, Mail } from 'react-feather';

// IMAGES
import LambdaStamp from '../images/LambdaStamp.png';

export default function Footer() {
	return (
		<footer className="footer-container">
			<div className="footer-content">
				<div className="footer-section left">
					<h2 className="text-item">
						<strong>{config['NAME']}</strong>
					</h2>
					<p className="text-item">
						<strong>Full-Stack Web Developer</strong>
					</p>
					<p className="text-item">
						Bloom Institute of Technology (Lambda)
					</p>
					{/* <p>Austin, TX</p> */}
				</div>

				<div className="footer-section center">
					<img
						src={LambdaStamp}
						alt="LambdaStamp"
						className="LambdaStamp"
					/>
				</div>

				<div className="footer-section right">
					<a
						href="https://github.com/MaxGunter99"
						className="icon-group"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHub className="icon" />
						<p className="text-item link">GitHub</p>
					</a>

					<a
						href="https://www.linkedin.com/in/michael-gunter-5383a0181/"
						className="icon-group"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin className="icon" />
						<p className="text-item link">LinkedIn</p>
					</a>

					<a
						href="mailto:Michael.Alex.Gunter@gmail.com"
						className="icon-group"
					>
						<Mail className="icon" />
						<p className="text-item link">Email</p>
					</a>
				</div>
			</div>
		</footer>
	);
}
