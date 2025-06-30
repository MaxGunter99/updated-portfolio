
import "../css/credentials.css"

import { Link } from 'react-feather';

export default function Credentials() {

    return (

        <div className="credentials-container">

            <h2>Credentials</h2>

            <br />

            <div className="credential-item-container">
                
                <div className="credential-item">
                    <p><strong>Full-Stack Web Development + Technical Interviewing</strong></p>
                    <a href="https://www.credly.com/badges/4c4221f0-93e9-4716-be89-1d9b38ba2427?source=linked_in_profile"><Link className="icon"/></a>
                </div>
                
                <div className="credential-item">
                    <p><strong>Java Tutorial for Complete Beginners</strong></p>
                    <a href="https://www.udemy.com/certificate/UC-45d53560-c7b9-4559-856a-ea159a8114c9/"><Link className="icon"/></a>
                </div>

            </div>

        </div>

    );

}