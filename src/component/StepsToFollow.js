import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './stepstoFollow.css';

function StepsToFollow() {
  const steps = [
    {
      step: 1,
      title: 'Sign up',
      description: 'Begin with creating an account and log in on cheapsmmglobal.',
    },
    {
      step: 2,
      title: 'Add Funds',
      description: 'Add funds to your account using a suitable payment option.',
    },
    {
      step: 3,
      title: 'Place Orders',
      description: 'Go to New Order, select the services you want and get ready to receive more publicity.',
    },
    {
      step: 4,
      title: 'Enjoy the results',
      description: "We'll inform you when your order is ready, then you can enjoy great results.",
    },
  ];

  return (
    <div className='stepsFollow-section'>
      <Container className="steps-container">
        <h2 className="text-center mb-4">Basic Steps To Follow</h2>
        <Row className="justify-content-center">
          {steps.map((step, index) => (
            <Col
              key={index}
              md={3}
              className={`step-card-col ${index % 2 === 0 ? 'align-self-end' : 'align-self-start'}`}
            >
              <Card className="step-card text-center shadow">
                <div className="step-number">
                  <h1>{step.step}</h1>
                </div>
                <Card.Body>
                  <h5 style={{ color: "#034a74" }}>{step.step}.{step.title}</h5>
                  <p>{step.description}</p>
                </Card.Body>
              </Card>

              {index < steps.length - 1 && (
                <span className="arrow-right" />
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default StepsToFollow;
