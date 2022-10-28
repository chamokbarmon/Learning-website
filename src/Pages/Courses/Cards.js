import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Cards.css';
const Cards = ({pro}) => {
    const {name,picture,title,_id} =pro;
    console.log(pro)
    return (
        <Container>
            <Row>
                <Col className='cards m-auto mb-5 ms-5'>
                <Card  style={{ width: '50rem'}}>
              <Card.Img variant="top" src={picture}/>
             
                <Card.Title>Name :{name}</Card.Title>
                <Card.Text>
                  Title: {title}
                </Card.Text>
                      
                <button className='btn btn-primary'><Link to={`/program/${_id}`} className='text-white'>See More Details</Link></button>
              
            </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Cards;