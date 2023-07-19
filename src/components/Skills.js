import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

// IMPORTING ICONS
import javaIcon from "../assets/java-icon.png"
import pythonIcon from "../assets/python-icon.png"
import CplusplusIcon from "../assets/Cplusplus-icon.png"
import htmlcssjsIcon from "../assets/html-css-js-icon.png"


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };




    return (
        <section className="skills" id="skills">
            <Container >
                <Row >
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <h3>Below are some of my skills, and I'm always seeking to learn more!</h3>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={javaIcon} alt="Java Icon" />
                                    <h5>Java</h5>
                                    <p>I have over 3 years of software developement experience in Java creating games and various other applications, including blah blah blah </p>
                                </div>
                                <div className="item">
                                    <img src={CplusplusIcon} alt="C++ Icon" />
                                    <h5>C++</h5>
                                    <p>This past spring, I completed CS3520: Programming in C++ with a high A. The class entailed creating user friendly applications
                                        and games using the various libraries offered by the language.
                                    </p>
                                </div>
                                <div className="item">
                                    <img src={pythonIcon} alt="Python Icon" />
                                    <h5>Python</h5>
                                    <p>Over the past three years, I've both privately tutored and taught for the Khoury College of Computer Science principles of data science and machine learning using Python.
                                        I've also created few personal and academic projects using libraries such as Pygame,
                                    </p>
                                </div>
                                <div className="item">
                                    <img src={htmlcssjsIcon} alt="HTML/CSS/JS Icon" />
                                    <h5>HTML / CSS / JS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;