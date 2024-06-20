import './Skills.css';

const Skills = () => {
    return (
        <div className="progress-bars-container" id="mySkills">
            <img src="./images/myskills.jpg" width="30%" />
            <div className="sections-container">
                <div className="section">
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
                <div className="section">
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
            </div>
        </div>
    );
}

export default Skills;