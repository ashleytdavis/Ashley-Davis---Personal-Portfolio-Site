import { Col, Container, Row } from "react-bootstrap";
import headshot from "../assets/headshot.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col md={12}>
                        <div className='banner-img circle-img'>
                            <img src={headshot} alt="Ashley Davis" />
                        </div>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>Ashley Davis</h1>
                                    <h2>Teaching Assistant @ Khoury College - Computer Science and Math @ Northeastern</h2>
                                    <a href="#about" className='dark-btn'>Enter Portfolio</a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;