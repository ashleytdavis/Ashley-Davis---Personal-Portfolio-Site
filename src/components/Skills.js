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





    const skills = [
        {
            name: "Java",
            icon: javaIcon,
            info: "I have over 3 years of development experience in Java, creating various applications and games using libraries such as java swing and javalib.",
        },
        {
            name: "Python",
            icon: pythonIcon,
            info: "From spending time as a private data science tutor, to currently serving as a teaching assistant for Khoury College, I use my 4 years of experience in Python to teach undergraduates the fundamentals of data science and machine learning using fundamental libraries such as NumPy, Matplotlib, and Pandas.",
        },
        {
            name: "C++",
            icon: CplusplusIcon,
            info: "I have completed various academic projects using C++, using popular game libraries such as ncurses, and intend to use my freetime to continue pursing personal projects using this language.",
        },
        {
            name: "HTML / CSS / JS",
            icon: frontEndIcon,
            info: "I have been developing my front end skills over the last year through personal projects and by becoming a developer for Oasis at Northeastern. I have made myself very familiar with libraries such as react and frameworks such as bootstrap.",
        },
    ];


    return (
        <section className="skills" id="skills">
            <Container >
                <Row >
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <h3>Below are some of my skills, and I'm always seeking to learn more!</h3>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {
                                    skills.map(skill => {
                                        return (
                                            <div className="item">
                                                <img src={skill.icon} alt="Icon" className="circle-background" />
                                                <h5>{skill.name}</h5>
                                                <p>{skill.info}</p>
                                            </div>
                                        );
                                    })
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;