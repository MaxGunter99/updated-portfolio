
import "../css/projects.css"

import { 
    // GitHub as LinkToProjectSource, 
    // ExternalLink as LinkToProjectSource
    Link2 as LinkToProjectSource
} from 'react-feather';
import PersonalizeImage from "../images/Personalize.PNG"
// import RubiksCubeImage from "../images/RubiksCube.PNG"
import MultiToolVideoGames from "../images/MultiToolVideoGames.png"

export default function Projects() {
    
    return (
        <div className="projects-container">

            <h2 className="main-font">Projects</h2>

            <div className="project-item">

                <div className="project-info">
                    <div className="project-title-container">
                        <h4 className="project-title">Multi-Tool</h4>
                        <p className="project-dates">June 2025 - Present</p>
                    </div>
                    <a className="project-link" href="https://github.com/MaxGunter99/React-Node-Scratch" target="_blank" rel="noreferrer" title="View this project on GitHub">
                        {/* <LinkToProjectSource className="icon"/> */}
                        <strong>GitHub</strong>
                    </a>
                </div>


                <br />
                {/* <img src={MultiToolVideoGames} className="project-image"/> */}

                <div className="project-details">
                    <p>A modular hands-on React sandbox built to level up your frontend and backend skills. It's not just about writing code, it's about experimenting, building real features, and learning through trial and error. Break things, fix them, and grow.</p>
                    <br />

                        <p><strong>The Weather</strong></p>
                        <ul>
                            <li>Displays live, geolocation-based weather data with hourly caching</li>
                            <li>Utilizes a free weather API: <a href="https://www.weatherapi.com">https://www.weatherapi.com</a></li>
                            <li>Caches weather data every hour rather than requesting it on every refresh</li>
                        </ul>

                        <p><strong>Unauthenticated Messages</strong></p>
                        <ul>
                            <li>Connected to a database using custom Node.js API routes</li>
                            <li>Dynamic frontend built with React Hooks and functional components</li>
                            <li>Add, update, and delete entries in real-time, no authentication required</li>
                            <li>Backend profanity filters included to prevent inappropriate language from being submitted to the database.</li>
                        </ul>


                        <p><strong>Redux Video Game Tracker</strong></p>
                        <ul>
                            <li>Connected to a database using Node.js API routes</li>
                            <li>Utilizes redux for state management and Class Components</li>
                            <li>Add, change, or delete to a list of video games played</li>
                            <li>No user authentication required</li>
                            <li>Backend profanity filters included to prevent inappropriate language from being submitted to the database.</li>
                            <li>Lists should be filterable based on platform, rating, and favorite</li>
                        </ul>

                </div>

            </div>

            <br />

            <div className="project-item">


                <div className="project-info">
                    <div className="project-title-container">
                        <h4 className="project-title">Digital Rubik's Cube Solver</h4>
                        <p className="project-dates">Jan 2024 - May 2024</p>
                    </div>
                    <a className="project-link" href="https://github.com/MaxGunter99/digital_rubiks_cube" target="_blank" rel="noreferrer" title="View this project on GitHub">
                        {/* <LinkToProjectSource className="icon"/> */}
                        <strong>GitHub</strong>
                    </a>
                </div>


                <br />
                {/* <img src={RubiksCubeImage} className="project-image rubiks-cube"/> */}

                <pre>
                    <code>
                        <br/>
                        cube_client = RubiksCube()
                        <br/>

                        cube_client.shuffle_cube( random_turns_count = 100 )
                        <br/>

                        cube_client.visualize_cube()
                        <br/>
                        <br/>

                        steps_to_solve = cube_client.solve_cube()
                        <br/>
                        print( steps_to_solve 

                        <br/>
                        <br/>
                    </code>
                </pre>

                <br />

                <div className="project-details">

                    
                    <p>This is an interactive Python project that brings the classic Rubik's Cube into the digital realm. It leverages a custom 3D matrix data structure to represent the cube and manipulate each face with precision—no AI shortcuts, just pure, hand-crafted logic. The goal? Solve any configuration in under 30 seconds—though it's currently achieving solutions in just 0.05 seconds, faster than the Hokey Pokey.</p>
                    
                    <br />
                    
                    <ul>
                        <li><a href="https://github.com/MaxGunter99/digital_rubiks_cube?tab=readme-ov-file#project-milestones" >Project Milestones</a></li>
                        <li>Built a digital Rubik's Cube simulation using Python and a custom 3D matrix system</li>
                        <li>Developed a high-performance solving algorithm averaging 0.05 seconds per mixed cube</li>
                        <li>Implemented a eight-step solving sequence that validates key cube states before progressing to the next phase <a href="https://github.com/MaxGunter99/digital_rubiks_cube/blob/main/SolveCubeSteps.md" >(Solve Steps Logic)</a></li>
                        <li>Created unit tests using Python's <code>unittest</code> framework to validate face movement, edge alignment, and full solution verification <a href="https://github.com/MaxGunter99/digital_rubiks_cube/tree/main/tests/test_cases" >(Test Cases)</a></li>
                        <li>Designed system to accept real-world cube states as input and return a complete solve path</li>
                        <li>Includes step-by-step solve visualization to review and learn from each calculated solution</li>
                    </ul>

                </div>

            </div>

            <br />

            <div className="project-item">



                <div className="project-info">
                    <div className="project-title-container">
                        <h4 className="project-title">Personalize</h4>
                        <p className="project-dates">Jan 2020 - Present</p>
                    </div>
                    <a className="project-link" href="https://github.com/MaxGunter99/Personalize" target="_blank" rel="noreferrer" title="View this project on GitHub">
                        {/* <LinkToProjectSource className="icon"/> */}
                        <strong>GitHub</strong>
                    </a>
                </div>

                <br />
                <img src={PersonalizeImage} className="project-image"/>

                <br />
                <br />

                <div className="project-details">
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