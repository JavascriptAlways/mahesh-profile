import { Card } from 'primereact/card';
import './ExperienceEducation.css';

const ExperienceEducation = () => {
    return (
        <div className="sections-container" id='myExperience'>
            <div className="experience-education-container">
                {/* Experience Card */}
                <Card className="section-card">
                    <div className="card-content">
                        <h2 className="section-title">Experience</h2>
                        <div className="entry color1">
                            <h3>Tech Mahindra</h3>
                            <p>Position: Senior Software Engineer</p>
                            {/* <p>Duration: Jan 2022 - Present</p> */}
                        </div>
                        <div className="entry">
                            <h3>Globallogic(Hitachi Group of Company)</h3>
                            <p>Position: Senior Software Engineer</p>
                            {/* <p>Duration: Dec 2020 - Dec 2021</p> */}
                        </div>
                        <div className="entry color1">
                            <h3>Chetu Inc</h3>
                            <p>Position: Software Engineer</p>
                            {/* <p>Duration: Oct 2018 - Dec 2020</p> */}
                        </div>
                    </div>
                </Card>

                {/* Education Card */}
                <Card className="section-card">
                    <div className="card-content">
                        <h2 className="section-title">Education</h2>
                        <div className="entry">
                            <h3>Uttar Pradesh Technical University</h3>
                            <p>Degree: Masters in Computer Application</p>
                        </div>
                        <div className="entry color1">
                            <h3>Mahatma Jyotiba Phule Rohilkhand University</h3>
                            <p>Degree: Bachler of Science(PCM)</p>
                        </div>
                        <div className="entry">
                            <h3>Central Board of Secondary Education</h3>
                            <p>Degree: High School and Intermediate</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default ExperienceEducation;