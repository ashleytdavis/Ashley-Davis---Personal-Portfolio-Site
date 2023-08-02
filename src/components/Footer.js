import { Col, Container, Row } from 'react-bootstrap';
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import resume from "../assets/resume.pdf"

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center copyright">
                    <Col md={4} >
                        <p>Copyright © Ashley Davis 2023</p>
                        <p>Made with love (and react)</p>
                    </Col>
                    <Col md={4}>
                        <Row className='align-items-center'>
                            <div className='social-icon large-icon'>
                                <a href="https://github.com/ashleytdavis" target="_blank" rel="noreferrer"><img src={github} alt="github icon" /></a>
                                <a href="https://www.linkedin.com/in/ashleytdavis/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin icon" /></a>
                                <a href="https://twitter.com/ashleydavis921" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter icon" /></a>
                            </div>
                        </Row>
                    </Col>
                    <Col md={4} >
                        <ul>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href='#portfolio'>Portfolio</a></li>
                            <li><a href={resume} target='_blank' rel='noreferrer'>Resume</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;