import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send Message');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: "Message sent successfully" });
        } else {
            setStatus({ success: false, message: "Something went wrong, please try again later." })
        }
    };



    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center contact-box">
                    <Row>
                        <Col lg={12} className="text-center">
                            <h5 className="contact-methods">
                                <h2>Contact Me</h2>
                                Email:
                                <a href="davis.ash@northeastern.edu"> davis.ash@northeastern.edu </a>
                                ||
                                <a href="ashley921davis@gmail.com"> ashley921davis@gmail.com </a>
                            </h5>
                            <h5 className="contact-methods">
                                Phone:
                                <a href="tel:9738977712"> 973-897-7712</a>
                            </h5>
                            <br />
                            <h5>... or use the following form!</h5>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col lg={12}>

                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6} className="px-1">
                                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    </Col>
                                    <Col md={6}>
                                        <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                        <Col lg={12} className="align-items-center">
                            <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                    </Row>
                </Row>
                {
                    status.message &&
                    <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                }
            </Container>
        </section>
    );
}

export default Contact;