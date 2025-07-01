import '../css/credentials.css';

// import { Link } from 'react-feather';

export default function Credentials() {

	return (
        <div className="credentials-container">
            <h2 className="main-font">Credentials</h2>

            <div className="credential-item-container">

                <a
                    href="https://www.credly.com/badges/4c4221f0-93e9-4716-be89-1d9b38ba2427?source=linked_in_profile"
                    className="credential-item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>
                        <strong>
                            Full-Stack Web Development + Technical
                            Interviewing
                        </strong>
                    </p>
                    <p>Issued by: Bloom Institute of Technology</p>
                    <br />
                    <span className="view-cert">View Certification ↗</span>
                </a>

                <a
                    href="https://www.udemy.com/certificate/UC-45d53560-c7b9-4559-856a-ea159a8114c9/"
                    className="credential-item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>
                        <strong>
                            Java Tutorial for Complete Beginners
                        </strong>
                    </p>
                    <p>Issued by: John Purcell on Udemy</p>
                    <br />
                    <span className="view-cert">View Certification ↗</span>
                </a>

            </div>
        </div>
	);
}
