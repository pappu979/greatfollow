import React from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './smmPanelPage.css';

const SmmPanelPage = () => {
    return (
        <Container className="mt-5">
        <Row>
          {/* Left Section */}
          <Col md={6}>
            <h1 className="text-primary"> <span style={{color: '#990099'}}>#1</span> <span style={{color: "#0c305b", fontWeight: "bold"}}>India Reseller SMM Panel</span></h1>
            <p className="lead">
              <span style={{color: "#034a74", fontWeight: "bold"}}>Cheapsmmglobal Gives the Cheapest and Real Quality SMM Panel Services for</span> 
              <span className="fw-bold fa-links"> Instagram, Facebook, TikTok, YouTube, Linkedin, etc.</span>
            </p>
            <ul>
              <li className="panel-list">24*7 Best WhatsApp Support in the World.</li>
              <li className="panel-list">Celebrities & Influencers First Choice.</li>
              <li className="panel-list">Quality that <span style={{color: "#990099"}}>Bollywood & Hollywood </span> Trusts.</li>
            </ul>
            <div>
              <p className="panel-review">✔ Cheapest Rates of India 🇮🇳 <span className="reviews">[0.03rs/k Reel views, 1rs - 1k likes]</span></p>
              <p className="panel-review">✔ Highest Rating SMM Panel in the World: ⭐⭐⭐⭐⭐ <span className="reviews">[5/5]</span></p>
              <p className="panel-review">✔ 100% Fund Adding Guarantee: ⭐⭐⭐⭐⭐ <span className="reviews">[5/5]</span></p>
              <p className="pay-type">All Payments are accepted: PayPal, Gpay, Phonepe, Paytm, Fampay, Amazon Pay, Stripe, etc.</p>
            </div>
          </Col>

          {/* Right Section - Sign In Form */}
          <Col md={6}>
            <div className="p-4 border rounded bg-light">
              <Form>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" className="signin-input" />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" className="signin-input" />
                  <Link to="/forgot">Forgot password?</Link>
                </Form.Group>
                <Form.Group controlId="formRememberMe" className="mb-3">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 sign-in-btn">
                  Sign in
                </Button>
                <p className="mt-2 text-center">Do not have an account? <Link className="signUp" to="/signup">Sign Up</Link></p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    )
}

export default SmmPanelPage;