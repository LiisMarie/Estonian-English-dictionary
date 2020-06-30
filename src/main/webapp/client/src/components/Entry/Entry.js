import React from "react";

import {Card, Form, Button, Col, Image} from 'react-bootstrap';

import axios from 'axios';

import MyToast from "../MyToast";

export default class Entry extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.entryChange = this.entryChange.bind(this);
        this.submitEntry = this.submitEntry.bind(this);
    };

    initialState = {
        id:'', wordEst:'', wordEng:''
    };

    componentDidMount() {
        const entryId = +this.props.match.params.id;
        if (entryId) {
            this.findEntryById(entryId);
        }
    };

    findEntryById = (entryId) => {
        axios.get("http://localhost:8080/entries/"+entryId)
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        id: response.data.id,
                        wordEst: response.data.wordEst,
                        wordEng: response.data.wordEng
                    })
                }
            }).catch((error) => {
            console.log("Error - " + error);
        });
    }

    submitEntry = event => {
        event.preventDefault();

        const entry = {
            wordEst: this.state.wordEst,
            wordEng: this.state.wordEng
        };

        axios.post("http://localhost:8080/entries", entry)
            .then(response => {
                if(response.data != null) {
                    this.setState({"show":true, "method":"put"});
                    setTimeout(() => this.setState({"show":false}), 3000);
                } else {
                    this.setState({"show":false});
                }
            });

        this.setState(this.initialState);
    };

    entryChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    resetEntry = () => {
        this.setState(() => this.initialState)
    };

    entryList = () => {
        return this.props.history.push("/list");
    };

    updateEntry = event => {
        event.preventDefault();

        const entry = {
            id: this.state.id,
            wordEst: this.state.wordEst,
            wordEng: this.state.wordEng
        };

        axios.put("http://localhost:8080/entries", entry)
            .then(response => {
                if(response.data != null) {
                    this.setState({"show":true, "method":"put"});
                    setTimeout(() => this.setState({"show":false}), 3000);
                    setTimeout(() => {
                        this.entryList();
                        this.setState(this.initialState);
                    }, 1000);
                } else {
                    this.setState({"show":false});
                    this.setState(this.initialState);
                }
            });
    }

    render() {


        return (

            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyToast show = {this.state.show} message = {this.state.method === "put" ? "Entry updated successfully" : "Entry saved successfully."} type="success"/>
                </div>

                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        {this.state.id ? "Update entry" : "Add new entry"}
                    </Card.Header>
                    <Form onReset={this.resetEntry} onSubmit={this.state.id ? this.updateEntry : this.submitEntry} id="bookFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="wordInEstonian">
                                    <Form.Label>
                                        <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg" width="25" height="35"/>
                                        {'  '} Estonian
                                    </Form.Label>
                                    <Form.Control required
                                                  type="test" name="wordEst"
                                                  value={this.state.wordEst}
                                                  onChange={this.entryChange}
                                                  autoComplete="off"
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter word in Estonian" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="wordInEnglish">
                                    <Form.Label>
                                        <Image src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" roundedCircle width="25" height="35"/>
                                        {'  '} English
                                    </Form.Label>
                                    <Form.Control required
                                                  type="test" name="wordEng"
                                                  value={this.state.wordEng}
                                                  onChange={this.entryChange}
                                                  autoComplete="off"
                                                  className={"bg-dark text-white"}
                                                  placeholder="Enter word in English" />
                                </Form.Group>
                            </Form.Row>

                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>

                            <Button size="sm" variant="info" type="reset">
                                <i className="fas fa-undo"/> Reset
                            </Button>
                            {'  '}
                            <Button size="sm" variant="info" type="button" onClick={() => this.entryList()}>
                                <i className="fas fa-list"/> Entry list
                            </Button>
                            {'  '}
                            <Button size="sm" variant="success" type="submit">
                                <i className="fas fa-save"/> {this.state.id ? "Update" : "Submit"}
                            </Button>

                        </Card.Footer>
                    </Form>
                </Card>
            </div>

        );
    };

}
