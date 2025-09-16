import { Card } from 'primereact/card';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills-container" id="mySkills">
            <div className="skills-header">
                <img src="./images/myskills.jpg" alt="Skills" className="skills-image" />
            </div>
            <div className="skills-content">
                {/* Frontend Skills Card */}
                <Card className="skills-card">
                    <h2 className="section-title">Frontend Skills</h2>
                    <div className="skills-section">
                        <div className="progress-bar">
                            <div className="label">ReactJs</div>
                            <div className="progress">
                                <div className="percentage skill1" style={{ width: '95%' }}>95%</div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <div className="label">Typescript</div>
                            <div className="progress">
                                <div className="percentage skill2" style={{ width: '90%' }}>90%</div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <div className="label">Redux</div>
                            <div className="progress">
                                <div className="percentage skill3" style={{ width: '80%' }}>80%</div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Other Technical Skills Card */}
                <Card className="skills-card">
                    <h2 className="section-title">Other Technical Skills</h2>
                    <div className="skills-section">
                        <div className="progress-bar">
                            <div className="label">Javascript</div>
                            <div className="progress">
                                <div className="percentage skill4" style={{ width: '90%' }}>95%</div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <div className="label">HTML/CSS</div>
                            <div className="progress">
                                <div className="percentage skill5" style={{ width: '75%' }}>75%</div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <div className="label">NodeJs/ExpressJS</div>
                            <div className="progress">
                                <div className="percentage skill6" style={{ width: '50%' }}>50%</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Skills;