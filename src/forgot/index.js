import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Form, Button, Col } from "react-bootstrap";
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    console.log("Captcha value:", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    if (recaptchaValue) {
      // Proceed with password reset logic
      console.log("Form submitted");
    } else {
      alert("Please complete the reCAPTCHA");
    }
  };

  return (
    <Col md={4} className="mx-auto" style={{marginTop: "20px", paddingBottom: "15rem"}}>
      <div className="p-4 border rounded bg-light">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" required />
          </Form.Group>
          <div className="recaptcha-container mb-3">
            <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={handleRecaptchaChange} />
          </div>
          <Button variant="primary" type="submit" className="w-100">
            Send
          </Button>
        </Form>
      </div>
    </Col>
  );
};

export default ForgotPassword;
