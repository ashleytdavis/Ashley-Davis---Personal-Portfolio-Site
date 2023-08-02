import { Col, Row, Modal, Button, Container } from "react-bootstrap"
import { useState } from 'react';

const ProjectCard = ({ title, description, imageURL, projectType, longDescription, github_link, project_gif}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    function project_availability(projectType) {
        if (projectType === 'Academic Project') {
            // 
            return <span>As per Northeastern University guidelines, all code for academic projects cannot be publically posted. To view the code for this project, fill out my contact form at the bottom of this site!</span>
        }
        return <span>View this project on github: <a href={github_link} target="_blank" rel="noreferrer">{github_link}</a></span>;
    }

    return (
        <>
            <Col sm={12} md={12} lg={4} className='no-gutters' onClick={handleShow}>
                <div className="project-imagebox ">
                    <img src={imageURL} alt="project"></img>
                    <div className="project-text">
                        <h5>{projectType}</h5>
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </Col>
            <Modal show={show} onHide={handleClose} size="lg" dialogClassName="modal-margin">
                <Modal.Body closeButton>
                    <Container>
                        <Row className="center-align-items modal-body">
                            <h1 >{title}</h1>
                            <Col sm={12} md={12} lg={12}className="modal-description">
                                <p>{longDescription}</p>
                            </Col>
                            <Col sm={12} md={12} lg={12}className="modal-gif">
                                <img src={project_gif} alt="project clip"/>
                            </Col>
                            {project_availability(projectType)}
                        </Row>
                    </Container>
                    <Button variant="secondary" onClick={handleClose} className="dark-btn">
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default ProjectCard;