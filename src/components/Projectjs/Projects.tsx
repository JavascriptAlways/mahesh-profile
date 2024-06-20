import './Projects.css';
import { Card } from 'primereact/card';

const Projects = () => {
    
    const projects = [
        {
            name: 'Project 1',
            domain: 'Healthcare',
            description: 'Project is based on HealthCare domain where we created this project from initial state, setting up from scratch up to multiple modules. In this project we handle UI part using ReactJs, Typescript & JavaScript and backend part using NodeJs & ExpressJs.',
        },
        {
            name: 'Project 2',
            domain: 'Telecom(AT&T)',
            description: 'Project is based on Telecom domain(AT&T) where we worked on payment module. In this project we handle UI part using ReactJs , Redux & JavaScript, Material UI and backend part using NodeJs & ExpressJs. ',
        },
        {
            name: 'Project 3',
            domain: 'Telecom(Verizon)',
            description: 'Project is based on Telecom domain(Verizon) where we worked on (shield & GSLV) modules. In this project we handle UI part using ReactJs , Redux & JavaScript, Prime React and backend part using NodeJs & ExpressJs. ',
        },
        {
            name: 'Project 4',
            domain: 'Banking & Insurance',
            description: "Managing calculations and transactions with webhook APIs from backend and implementing the same to the frontend (React Js) to display the transactions with all the calculations.In this project we utilize typescript in our application components and handles types using interfaces and type keyword."
        },
    ];

    const renderProjects = () => {
        return projects.map((project, index) => (
            <div key={index} className="p-col-12 p-md-4">
                <Card className="project-card">
                    <h2>{project.name}</h2>
                    <p><strong>Domain:</strong> {project.domain}</p>
                    <p>{project.description}</p>
                </Card>
            </div>
        ));
    }

    return (
        <div className="projects-container" id="myProjects">
            <h1>Featured Projects</h1>
            <div className="p-grid">
                {renderProjects()}
            </div>
        </div>
    );
}

export default Projects;