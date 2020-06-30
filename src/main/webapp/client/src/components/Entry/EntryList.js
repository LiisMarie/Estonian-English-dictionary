import React from "react";

import {Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import EntryTable from "./EntryTable";
import axios from "axios";

export default class EntryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: []
        };
    }


    componentDidMount() {
        this.findAllEntries();
    }

    findAllEntries() {
        axios.get("http://localhost:8080/entries")
            .then(response => response.data)
            .then(data => this.setState({entries: data}));
    };

    render() {
        const marginTop = {
            marginTop:"20px"
        };

        return (<>

            <Link to={"/entry"} className="button"><Button variant="primary">
                <i className="fas fa-plus-circle"/> {'   '} New entry
            </Button></Link>

            <Card className={"border border-dark bg-dark text-white"} style={marginTop}>

                <Card.Header>Entries</Card.Header>

                <Card.Body>

                    <EntryTable entriesToShow = {this.state.entries.sort((a, b) => a.wordEst.localeCompare(b.wordEst))}/>

                </Card.Body>

            </Card>

        </>);
    }

}