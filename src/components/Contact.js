import { Container, Row, Col } from "react-bootstrap";
import $ from 'jquery';


const Contact = () => {
    function postToGoogle() {
        // Retrieve input box values
        var field1 = $("#Name").val();
        var field2 = $("#Email").val();
        var field3 = $("#Phone").val();
        var field4 = $("#Message").val();

        $.ajax({
            //beforeSend: function (xhr) {
            //   xhr.setRequestHeader('Access-Control-Allow-Origin', 'chrome-extension://EXTENSION_ID');
            //  xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
            //},
            cache: false,
            url: "https://docs.google.com/forms/d/e/1FAIpQLSea1lWgJZcDfYdKVsCtBcssupLFMbkpxbJP7jTu-u_n4-UsHg",
            data: {
                "entry.1970272624": field1,
                "entry.581725335": field2,
                "entry.202082344": field3,
                "entry.168425920": field4
            },
            type: "POST",
            dataType: "xml",
            xhrFields: { withCredentials: true },
            statusCode: {
                0: function () {
                    console.log("OK");
                    return true;
                },
                200: function () {
                    console.log("error");
                    return false;
                },
                400: function () {
                    console.log("error");
                    return false;
                },
            },
            success: function (d) {
                $('#contact_form').trigger('reset');
            },
            error: function (x, y, z) {
                $('#contact_form').trigger('reset');
            }
        });
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
                        <form id="contact_form" onsubmit={postToGoogle()}>
                            <Col lg={12}>
                                <Row>
                                    <Col md={6} className="px-1">
                                        <input data-name="Name" id="Name" type="text" placeholder="Name*" name="entry.1970272624" required />
                                        <input data-name="Email" id="Email" type="email" placeholder="Email Address*" name="entry.581725335" required />
                                        <input data-name="Phone" id="Phone" type="tel" placeholder="Phone Number" name="entry.202082344" />
                                    </Col>
                                    <Col md={6}>
                                        <textarea data-name="Message" id="Message" row="6" placeholder="Message*" name="entry.168425920" required />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className="align-items-center">
                                <button type="submit" id="contact-submit"><span>Send Message</span></button>
                            </Col>
                        </form>
                    </Row>
                </Row>
            </Container>
        </section >
    );
}

export default Contact;