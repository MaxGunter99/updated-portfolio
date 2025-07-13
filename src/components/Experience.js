
import "../css/experience.css"

export default function Experience() {
    
    return (
        <div className="experience-container">

            <h2 className="main-font">Experience</h2>

            <div className="experience-item">

                <h4>Shift Manager</h4>

                <div className="experience-info">
                    <div className="experience-info-location">
                        <p><strong>Domino's Pizza</strong></p>
                        <p>Fredericksburg, TX</p>
                    </div>
                    <p>Oct 2024 - Present</p>
                </div>

                {/* <br /> */}

            </div>

            <br />

            <div className="experience-item">

                <h4>Software Engineer</h4>

                <div className="experience-info">
                    <div className="experience-info-location">
                        <p><strong>The Helper Bees</strong></p>
                        <p>Austin, TX</p>
                    </div>
                    <p>Jun 2020 - Oct 2023</p>
                </div>

                <br />

                <div className="experience-details">
                    <p>Engineered full-stack features and internal pipelines that directly supported new partner integrations and optimized healthcare operations. Delivered high-impact solutions across React and Django dashboards that streamlined scheduling for medical staff.</p>
                    <br />
                    <ul>
                        <li>Build React/Django pipelines across internal dashboards to support partner onboarding and expansion</li>
                        <li>Automated calendar parsing to identify open slots for Nurse Assessors, enabling smarter appointment scheduling and better coverage</li>
                        <li>Created partner-facing APIs with auto-generated documentation</li>
                    </ul>
                </div>
            </div>

        </div>
    )

}