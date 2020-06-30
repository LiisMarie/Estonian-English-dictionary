import React from "react";

import {Container, Col, Navbar} from 'react-bootstrap';

class Footer extends React.Component {

    render() {
        let fullYear = new Date().getFullYear();

        return (<Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <Col lg={12} className="text-center text-muted">
                    <div>{fullYear}, All Rights Reserved by Liis-Marie Kütt</div>
                </Col>
            </Container>
        </Navbar>);
    }

}

export default Footer;