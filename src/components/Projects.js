
import "../css/projects.css"

import { GitHub } from 'react-feather';
import PersonalizeImage from "../images/Personalize.PNG"
// import RubiksCubeImage from "../images/RubiksCube.PNG"
import MultiToolVideoGames from "../images/MultiToolVideoGames.png"

export default function Projects() {
    
    return (
        <div className="projects-container">

            <h2 className="main-font">Projects</h2>

            <div className="project-item">

                <h4 className="project-title">Multi-Tool</h4>

                <div className="project-info">
                    <p className="project-dates">June 2025 - Present</p>
                    <a className="project-link" href="https://github.com/MaxGunter99/React-Node-Scratch"><GitHub className="icon"/></a>
                </div>

                <br />
                {/* <img src={MultiToolVideoGames} className="project-image"/> */}

                <div className="project-Details">
                    <p>Modular react-based project suite designed for feature experimentation across frontend and backend technologies</p>

                    <br />
                    <ul>
                        <li><strong>The Weather -</strong> Fully functional component that pulls live, location-based weather data using an external API, includes automatic caching to reduce calls</li>
                        <li><strong>Messages -</strong> Lightweight message board built with react hooks that stores entries in a database without login, includes profanity filtering</li>
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
                {/* <img src={RubiksCubeImage} className="project-image rubiks-cube"/> */}

                <div className="project-Details">
                    <p>This is an interactive Python project that brings the classic Rubik's Cube into the digital realm. It leverages a custom 3D matrix data structure to represent the cube and manipulate each face with precision—no AI shortcuts, just pure, hand-crafted logic. The goal? Solve any configuration in under 30 seconds—though it's currently achieving solutions in just 0.05 seconds, faster than the Hokey Pokey.
                    </p>
                    <br />
                    <ul>
                        <li><a href="https://github.com/MaxGunter99/digital_rubiks_cube?tab=readme-ov-file#project-milestones" >Project Milestones</a></li>
                        <li>Built a digital Rubik's Cube simulation using Python and a custom 3D matrix system</li>
                        <li>Developed a high-performance solving algorithm averaging 0.05 seconds per mixed cube</li>
                        <li>Implemented a eight-step solving sequence that validates key cube states before progressing to the next phase. <a href="https://github.com/MaxGunter99/digital_rubiks_cube/blob/main/SolveCubeSteps.md" >(Solve Steps Logic)</a></li>
                        <li>Created unit tests using Python's <code>unittest</code> framework to validate face movement, edge alignment, and full solution verification. <a href="https://github.com/MaxGunter99/digital_rubiks_cube/tree/main/tests/test_cases" >(Test Cases)</a></li>
                        <li>Designed system to accept real-world cube states as input and return a complete solve path</li>
                        <li>Includes step-by-step solve visualization to review and learn from each calculated solution</li>
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
                <img src={PersonalizeImage} className="project-image"/>

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