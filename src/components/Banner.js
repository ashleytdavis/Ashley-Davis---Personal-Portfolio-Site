import { useState, useEffect, useCallback } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import headshot from "../assets/headshot.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const [text, setText] = useState('');
    const [delta, setDelta] = useState(275 - Math.random() * 100);
    const period = 2000;

    const tick = useCallback(() => {
        const toRotate = ["Software Engineer", "Software Developer", "Teaching Assistant"];
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [isDeleting, loopNum, text])

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text, delta, tick])

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col md={12}>
                        <div className='circle-img'>
                            <img src={headshot} alt="Ashley Davis" />
                        </div>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>{`Hi I'm Ashley Davis `}<span className="wrap">{text}</span></h1>
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