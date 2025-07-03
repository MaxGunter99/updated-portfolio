
import "../css/skills.css"

export default function Skills() {

    const skills = {
        "JavaScript": true,
        "Python": true,
        "Java": false,
        "SQL": false,
        "React": true,
        "Django": false,
        "Node.js": true,
        "Redux": true,
        "Express": false,
        "Git": false,
        "Unit Testing": false,
        "Google Cloud": false,
        "Swagger": false,
        "HTML": true,
        "CSS": true
    };


    return (
        <div className="skills-list-container">

            <h2 className="skills-list-title main-font">Skills</h2>
            
            <div className="skills-list">
                { Object.entries(skills).map( ([ skill, isFavorite ])  => {
                    return (
                        <p className={`skill ${ isFavorite ? "favorite" : ""}`}>{skill}</p>
                    )
                }) }
                {/* <p className="skill">JavaScript</p>
                <p className="skill">Python</p>
                <p className="skill">Java</p>
                <p className="skill">SQL</p>
                <p className="skill">React</p>
                <p className="skill">Django</p>
                <p className="skill">Node.js</p>
                <p className="skill">Redux</p>
                <p className="skill">Express</p>
                <p className="skill">Git</p>
                <p className="skill">Unit Testing</p>
                <p className="skill">Google Cloud</p>
                <p className="skill">Swagger</p>
                <p className="skill">HTML/CSS</p> */}
            </div>



        </div>
    )
    
}