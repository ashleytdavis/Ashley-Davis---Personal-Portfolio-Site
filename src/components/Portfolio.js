import { Row, Col, Container } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard.js';
import project1Img from '../assets/project1Img.png';
import PhotoApp from '../assets/photo-editor-app-gif.gif'

import project2Img from '../assets/project2Img.png';
import iWordle from '../assets/iWordle-gif.gif'

import project3Img from '../assets/project3Img.png';
import maze_solver from '../assets/maze-solver-gif.gif';

import TrackVisibility from 'react-on-screen';
import 'animate.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Photo Editor Application",
            description: "CS3500 Project involving the transformation and editing of images of only approved file types",
            imageURL: project1Img,
            projectType: "Academic Project",
            longDescription: "This project was a paired programming exercise for my CS3500 class: Object Oriented Design. The assignment entailed creating a layered photo editor application where users can (using java swing)",
            github_link: "https://github.com/ashleytdavis/Photo-Editor-Application",
            project_gif: PhotoApp,
        },
        {
            title: "Maze Sovler",
            description: "CS2510 Project involving a randomly generated maze solved using either BFS or DFS, depending on user input",
            imageURL: project3Img,
            projectType: "Academic Project",
            longDescription: "In this java project, users can solve a maze of any inputted size using Depth First Search (DFS) or Breadth First Search (BFS). Users select how they want to solve the maze by hitting the (D)FS key or the (B)FS key, and can regenerate a maze of that same size using the (R)eset key.",
            github_link: "https://github.com/ashleytdavis/Maze-Solver",
            project_gif: maze_solver,
        },
        {
            title: "i-Wordle",
            description: "Based on the NYT hit Wordle, users can now input an arbitrary integer i as the length of the word (restricted from 4-13)",
            imageURL: project2Img,
            projectType: "Personal Project",
            longDescription: "i-Wordle is a replication of the hit New York Times game 'Wordle', with a catch! Upon opening the program, users are prompted to enter a number (4-13, inclusive), that represents the length of the word to be guessed. The program pulls from a wordlist similar to that of the actual game and was constructed using the Pygame library.",
            github_link: "https://github.com/ashleytdavis/i-Wordle",
            project_gif: iWordle,
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
                                    <p>Code for all acadaemic projects is available upon request!</p>
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