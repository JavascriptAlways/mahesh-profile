import './Experience.css';

const Experience = () => {
    return (
        <div className="experience-container" id="myExperience">
            <h1>Experience</h1>
            <div className="entry color1">
                <h3>Tech Mahindra</h3>
                <p>Position: Senior Software Engineer</p>
                <p>Duration: Jan 2022 - Present</p>
            </div>
            <div className="entry">
                <h3>Globallogic(Hitachi Group of Company)</h3>
                <p>Position: Senior Software Engineer</p>
                <p>Duration: Dec 2020 - Dec 2021</p>
            </div>
            <div className="entry color1">
                <h3>Chetu Inc</h3>
                <p>Position: Software Engineer</p>
                <p>Duration: Oct 2018 - Dec 2020</p>
            </div>
            <div className="entry">
                <h3>Adit24x7</h3>
                <p>Position: Software Engineer</p>
                <p>Duration: Dec 2015 - Aug 2018</p>
            </div>
            {/* Add more entries as needed */}
        </div>
    );
}

export default Experience;