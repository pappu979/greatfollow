import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import quantityImg from '../image/quality.png';
import { Link } from 'react-router-dom';
import '../App.css';

const SmmPanelImage = () => {
    return (
        <>
        <Container className="mt-5 mb-2 bg-white">
            <Row className="pt-4">
                {/* Column for Image */}
                <Col md={12} xs={12} className="mb-3 mb-md-0" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Image
                        src={quantityImg}
                        alt="Responsive example"
                        fluid
                        className="w-100" 
                        style={{maxWidth: "750px"}}
                    />
                </Col>
            </Row>
            <Row>
                {/* Column for Text */}
                <Col md={10} xs={12} className='p-3'>
                    <h4 className="text-primary text-start fw-bold mt-2 smmPanel-responsive"><Link to="/" style={{textDecoration: "none"}}>Best SMM Panel of India - Cheapsmmglobal</Link></h4>
                    <p className='mt-3 text-start' style={{color: "#0c305b"}}>
                    Cheapsmmglobal is India's <span className='text-primary fw-bold'>best SMM panel </span> given a 5/5 star rating. <strong>SMM panel</strong> which accepts all Indian payments 
                    [ Paytm, Gpay, Phone pe, Amazon Pay, Fam Pay, and cards ]- with 24*7 support always. 
                    </p>
                </Col>
            </Row>
        </Container>

        <div style={{paddingLeft: "40px"}} className='pb-3'>
            <button style={{padding: "11px 16px", backgroundColor: "#1e79e4", border: "none", borderRadius: "8px", color: "#fff"}} className='mt-2 fw-bold'>Back</button>
        </div>
        </>

    );
};

export default SmmPanelImage;
