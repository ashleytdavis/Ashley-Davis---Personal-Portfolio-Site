import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

// IMPORTING ICONS
import javaIcon from "../assets/java-icon.png"
import pythonIcon from "../assets/python-icon.png"
import CplusplusIcon from "../assets/Cplusplus-icon.png"
import frontEndIcon from "../assets/frontend-icon.png"


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
                                    <img src={javaIcon} alt="Java Icon" className="circle-background" />
                                    <h5>Java</h5>
                                    <p></p>
                                </div>
                                <div className="item">
                                    <img src={CplusplusIcon} alt="C++ Icon" className="circle-background" />
                                    <h5>C++</h5>
                                    <p></p>
                                </div>
                                <div className="item">
                                    <img src={pythonIcon} alt="Python Icon" className="circle-background" />
                                    <h5>Python</h5>
                                    <p></p>
                                </div>
                                <div className="item">
                                    <img src={frontEndIcon} alt="HTML/CSS/JS Icon" className="circle-background" />
                                    <h5>HTML / CSS / JS</h5>
                                    <p></p>
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