import { Col, Container, Row } from 'react-bootstrap';
import headshot from "../assets/selfie.jpg"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import resume from "../assets/resume.pdf"


const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col sm={12} lg={5}>
                        <div className='circle-img'>
                            <img src={headshot} alt="Ashley Davis" />
                        </div>

                        <div className="social-icon">
                            <a href="https://github.com/ashleytdavis" target="_blank" rel="noreferrer"><img src={github} alt="" /></a>
                            <a href="https://www.linkedin.com/in/ashleytdavis/" target="_blank" rel="noreferrer"><img src={linkedin} alt="" /></a>
                            <a href="https://twitter.com/ashleydavis921" target="_blank" rel="noreferrer"><img src={twitter} alt="" /></a>
                        </div>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className='about-me-text'>
                            <h4>Ashley Davis</h4>
                            <h5>Computer Science and Math Student @ Northeastern University,
                                Software Engineer, and Teaching Assistant @ Khoury College</h5>
                            <p>I currently work as a teaching assistant for Khoury College for the CS2810 course: Mathematics and Data Models.
                                In this role, I teach undergraduate students the fundamentals of linear algebra, probability and statistics,
                                discrete mathematics, and machine learning!
                            </p>
                            <p>Outside of tech, I am an avid fencer, weightlifter, and love to teach and help others.</p>
                            <h5>Khoury College at Northeastern University</h5>
                            <ul>
                                <li>Bachelor of Science in Computer Science, Concentration in Software, Minor in Mathematics</li>
                                <li>
                                    <span>
                                        <h6 className='coursework'>Relevant Coursework: </h6>
                                        Object Oriented Design, Algorithms and Data Structures, Theory of Computation,
                                        Programming in C++, Logic and Computation, Calculus 3, Discrete Mathematics,
                                        Foundations of Cybersecurity, Differential Equations and Linear Algebra
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center ">
                    <Col>
                        <h1 className='learn-more'>Learn more about my :</h1>
                        <div className='learn-more-buttons'>
                            <a href="#skills">Skills</a>
                            <a href="#portfolio">Projects</a>
                            <a href={resume} target="_blank" rel="noreferrer" className='dark-btn'>
                                Resume
                            </a>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;