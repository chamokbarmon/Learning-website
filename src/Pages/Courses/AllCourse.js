import React from 'react';
import { useLoaderData } from 'react-router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const AllCourse = () => {
    const course = useLoaderData()
    const {name,picture,title,details} =course;
    return (

        <div>
            <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {title}
        </Card.Text>
        <p>{details}</p>
        <Button variant="primary">Get premium Access</Button>
      </Card.Body>
    </Card>
        </div>
    )
       
                 
        
   
};

export default AllCourse;