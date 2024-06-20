import './Education.css';

const Education = () => {
    return (
        <div id="myEducation">
            <h1 className="education-heading">Education</h1>
            <div className="education-experience-container">
                <div className="column">
                    <div className="entry">
                        <h3>Uttar Pradesh Technical University</h3>
                        <p>Degree: Masters in Computer Application</p>
                    </div>      
                </div>
                <div className="column">
                    <div className="entry">
                        <h3>Mahatma Jyotiba Phule Rohilkhand University</h3>
                        <p>Degree: Bachler of Science(PCM)</p>
                    </div>
                </div>
                <div className="column">
                    <div className="entry">
                        <h3>Central Board of Secondary Education</h3>
                        <p>Degree: High School and Intermediate</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;