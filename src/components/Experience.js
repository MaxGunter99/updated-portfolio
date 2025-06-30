
import "../css/experience.css"

export default function Experience() {
    
    return (
        <div className="experience-container">

            <h2>Experience</h2>

            <div className="experience-item">

                <h4>Crew Member (Part-Time)</h4>

                <div className="experience-info">
                    <p>Domino's Pizza</p>
                    <p>Fredericksburg, TX</p>
                    <p>Oct 2024 - Present</p>
                </div>

                <br />

            </div>

            <div className="experience-item">

                <h4>Software Engineer</h4>

                <div className="experience-info">
                    <p>The Helper Bees</p>
                    <p>Austin, TX</p>
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