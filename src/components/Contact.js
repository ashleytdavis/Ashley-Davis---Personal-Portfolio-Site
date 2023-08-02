import { Container, Row, Col } from "react-bootstrap";
import $ from 'jquery';


const Contact = () => {
    var submitted = false;
    if (submitted) {
        $('#gform').on('submit', function (e) {
            $('#gform *').fadeOut(2000);
            $('#gform').prepend('Your submission has been processed...');
        })
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center contact-box">
                    <Row>
                        <Col lg={12} className="text-center">
                            <div className="contact-methods">
                                <h2>Contact Me</h2>
                                <span>Email:
                                    <a href="davis.ash@northeastern.edu"> davis.ash@northeastern.edu </a>
                                    ||
                                    <a href="ashley921davis@gmail.com"> ashley921davis@gmail.com </a>
                                </span>
                            </div>
                            <div className="contact-methods">
                                <span>
                                    Phone:
                                    <a href="tel:9738977712"> 973-897-7712</a>
                                </span>
                            </div>
                            <br />
                            <h5>... or use the following form!</h5>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col lg={12}>
                            <form name="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSea1lWgJZcDfYdKVsCtBcssupLFMbkpxbJP7jTu-u_n4-UsHg/formResponse?" target="hidden_iframe" onSubmit={submitted = true}>
                                <Row>
                                    <Col md={6} className="px-1">
                                        <input type="text" placeholder="Name" name="entry.1970272624" id="entry.1970272624" />
                                        <input type="text" placeholder="Email Address" name="entry.581725335" id="entry.581725335" />
                                        <input type="email" placeholder="Phone Number" name="entry.202082344" id="entry.202082344" />
                                    </Col>
                                    <Col md={6}>
                                        <textarea row="6" placeholder="Message" name="entry.168425920" id="entry.168425920" />
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                        <Col lg={12} className="align-items-center">
                            <button type="submit" onClick={() => {submitted = true}}><span>Send Message</span></button>
                        </Col>
                        <iframe title="Contact Form" name="hidden_iframe" id="hidden_iframe" onload={() => { if (submitted) { } }} />
                    </Row>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;