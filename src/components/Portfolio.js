import { Row, Col, Container } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard.js';
import project1Img from '../assets/project1Img.png';
import project2Img from '../assets/project2Img.png';
import project3Img from '../assets/project3Img.png';
import project4Img from '../assets/project4Img.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Photo Editor Application",
            description: "CS3500 Project involving the transformation and editing of images of only approved file types",
            imageURL: project1Img,
            projectType: "Academic Project",
        },
        {
            title: "i-Wordle",
            description: "Based on the NYT hit Wordle, users can now input an arbitrary integer i as the length of the word (restricted from 4-13)",
            imageURL: project2Img,
            projectType: "Personal Project",
        },
        {
            title: "Maze Sovler",
            description: "CS2510 Project involving a randomly generated maze solved using either BFS or DFS, depending on user input",
            imageURL: project3Img,
            projectType: "Academic Project",
        },
        {
            title: "Flood-it",
            description: "CS2510 Project involving the replication of the popular game Flood-it",
            imageURL: project4Img,
            projectType: "Academic Project",
        }, {
            title: "Marble Solitaire",
            description: "CS3500 Project involving the transformation and editing of images of only approved file types",
            imageURL: project1Img,
            projectType: "Academic Project",
        },
        {
            title: "Photo Editor Application",
            description: "CS3500 Project involving the transformation and editing of images of only approved file types",
            imageURL: project1Img,
            projectType: "Academic Project",
        },
        {
            title: "Photo Editor Application",
            description: "CS3500 Project involving the transformation and editing of images of only approved file types",
            imageURL: project1Img,
            projectType: "Academic Project",
        },
        {
            title: "Photo Editor Application",
            description: "CS3500 Project involving the transformation and editing of images of only approved file types",
            imageURL: project1Img,
            projectType: "Academic Project",
        },
        {
            title: "Photo Editor Application",
            description: "CS3500 Project involving the transformation and editing of images of only approved file types",
            imageURL: project1Img,
            projectType: "Academic Project",
        },
    ];


    return (
        <section className='portfolio' id='portfolio'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                                    <h2>Featured Projects</h2>
                                    <p>Code for all acadaemic projects are available upon request!</p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
                <Row>
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            )
                        })
                    }
                </Row>
                <div className="visit-github">
                    <h1>To see more of my projects...</h1>
                    <div className='learn-more-buttons'>
                        <a href="https://github.com/ashleytdavis" target='_blank' rel="noreferrer"
                            className='dark-btn'>
                            Visit My Github!
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Portfolio;