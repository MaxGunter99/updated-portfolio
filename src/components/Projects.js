
import "../css/projects.css"

import { GitHub } from 'react-feather';

export default function Projects() {
    
    return (
        <div className="projects-container">

            <h2>Projects</h2>

            <div className="project-item">

                <h4 className="project-title">Multi-Tool</h4>

                <div className="project-info">
                    <p className="project-dates">June 2025 - Present</p>
                    <a className="project-link" href="https://github.com/MaxGunter99/React-Node-Scratch"><GitHub className="icon"/></a>
                </div>

                <br />

                <div className="project-Details">
                    <p>Modular react-based project suite designed for feature experimentation across frontend and backend technologies</p>

                    <br />
                    <ul>
                        <li><strong>The Weather -</strong> Fully functional component that pulls live, location-based weather data using an external API, includes automatic caching to reduce calls</li>
                        <li><strong>Unauthenticated Messages -</strong> Lightweight message board built with react hooks that stores entries in a database without login, includes profanity filtering</li>
                        <li><strong>Video Game Tracker -</strong> Built with Redux and class components, allows users to manage video game list stored in a backend database. No authentication required</li>
                    </ul>
                </div>

            </div>

            <br />

            <div className="project-item">

                <h4 className="project-title">Digital Rubik's Cube Solver</h4>

                <div className="project-info">
                    <p className="project-dates">Jan 2024 - May 2024</p>
                    <a className="project-link" href="https://github.com/MaxGunter99/digital_rubiks_cube"><GitHub className="icon"/></a>
                </div>

                <br />

                <div className="project-Details">
                    <ul>
                        <li>Developed Python algorithm capable of solving mixed cubes averaging just 0.05 seconds per solve</li>
                        <li>Constructed a digital Rubik's cube in python</li>
                        <li>Utilized unittest for test driven development for validating cube movement and processing each solve step</li>
                    </ul>
                </div>

            </div>

            <br />

            <div className="project-item">

                <h4 className="project-title">Personalize</h4>

                <div className="project-info">
                    <p className="project-dates">Jan 2020 - Present</p>
                    <a className="project-link" href="https://github.com/MaxGunter99/Personalize"><GitHub className="icon"/></a>
                </div>

                <br />

                <div className="project-Details">
                    <p>Job tracking application that motivates users to continue applying through statistical information and tips.</p>
                    <br />
                    <ul>
                        <li>Keeps track of all the jobs a user applies to.</li>
                        <li>Implemented a custom search web scraper for job recommendations from users' favorite job boards. If the user wants to apply to that job all of the necessary information is readily available to add to their database.</li>
                        <li>Visual activity graph based on how many jobs the user applies.</li>
                        <li>Node backend used to store all the user's data.</li>
                    </ul>
                </div>

            </div>

        </div>
    )

}