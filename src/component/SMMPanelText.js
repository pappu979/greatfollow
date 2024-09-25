import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SMMPanelText = () => {
  return (
    <Container className="pt-4">
      <Row>
        <Col>
          <h1 className="text-center fw-bold" style={{ color: "#1e79e4" }}>
            <Link to="/" style={{textDecoration: "none"}}>Best SMM Panel of India - Cheapsmmglobal</Link>
          </h1>
          <p className="lead text-start mt-3 fw-bold" style={{ color: "#0c305b", fontSize: "20px" }}>
            Cheapsmmglobal is India's best SMM panel given a 5/5 star rating. SMM panel which accepts all Indian payments
            <span>[ Paytm, Gpay, Phone pe, Amazon Pay, Fam Pay, and cards ]</span> with 24*7 support always.
          </p>
          <p className="text-start mt-3 fw-bold" style={{ color: "#106fbe", fontSize: "18px" }}>
            Cheapest SMM panel services for Instagram, Facebook, Youtube, Tiktok, Telegram, Twitter, Website traffic, and many more
            cheapest SMM services.
          </p>
          <p className="text-start mt-3 fw-bold" style={{ color: "#0c305b", fontSize: "18px" }}>We can Beat any SMM Panel Price in the market.</p>
          <h3 className="text-start mt-4 fw-bold" style={{ color: "#0c305b", fontSize: "18px" }}>Why we get 5 Star Rating:</h3>
          <ul className="text-start list-unstyled fw-bold" style={{ color: "#0c305b", fontSize: "18px" }}>
            <li >100% Payment Guarantee</li>
            <li >24*7 Real Support - Live Chat is also available</li>
            <li >Cheapest SMM Services</li>
            <li >Superfast SMM Services</li>
            <li >Real & Non-Drop SMM Service</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default SMMPanelText;
