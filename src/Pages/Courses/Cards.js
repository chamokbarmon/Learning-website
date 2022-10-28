import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Cards.css';
const Cards = ({pro}) => {
    const {name,picture,title} =pro;
    console.log(pro)
    return (
        <Container>
            <Row>
                <Col className='cards'>
                <Card style={{ width: '30rem'}}>
              <Card.Img variant="top" src={picture}/>
              <Card.Body>
                <Card.Title>Name :{name}</Card.Title>
                <Card.Text>
                  Title: {title}
                </Card.Text>
              </Card.Body>
              <Card.Body>
               
              </Card.Body>
            </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Cards;