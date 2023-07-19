import { Col } from "react-bootstrap"

const ProjectCard = ({ title, description, imageURL, projectType }) => {
    return (
        <Col sm={6} md={6} lg={4} className='no-gutters'>
            <div className="project-imagebox">
                <img src={imageURL} alt="project"></img>
                <div className="project-text">
                    <h5>{projectType}</h5>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
}


export default ProjectCard;