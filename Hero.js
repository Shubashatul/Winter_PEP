import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'
import accountImg from "./account.png";

const Hero = () => {
  return (
    <Container className='text-center my-5'>
        <Row className='justify-content-center'>
            <Col md={8}>
                <h1 className='display-4'>Designer, Front End Developer & Student </h1>
                <p className='lead'> I design and code simple things, and I love Coading</p>
                <Image 
                    src={accountImg}
                    roundedCircle
                    width="150"
                    className='my-3'
                
                />
            </Col>
        </Row>

    </Container>
  )
}

export default Hero;