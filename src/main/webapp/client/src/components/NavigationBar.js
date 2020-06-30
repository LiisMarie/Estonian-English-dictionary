import React from "react";

import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class NavigationBar extends React.Component {
    render() {

        const marginRight = {
            marginRight:"10px"
        };

        return (<Navbar bg="primary" variant="dark" expand="lg">

            <Link to={""} className="navbar-brand">
                <i className="fas fa-spell-check" style={marginRight}/>
                {' '}
                Estonian-English Dictionary
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to={""} className="nav-link">Translate</Link>
                <Link to={"entry"} className="nav-link">New entry</Link>
                <Link to={"list"} className="nav-link">Entry list</Link>
            </Nav>
            </Navbar.Collapse>

        </Navbar>);
    }

}

