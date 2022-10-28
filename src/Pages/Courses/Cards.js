import React from 'react';
import Card from 'react-bootstrap/Card';
import './Cards.css';
const Cards = ({pro}) => {
    const {name,picture,title} =pro;
    console.log(pro)
    return (
        <div  className='cards  mb-3 '>
            <Card style={{ width: '18rem'  }}>
              <Card.Img variant="top" src={picture} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {title}
                </Card.Text>
              </Card.Body>
              <Card.Body>
               
              </Card.Body>
            </Card>
         
        </div>
    );
};

export default Cards;