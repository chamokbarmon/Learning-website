import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
import LeftSideShare from '../Pages/Shared/LeftSIdeShare/LeftSideShare';
import Header from './Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
             <Container>
                <Row>
                    <Col>
                    <LeftSideShare></LeftSideShare>
                    </Col> 
                    <Col>
                       <Outlet></Outlet>
                    </Col>
                </Row>
             </Container> 
        </div>
    );
};

export default Main;